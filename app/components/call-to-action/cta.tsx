import { Button } from "@/components/ui/button";
import { contents } from "./contents";

const Cta = () => {
  return (
    <section className="pt-32 w-full">
      <div className="container">
        <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {contents.heading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {contents.description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            {contents.buttons.secondary && (
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <a href={contents.buttons.secondary.url}>{contents.buttons.secondary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta };
