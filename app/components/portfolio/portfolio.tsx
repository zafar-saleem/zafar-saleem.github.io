import * as React from "react";
import kritzer from "./assets/kritzer.png";
import slimming from "./assets/slimming.png";
import tayara from "./assets/tayara.png";
import westwing from "./assets/westwing.png";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const contents = [
  {
    title: "kritzer Portfolio",
    src: kritzer,
    link: "https://www.la-kritzer.ch/",
    alt: "Kritzer Portfolio Case Study",
  },
  {
    title: "Slimming World Fitness",
    src: slimming,
    link: "https://slimmingworld.co.uk",
    alt: "Slimming World Health Case Study",
  },
  {
    title: "Tayara marketplace",
    src: tayara,
    link: "https://tayara.tn",
    alt: "Marketplace Case Study",
  },
  {
    title: "Westwing e-commerce",
    src: westwing,
    link: "https://westwing.de",
    alt: "E-Commerce Case Study",
  }
];

export const Portfolio = ({id}: { id: string }) => {
  return (
    <section id={id} className="m-auto mt-15">
      <h2 className="text-3xl font-extrabold lg:text-5xl text-center mt-10">Case Studies</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-10"
      >
        <CarouselContent>
          {contents.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    {/* <span className="text-3xl font-semibold">item</span> */}
                    <Link href={item.link}>
                      <Image src={item.src} width={250} height={138} alt={item.alt} />
                    </Link>
                  </CardContent>
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
