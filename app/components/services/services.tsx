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

export const Services = ({ id }: { id: string }) => {
  return (
    <div className="w-full mt-15" id={id}>
      <h2 className="text-3xl font-extrabold lg:text-5xl text-center mt-10">Services</h2>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {
          contents.map((item, index) => (
            <Card key={`${item.title}-${index}`}>
              <CardHeader>
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
                <a href={item.action.url}>{item.action.label}</a>
              </Button>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </div>
  )
}
