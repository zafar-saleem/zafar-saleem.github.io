"use client";

import { useLayoutEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const textElements = section.querySelectorAll(
      ".reveal-paragraph"
    );

    let animationFrame = 0;

    const splitLines = () => {
      const allLines: HTMLElement[] = [];

      textElements.forEach((paragraph) => {
        const element = paragraph as HTMLElement;

        const originalText =
          element.dataset.originalText ||
          element.textContent?.replace(/\s+/g, " ").trim() ||
          "";

        element.dataset.originalText = originalText;

        // Temporarily create inline word elements.
        element.replaceChildren();

        const words = originalText.split(" ");

        const wordElements = words.map((word, index) => {
          const span = document.createElement("span");

          span.className = "reveal-word";
          span.textContent =
            word + (index < words.length - 1 ? " " : "");

          element.appendChild(span);

          return span;
        });

        // Group words according to their actual rendered line.
        const lines: {
          top: number;
          words: string[];
        }[] = [];

        wordElements.forEach((word) => {
          const top = word.getBoundingClientRect().top;

          let currentLine = lines[lines.length - 1];

          if (!currentLine || Math.abs(currentLine.top - top) > 1) {
            currentLine = {
              top,
              words: [],
            };

            lines.push(currentLine);
          }

          currentLine.words.push(word.textContent || "");
        });

        // Create one animation element per rendered line.
        element.replaceChildren();

        lines.forEach((line) => {
          // Outer wrapper: centres the line horizontally
          const wrapper = document.createElement("span");

          wrapper.className = "reveal-line-wrapper";

          // Inner element: handles the text animation
          const span = document.createElement("span");

          span.className = "reveal-line";
          span.textContent = line.words.join("").trim();
          span.setAttribute("aria-hidden", "true");

          wrapper.appendChild(span);
          element.appendChild(wrapper);

          allLines.push(span);
        });

        // Preserve accessible paragraph text.
        element.setAttribute("aria-label", originalText);
      });

      // Stagger every rendered line across the sticky scroll interval.
      const totalLines = allLines.length;
      const rangeStart = 33.333;
      const rangeEnd = 66.667;
      const rangeDuration = rangeEnd - rangeStart;

      allLines.forEach((line, index) => {
        const start =
          rangeStart + (index / totalLines) * rangeDuration;

        const end =
          rangeStart + ((index + 1) / totalLines) * rangeDuration;

        line.style.setProperty(
          "--range-start",
          `${start}%`
        );

        line.style.setProperty(
          "--range-end",
          `${end}%`
        );
      });
    };

    const scheduleSplit = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(splitLines);
    };

    scheduleSplit();

    // Recalculate lines when the available text width changes.
    const observer = new ResizeObserver(scheduleSplit);

    observer.observe(section);

    document.fonts.ready.then(scheduleSplit);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-section text-center"
    >
      <div className="scroll-sticky">
        <div className="scroll-text flex flex-col gap-2 text-center">

          <p className="w-fit rounded-full bg-sky px-3 py-1 text-xs font-semibold text-brand mx-auto">
            About
          </p>

          <h2 className="reveal-paragraph mt-3 text-3xl font-extrabold sm:text-4xl w-full md:w-[30vw] mx-auto">
            Meet Your Landing Page & Website Development Partner
          </h2>

          <p className="reveal-paragraph mt-4 text-muted">
            I am Zafar, an independent landing page developer based in Lisbon, Portugal. I work with SMEs, local service providers, local businesses, startup founders, SaaS businesses and growing companies to create professional landing pages & websites that communicate their value and encourage visitors to take action.
          </p>

          <p className="reveal-paragraph mt-4 text-muted">
            Whether you have a finished Figma design, an early product idea or an existing landing page that needs improvement, I can help turn it into a fast, responsive and search-friendly experience.
          </p>

          <p className="reveal-paragraph mt-4 text-muted">
            I handle the technical development, responsive implementation and launch, so you can focus on running your business.
          </p>

        </div>
      </div>
    </section>
  );
}
