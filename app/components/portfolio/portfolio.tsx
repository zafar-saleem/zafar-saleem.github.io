"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { contents } from "./contents";


export const Portfolio = ({id}: { id: string }) => {
  return (
    <section id={id} className="m-auto mt-15 max-w-6xl">
      <h2 className="text-3xl font-extrabold lg:text-5xl text-center mt-10">Portfolio</h2>
      {contents.map((item, index) => (
        <div className="" key={index}>
          <Card className={`mb-5 mt-5 ${item.color}`}>
            <CardContent className="flex">
              <Image src={item.src} width={250} height={0} alt={item.alt} className="w-full" priority blurDataURL="/blur.jpg" placeholder="blur" />
            </CardContent>
          </Card>
        </div>
      ))}
    </section>
  )
}
