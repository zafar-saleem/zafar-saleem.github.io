import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { contents } from "./contents";

const Testimonial = () => {
  return (
    <section className="mt-20 w-full">
      <h2 className="text-3xl font-extrabold lg:text-5xl text-center">Testimonials</h2>
      <div className="container mt-10 m-auto">
        <div className="flex flex-col items-center text-center">
          {
            contents.map((item, index) => (
              <div key={`${item.author}-${index}`}>
                <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl mt-10">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-2 md:gap-4">
                  <Avatar className="size-12 md:size-16">
                    <AvatarImage src={item.author.avatar.src} alt={item.author.avatar.alt} />
                    <AvatarFallback>{item.author.name}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium md:text-base">{item.author.name}</p>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {item.author.role}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export { Testimonial };
