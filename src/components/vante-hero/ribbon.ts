import type * as T from "three";

export type RibbonVideo = { title: string; src: string };

export type RibbonOptions = {
  /**
   * How a video fills its landscape card. "cover" (default) crops the video to fill the card.
   * "contain" shows the whole video and fills the rest of the card with the video's own background colour.
   */
  fit?: "cover" | "contain";
  /** Videos for the ribbon cards, in order. The first six land in the grid. Defaults to the original Vante reel. */
  videos?: RibbonVideo[];
  /** CSS selector of a sticky header above the hero. */
  offsetSelector?: string;
  reducedMotion?: boolean;
};

type GridRect = { x: number; y: number; w: number; h: number; vw: number; vh: number; c: number; r: number };
type Card = {
  i: number;
  title: string;
  v: HTMLVideoElement;
  tex: T.VideoTexture;
  geo: T.PlaneGeometry;
  mat: T.ShaderMaterial;
  mesh: T.Mesh;
  rect: GridRect | null;
  /** Which canvas layer(s) this card has pixels on: front = parts heading right-to-left, back = the rest. */
  front: boolean;
  back: boolean;
  vis: boolean;
};

const R2 = "https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/";
export const DEFAULT_VIDEOS: RibbonVideo[] = [
  ["Roadster 3D", "designs/roadster-3d-car-landing.mp4"],
  ["Living Portrait", "aaaf/living-portrait-hero.mp4"],
  ["Particle Self", "aaaf/oraciteslArea.mp4"],
  ["Robot Jellyfish", "aaaf/medusa-jellyfish-hero.mp4"],
  ["Ink Reveal", "designs/ink-reveal-hover.mp4"],
  ["Space Voyage", "designs/space-voyage-video.mp4"],
  ["Helion Dispatch", "designs/helion-dispatch-landing.mp4"],
  ["Honey Bee", "designs/honey-bee-melli-landing.mp4"],
].map(([title, src]) => ({ title, src: R2 + src }));

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => t * t * (3 - 2 * t);
const out = (t: number) => 1 - (1 - t) ** 3;
const span = (p: number, a: number, b: number) => clamp((p - a) / (b - a));

const CARD_W = 2.1, CARD_H = 1.32, GAP = 0.03, STEP = CARD_W + GAP, NX = 28, NY = 3;
const SAMPLES = 1200;
const PH0 = -1.5, PH1 = Math.PI * 2 + 1.35;
const GZ = 8;
const FOV = 35;
const RIB_A = 0.14, RIB_B = 0.63;

