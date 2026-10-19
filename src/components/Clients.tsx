import { clients } from "@/lib/content";
import Image from "next/image";

export function Clients() {
  return (
    <section
      aria-labelledby="clients-title"
      className="sd-exit border border-line border-sky bg-white"
    >
      <div className="container-page flex flex-col items-center gap-4 py-4 md:flex-row md:justify-center md:gap-10">
        <h2 id="clients-title" className="text-xs font-normal text-muted">
          Frontend work for
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {clients.map((c) => (
            <li
              key={c}
              className="font-display text-lg font-bold tracking-tight text-[#5b6178]"
            >
              <Image
                src={c}
                alt=""
                width={100}
                height={100}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
