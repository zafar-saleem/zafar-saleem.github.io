import { Button } from "@/components/ui/button";
import { contents } from "./contents";
import Image from "next/image";
import { Ratings } from "./components/ratings";

const Hero = ({ id }: { id: string }) => {
  return (
    <section className="mb-32" id={id}>
      <div className="container">
        <div className={`grid items-center gap-8 lg:grid-cols-1`}>
          <div className="mx-auto text-center flex max-w-screen-lg flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl mb-5 text-center">{contents.heading}</h1>
            {
              contents.descs.map((content, index) => (
                <p key={index} className="text-balance text-muted-foreground lg:text-lg">{content}</p>
              ))
            }
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button asChild size="lg" className="mt-10 bg-slate-700 hover:bg-slate-500 shadow-lg">
              <a href={contents.button.url}>{contents.button.text}</a>
            </Button>
            </div>
          </div>
          <Ratings />
          <Image
            src={contents.image.src}
            alt={contents.image.alt}
            className="w-full rounded-md object-contain"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
