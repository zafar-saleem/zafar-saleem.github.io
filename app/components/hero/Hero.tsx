import React from "react";

import { Button } from "@/components/ui/button";
import { contents } from "./contents";

export const Hero = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-32">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">{contents.heading}</h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {contents.description}
          </p>
        </div>
        <Button asChild size="lg" className="mt-10">
          <a href={contents.button.url}>{contents.button.text}</a>
        </Button>
      </div>
    </section>
  )
}
