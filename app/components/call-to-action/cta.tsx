"use client";

import { Button } from "@/components/ui/button";
import { contents } from "./contents";
import React from "react";

const Cta = () => {
  const ctaRef = React.useRef(null);
  const [boxPerspective, setBoxPerspective] = React.useState({
    rotateX: 0,
    rotateY: 0,
  });

  React.useLayoutEffect(() => {
    window.addEventListener("mousemove", (event) => {
      // @ts-expect-error: it does exist here.
      const box = ctaRef?.current?.getBoundingClientRect();

      const constraint = 30;
      const rotateX = (event.clientX - box.x - box.width / 2) / constraint;
      const rotateY = (event.clientY - box.y - box.height / 2) / constraint;
      
      setBoxPerspective({ rotateX, rotateY });
    })
  }, []);
  
  return (
    <section className="pt-32 w-full">
      <div className="container">
        <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="max-w-3xl text-2xl font-semibold md:text-4xl">
            {contents.heading}
          </h3>
          <p className="mb-3 mt-0 md:mb-4 lg:mb-6">{contents.description}</p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            {contents.buttons.secondary && (
              <Button
                asChild
                size="lg"
                className={`bg-slate-700 hover:bg-slate-700 shadow-lg btn_cta`}
                ref={ctaRef}
                style={{
                  // @ts-expect-error: It is a known prop
                  "--rotateX": `${boxPerspective.rotateX}deg`,
                  "--rotateY": `${boxPerspective.rotateY}deg`,
                }}
              >
                <div>
                  <a href={contents.buttons.secondary.url}>
                    <span className="btn_cta_me"></span>  
                    <span className="btn_cta_label">{contents.buttons.secondary.text}</span>
                    <span className="btn_add">+</span>
                    <span className="btn_cta_client">You</span>  
                  </a>
                </div>
              </Button>
              // <Button variant="outline" className="w-full sm:w-auto" asChild>
              //   <a href={contents.buttons.secondary.url}>{contents.buttons.secondary.text}</a>
              // </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta };
