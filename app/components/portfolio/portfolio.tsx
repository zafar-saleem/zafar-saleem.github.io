"use client";

import * as React from "react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { contents } from "./contents";
import Autoplay from "embla-carousel-autoplay";

export const Portfolio = ({id}: { id: string }) => {
  return (
    <section id={id} className="m-auto mt-15 max-w-6xl">
      <h2 className="text-3xl font-extrabold lg:text-5xl text-center mt-10">Case Studies</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}  
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mt-10 case-studies"
      >
        <CarouselContent>
          {contents.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
              <div className="">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex">
                    <Link href={item.link}>
                      <Image src={item.src} width={250} height={0} alt={item.alt} className="w-full" />
                    </Link>
                  </CardContent>
                  <CardFooter className="flex justify-between lg:flex-row flex-col gap-6">
                    {
                      item .kpi.map((kpi, i) => (
                        <article className="text-center py-5 px-5 w-full border rounded-[5] bg-slate-100 text-3xl">
                          <h2 className="font-semibold">{kpi.title}</h2>
                          <p className="font-extrabold uppercase">{kpi?.metric}</p>
                        </article>
                      ))
                    }
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
