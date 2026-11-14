/**
 * Server-only loader: reads each article's Markdown at build time and turns it into typed blocks.
 * Supported Markdown: # title, ## sections, ### subsections, paragraphs, "- " and "1. " lists, **bold** and [links](url).
 */
import fs from "node:fs";
import path from "node:path";
import { getResourceMeta, RESOURCES, type Resource } from "./resources";

export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };
export type Section = { id: string; title: string; blocks: Block[] };
export type Article = Resource & { heading: string; intro: Block[]; sections: Section[]; words: number; minutes: number };

const DIR = path.join(process.cwd(), "src", "content", "resources");
const idOf = (t: string) => t.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const plain = (s: string) => s.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export function parseMarkdown(src: string) {
  let heading = "";
  const intro: Block[] = [];
  const sections: Section[] = [];
  let target: Block[] = intro;
  let para: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;
  const used = new Set<string>();

  const flush = () => {
    if (para.length) target.push({ type: "p", text: para.join(" ") });
    if (list) target.push(list);
    para = [];
    list = null;
  };

  for (const raw of src.replace(/\r/g, "").split("\n")) {
    const line = raw.trimEnd();
    if (!line.trim()) { flush(); continue; }
    if (line.startsWith("# ")) { heading = line.slice(2).trim(); continue; }
    if (line.startsWith("## ")) {
      flush();
      const title = line.slice(3).trim();
      let id = idOf(title), n = 2;
      while (used.has(id)) id = `${idOf(title)}-${n++}`;
      used.add(id);
      const section: Section = { id, title, blocks: [] };
      sections.push(section);
      target = section.blocks;
      continue;
    }
    if (line.startsWith("### ")) { flush(); target.push({ type: "h3", text: line.slice(4).trim() }); continue; }
    const ul = line.match(/^[-*] +(.*)/), ol = line.match(/^\d+\. +(.*)/);
    if (ul || ol) {
      if (para.length) { target.push({ type: "p", text: para.join(" ") }); para = []; }
      const type = ul ? "ul" : "ol";
      if (!list || list.type !== type) { if (list) target.push(list); list = { type, items: [] }; }
      list.items.push((ul ?? ol)![1]);
      continue;
    }
    if (list) { target.push(list); list = null; }
    para.push(line.trim());
  }
  flush();
  return { heading, intro, sections };
}

const blockText = (b: Block) => (b.type === "p" || b.type === "h3" ? plain(b.text) : b.items.map(plain).join(" "));

export function loadArticle(slug: string): Article | undefined {
  const meta = getResourceMeta(slug);
  if (!meta) return undefined;
  // "#contact" placeholders in the source text point at the real contact section on the homepage
  const md = fs.readFileSync(path.join(DIR, `${slug}.md`), "utf8").replaceAll("(#contact)", "(/#contact)");
  const { heading, intro, sections } = parseMarkdown(md);
  const text = [heading, ...intro.map(blockText), ...sections.flatMap((s) => [s.title, ...s.blocks.map(blockText)])].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return { ...meta, heading, intro, sections, words, minutes: Math.max(1, Math.round(words / 200)) };
}

export const loadAllArticles = () => RESOURCES.map((r) => loadArticle(r.slug)!);
