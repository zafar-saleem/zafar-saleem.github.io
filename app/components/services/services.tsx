import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contents } from "./contents";
import Image from "next/image";

export const Services = ({ id }: { id: string }) => {
  return (
    <div className="w-full mt-15 text-center" id={id}>
      <h2 className="text-3xl font-extrabold lg:text-5xl text-center mt-10">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {
          contents.map((item, index) => (
            <Card key={`${item.title}-${index}`}>
              <CardHeader>
                <Image src={item.icon} width={75} height={75} alt="icon" className="m-auto mb-5" />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                {
                  item.contents.map((content, index) => (
                    <p key={`${content}-${index}`}>{content}</p>
                  ))
                }
              </CardContent>
              <CardFooter>
              <Button asChild size="lg" className={`w-full ${item.action.classes}`} variant="ghost">
                <a href={item.action.url} className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium text-white-600 text-white">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-0 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-white-600 transition duration-300 group-hover:text-white ease">{item.action.label}</span>
                </a>
              </Button>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

    