const VS = `attribute float aDir;varying vec2 vUv;varying float vDir;void main(){vUv=uv;vDir=aDir;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const FS = `uniform sampler2D map;uniform vec2 cover;uniform vec3 fill;uniform float aspect,ready,radius,pass,useDir;varying vec2 vUv;varying float vDir;
void main(){
  vec2 q=(abs(vUv-.5)-.5)*vec2(aspect,1.)+radius;
  float d=length(max(q,0.))+min(max(q.x,q.y),0.)-radius;
  float px=fwidth(d),a=1.-smoothstep(-px,px,d);
  if(a<.01)discard;
  // pass 1 = canvas in front of the review cards: keeps only parts heading right-to-left (vDir<0); pass 0 keeps the rest
  float dir=useDir>.5?vDir:1.;
  if(pass>.5?dir>=0.:dir<0.)discard;
  vec2 uv=vUv;if(!gl_FrontFacing)uv.x=1.-uv.x;
  vec2 tuv=(uv-.5)*cover+.5;
  vec2 ins=step(vec2(0.),tuv)*step(tuv,vec2(1.));
  vec3 vid=mix(fill,texture2D(map,tuv).rgb,ins.x*ins.y);
  vec3 c=mix(vec3(.075),vid,ready);
  float edge=smoothstep(-.012-px,-.012,d);
  gl_FragColor=vec4(mix(c,vec3(1.),edge*.1),a);
}`;

/** Average colour (0-1 RGB) of the four corners of the video's current frame, or null if it can't be read. */
function sampleBackground(v: HTMLVideoElement): [number, number, number] | null {
  try {
    const N = 32, cv = document.createElement("canvas");
    cv.width = cv.height = N;
    const ctx = cv.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;
    ctx.drawImage(v, 0, 0, N, N);
    const corners = [[0, 0], [N - 1, 0], [0, N - 1], [N - 1, N - 1]];
    const sum = [0, 0, 0];
    for (const [x, y] of corners) {
      const d = ctx.getImageData(x, y, 1, 1).data;
      sum[0] += d[0]; sum[1] += d[1]; sum[2] += d[2];
    }
    return [sum[0] / 1020, sum[1] / 1020, sum[2] / 1020];
  } catch {
    return null; // cross-origin video without CORS: keep the neutral fill
  }
}

/** Starts the ribbon inside `root`. Returns a cleanup function. Throws if WebGL is unavailable. */
export function initRibbon(THREE: typeof T, root: HTMLElement, opts: RibbonOptions = {}): () => void {
  const $ = <E extends HTMLElement = HTMLElement>(id: string) => root.querySelector<E>(`#vh-${id}`) as E;
  const canvas = $<HTMLCanvasElement>("gl");
  const stage = $("stage");
  const track = $("track");

  /* ---------- renderer ---------- */
  // Two canvases show the same scene: the back one sits under the review cards, the front one over them.
  // Each part of the ribbon is drawn on exactly one of them (see the "pass" uniform in the card shader).
  const canvasF = $<HTMLCanvasElement>("glf");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0, 0);
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  let rendererF: T.WebGLRenderer;
  try {
    rendererF = new THREE.WebGLRenderer({ canvas: canvasF, antialias: true, alpha: true });
  } catch (e) {
    renderer.dispose();
    throw e;
  }
  rendererF.setClearColor(0, 0);
  rendererF.outputColorSpace = THREE.LinearSRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);

  /* ---------- ribbon path ---------- */
  let PATH_L = 1;
  const pathP: T.Vector3[] = [], pathT: T.Vector3[] = [];
  function buildPath() {
    const pts: T.Vector3[] = [];
    for (let i = 0; i <= 160; i++) {
      const t = i / 160, ph = mix(PH0, PH1, t), cs = Math.cos(ph), u = 2 * t - 1;
      // a shallow arc close to the camera, then long runs far behind it
      const depth = cs > 0 ? 7.6 + 16.4 * cs ** 0.9 : 7.6 + 2.2 * cs;
      const edge = 0.84 + 0.5 * span(0.14 - t, 0, 0.14) + 0.8 * span(t, 0.84, 1);
      pts.push(new THREE.Vector3(edge * Math.sin(ph) * depth * 0.561, 0.5 * Math.sign(u) * Math.abs(u) ** 1.4 * depth * 0.63, -depth));
    }
    const path = new THREE.CatmullRomCurve3(pts, false, "centripetal");
    path.arcLengthDivisions = 1500;
    PATH_L = path.getLength();
    for (let i = 0; i <= SAMPLES; i++) {
      const u = i / SAMPLES;
      pathP.push(path.getPointAt(u));
      pathT.push(path.getTangentAt(u));
    }
  }
  const at = (s: number, op: T.Vector3, ot: T.Vector3) => {
    const f = clamp(s / PATH_L) * SAMPLES, i = Math.min(SAMPLES - 1, Math.floor(f)), k = f - i;
    op.lerpVectors(pathP[i], pathP[i + 1], k);
    ot.lerpVectors(pathT[i], pathT[i + 1], k).normalize();
  };

  /* ---------- cards ---------- */
  const videos = opts.videos?.length ? opts.videos : DEFAULT_VIDEOS;
  const contain = opts.fit === "contain";
  const cards: Card[] = videos.map(({ title, src }, i) => {
    const v = document.createElement("video");
    Object.assign(v, { crossOrigin: "anonymous", muted: true, loop: true, playsInline: true, preload: "auto", src });
    v.setAttribute("playsinline", "");
    const tex = new THREE.VideoTexture(v);
    tex.colorSpace = THREE.NoColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    const geo = new THREE.PlaneGeometry(1, 1, NX, NY);
    geo.setAttribute("aDir", new THREE.BufferAttribute(new Float32Array((NX + 1) * (NY + 1)), 1));
    const mat = new THREE.ShaderMaterial({
      vertexShader: VS, fragmentShader: FS, transparent: true, side: THREE.DoubleSide,
      uniforms: { map: { value: tex }, cover: { value: new THREE.Vector2(1, 1) }, fill: { value: new THREE.Vector3(0.075, 0.075, 0.075) }, aspect: { value: CARD_W / CARD_H }, ready: { value: 0 }, radius: { value: 0.018 }, pass: { value: 0 }, useDir: { value: 1 } },
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    scene.add(mesh);
    const c: Card = { i, title, v, tex, geo, mat, mesh, rect: null, front: false, back: true, vis: false };
    v.addEventListener("loadeddata", () => {
      const va = v.videoWidth / v.videoHeight, ca = CARD_W / CARD_H;
      if (contain) {
        // whole video visible: scale the longer side to the card, then fill the leftover bars
        mat.uniforms.cover.value.set(va > ca ? 1 : ca / va, va > ca ? va / ca : 1);
        const f = sampleBackground(v);
        if (f) mat.uniforms.fill.value.set(f[0], f[1], f[2]);
      } else {
        mat.uniforms.cover.value.set(va > ca ? ca / va : 1, va > ca ? 1 : va / ca);
      }
      mat.uniforms.ready.value = 1;
    });
    return c;
  });

  /* ---------- layout ---------- */
  let W = 1, H = 1, asp = 1, cols = 3, rows = 2, tanH = 0.3153, stickTop = 0;
  function resize() {
    W = stage.clientWidth || 1;
    H = stage.clientHeight || 1;
    asp = W / H;
    stickTop = parseFloat(getComputedStyle(stage).top) || 0;
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(W, H, false);
    rendererF.setPixelRatio(Math.min(devicePixelRatio, 2));
    rendererF.setSize(W, H, false);
    camera.aspect = asp;
    camera.fov = asp < 16 / 9 ? (Math.atan(0.561 / asp) * 360) / Math.PI : FOV;
    camera.updateProjectionMatrix();
    tanH = Math.tan((camera.fov * Math.PI) / 360);
    cols = asp < 0.9 ? 2 : 3;
    rows = asp < 0.9 ? 3 : 2;
  }
  function grid(i: number): GridRect {
    const vh = 2 * GZ * tanH, vw = vh * asp, gw = vw * (cols === 3 ? 0.74 : 0.88), gap = gw * 0.017;
    const cw = (gw - gap * (cols - 1)) / cols, ch = cw / (CARD_W / CARD_H), gh = ch * rows + gap * 1.6 * (rows - 1);
    const c = i % cols, r = Math.floor(i / cols);
    return { x: -gw / 2 + cw / 2 + c * (cw + gap), y: gh / 2 - ch / 2 - r * (ch + gap * 1.6), w: cw, h: ch, vw, vh, c, r };
  }

  /* ---------- scroll ---------- */
  let target = 0, p = 0;
  const readScroll = () => {
    // the stage sticks once the track's top reaches `stickTop`; progress runs over the rest of the track
    const total = track.offsetHeight - stage.clientHeight;
    target = total > 0 ? clamp((stickTop - track.getBoundingClientRect().top) / total) : 0;
  };

  /* ---------- pose ---------- */
  const op = new THREE.Vector3(), ot = new THREE.Vector3(), up = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0), vp = new THREE.Vector3();
  function poseRibbon(c: Card, head: number) {
    const pos = c.geo.attributes.position as T.BufferAttribute, dirA = c.geo.attributes.aDir as T.BufferAttribute, centre = head - c.i * STEP;
    let lo = Infinity, hi = -Infinity;
    for (let iy = 0; iy <= NY; iy++) for (let ix = 0; ix <= NX; ix++) {
      const k = iy * (NX + 1) + ix, lu = ix / NX - 0.5, lv = 0.5 - iy / NY;
      at(centre + lu * CARD_W, op, ot);
      // On-screen horizontal direction of the rail at this point (sign is what matters): > 0 heading left to right,
      // < 0 right to left. It is the derivative of the projected x (x / depth), so it follows what the eye sees.
      const dx = ot.x * -op.z + op.x * ot.z;
      dirA.setX(k, dx);
      if (dx < lo) lo = dx;
      if (dx > hi) hi = dx;
      // keep the sheet upright, leaning a little into the turn
      up.copy(Y).addScaledVector(ot, -Y.dot(ot)).normalize();
      vp.copy(op).addScaledVector(up, lv * CARD_H);
      pos.setXYZ(k, vp.x, vp.y, vp.z);
    }
    pos.needsUpdate = true;
    dirA.needsUpdate = true;
    c.front = lo < 0;
    c.back = hi >= 0;
    c.mat.uniforms.useDir.value = 1;
  }
  function poseGrid(c: Card, q: number) {
    const g = grid(c.i), pos = c.geo.attributes.position as T.BufferAttribute;
    const dx = (g.c - (cols - 1) / 2) * 1.2, dy = g.r < rows / 2 ? 1 : -1;
    const ox = dx * g.vw * 0.62 * (1 - q), oy = dy * g.vh * (g.c === 1 ? 0.95 : 0.34) * (1 - q), tilt = (1 - q) * 0.22 * (g.c - 1 || 0.5) * dy;
    const cs = Math.cos(tilt), sn = Math.sin(tilt);
    for (let iy = 0; iy <= NY; iy++) for (let ix = 0; ix <= NX; ix++) {
      const k = iy * (NX + 1) + ix, x = (ix / NX - 0.5) * g.w, y = (0.5 - iy / NY) * g.h;
      pos.setXYZ(k, g.x + ox + x * cs - y * sn, g.y + oy + x * sn + y * cs, -GZ - (1 - q) * 0.6 * Math.sin((ix / NX) * Math.PI));
    }
    pos.needsUpdate = true;
    c.rect = g;
    c.front = false; // the landed grid sits on the back canvas
    c.back = true;
    c.mat.uniforms.useDir.value = 0;
  }

  const l1 = $("l1"), l2 = $("l2"), cap = $("cap"), rule = $("rule"), hint = $("hint");
  const reviews = root.querySelector<HTMLElement>("#vh-reviews");
  const fades = ["pager", "cross", "glow"].map((id) => $(id));
  function render() {
    const pp = p;
    // headline runs right across the page in opposite directions
    const rise = 1 - out(span(pp, 0, 0.12));
    const run = mix(-50, 76, span(pp, 0, 0.58));
    l1.style.transform = `translate3d(${run}vw,${rise * 34}vh,0)`;
    l2.style.transform = `translate3d(${-run}vw,${rise * 34}vh,0)`;
    const capA = 1 - span(pp, 0.52, 0.57);
    cap.style.opacity = String(capA);
    if (reviews) reviews.style.opacity = String(capA); // client cards leave exactly when the caption does
    cap.style.transform = `translate(-50%,calc(-50% + ${rise * 34}vh))`;
    const intro = 1 - span(pp, 0, 0.05);
    hint.style.opacity = String(intro);
    hint.style.visibility = intro > 0 ? "visible" : "hidden"; // keep the faded link out of tab order and clicks
    for (const el of fades) el.style.opacity = String(intro);
    rule.style.transform = `scaleX(${ease(span(pp, 0.72, 0.86))})`;
    // ribbon, then the grid
    const pr = span(pp, RIB_A, RIB_B), head = mix(0, PATH_L + cards.length * STEP, pr);
    for (const c of cards) {
      const s = head - c.i * STEP, end = PATH_L - CARD_W;
      if (s < end) {
        c.mesh.visible = s > CARD_W;
        c.rect = null;
        if (c.mesh.visible) poseRibbon(c, head);
      } else if (c.i < cols * rows) {
        // each card flies to its slot the moment it leaves the rail
        const st = mix(RIB_A, RIB_B, (end + c.i * STEP) / (PATH_L + cards.length * STEP)), q = out(span(pp, st, st + 0.13));
        c.mesh.visible = q > 0.001;
        if (c.mesh.visible) poseGrid(c, q);
      } else {
        c.mesh.visible = false;
        c.rect = null;
      }
    }
    const b = drawPass(renderer, false);
    if (!b && drewBack) renderer.clear();
    drewBack = b;
    const f = drawPass(rendererF, true);
    if (!f && drewFront) rendererF.clear();
    drewFront = f;
  }
  let drewBack = false, drewFront = false;
  /** Draws the cards' back-layer or front-layer pixels on one canvas. Returns whether anything was drawn. */
  function drawPass(r: T.WebGLRenderer, front: boolean) {
    let any = false;
    for (const c of cards) {
      c.vis = c.mesh.visible;
      c.mat.uniforms.pass.value = front ? 1 : 0;
      c.mesh.visible = c.vis && (front ? c.front : c.back);
      any = any || c.mesh.visible;
    }
    if (any) r.render(scene, camera);
    for (const c of cards) c.mesh.visible = c.vis;
    return any;
  }

  /* ---------- hover ---------- */
  const nameEl = $("name");
  const onMove = (e: PointerEvent) => {
    let hit: Card | null = null;
    const r = stage.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
    if (p > 0.86) {
      const nx = mx / W - 0.5, ny = 0.5 - my / H;
      for (const c of cards) {
        const g = c.rect;
        if (!g) continue;
        const x = nx * g.vw, y = ny * g.vh;
        if (Math.abs(x - g.x) < g.w / 2 && Math.abs(y - g.y) < g.h / 2) hit = c;
      }
    }
    nameEl.style.opacity = hit ? "1" : "0";
    if (hit) {
      nameEl.textContent = hit.title;
      nameEl.style.transform = `translate(${mx + 14}px,${my + 16}px)`;
    }
  };
  stage.addEventListener("pointermove", onMove);

  /* ---------- header offset, size and visibility ---------- */
  const hdr = opts.offsetSelector ? document.querySelector<HTMLElement>(opts.offsetSelector) : null;
  const syncOffset = () => {
    if (hdr) root.style.setProperty("--vante-top", `${hdr.offsetHeight}px`);
  };
  syncOffset();
  const ro = new ResizeObserver(() => { syncOffset(); resize(); readScroll(); });
  ro.observe(stage);
  if (hdr) ro.observe(hdr);
  let inView = true;
  const io = new IntersectionObserver(([e]) => { inView = e.isIntersecting; });
  io.observe(root);

  resize();
  buildPath();
  readScroll();
  addEventListener("scroll", readScroll, { passive: true });

  /* ---------- loop ---------- */
  const k = opts.reducedMotion ? 1 : 0.09;
  let raf = 0;
  function loop() {
    raf = requestAnimationFrame(loop);
    if (!inView) {
      for (const c of cards) if (!c.v.paused) c.v.pause();
      return;
    }
    p += (target - p) * k;
    if (Math.abs(target - p) < 0.00005) p = target;
    for (const c of cards) {
      if (c.mesh.visible && c.v.paused) c.v.play().catch(() => {});
      else if (!c.mesh.visible && !c.v.paused) c.v.pause();
    }
    render();
  }
  loop();

  return () => {
    cancelAnimationFrame(raf);
    removeEventListener("scroll", readScroll);
    stage.removeEventListener("pointermove", onMove);
    ro.disconnect();
    io.disconnect();
    for (const c of cards) {
      c.v.pause();
      c.v.removeAttribute("src");
      c.v.load();
      c.tex.dispose();
      c.geo.dispose();
      c.mat.dispose();
    }
    renderer.dispose();
    rendererF.dispose();
  };
}
