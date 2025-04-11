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
import { contents } from "./contents";
import Autoplay from "embla-carousel-autoplay";
import { KPI_Card } from "./components/kpicard";

export const Portfolio = ({id}: { id: string }) => {
  return (
    <section id={id} className="m-auto mt-15 max-w-6xl">
      <h2 className="text-3xl font-extrabold lg:text-5xl text-center mt-10">Portfolio</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
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
                  <CardContent className="flex border-b-[1px] pb-5">
                    <Image src={item.src} width={250} height={0} alt={item.alt} className="w-full" priority blurDataURL="/blur.jpg" placeholder="blur" />
                  </CardContent>
                  <CardFooter className="flex lg:flex-row">
                    <KPI_Card item={item} link={item.link} />
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
