import React from "react";

import { Button } from "@/components/ui/button";
import { contents } from "./contents";

export const Hero = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-32 w-full">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl mb-5">{contents.heading}</h1>
            {
              contents.descs.map((content, index) => (
                <p key={index} className="text-balance text-muted-foreground lg:text-lg">{content}</p>
              ))
            }
        </div>
        <Button asChild size="lg" className="mt-10 bg-[#c97471] hover:bg-yellow-700/75 shadow-lg">
          <a href={contents.button.url}>{contents.button.text}</a>
        </Button>
      </div>
    </section>
  )
}
