import {
  Card,
  CardContent,
  CardDescription,
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
            </Card>
          ))
        }
      </div>
    </div>
  )
}
