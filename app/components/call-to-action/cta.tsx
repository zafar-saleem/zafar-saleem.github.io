import { contents } from "./contents";
import React from "react";
import { CTAButton } from "../shared/btn-cta";
import { Testimonial } from "../testimonials";

const Cta = () => {
  return (
    <section className="pt-32 w-full">
      <div className="container">
        <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
          <Testimonial id="testimonials" />
          <h3 className="max-w-3xl text-2xl font-semibold md:text-4xl">
            {contents.heading}
          </h3>
          <p className="mb-3 mt-0 md:mb-4 lg:mb-6">{contents.description}</p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            {contents.buttons.secondary && (
              <CTAButton url={contents.buttons.secondary.url} text={contents.buttons.secondary.text} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta };
