import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { contents } from "./contents"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

export function Testimonial({ id }: { id: string }) {
  return (
    <>
      <h2 className="text-3xl font-extrabold lg:text-5xl text-center mt-20 w-full">Testimonials</h2>    
      <section className="mt-10 w-full" id={id}>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="vertical"
          className="w-full"
        >
          <CarouselContent className="-mt-1 h-[290px]">
            {contents.map((item, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="p-1 text-center">
                        <p className="px-8 font-medium lg:text-3xl">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        <div className="flex items-center justify-center gap-2 md:gap-1">
                          <Avatar className="size-12 md:size-16">
                            <AvatarImage src={item.author.avatar.src} alt={item.author.avatar.alt} />
                            <AvatarFallback>{item.author.name}</AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
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
    </>
  )
}
