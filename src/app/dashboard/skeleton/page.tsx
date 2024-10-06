import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "123456789".split(""); // [1,2,3,4,5,6,7,8,9]
};

export default async function HomePage() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex flex-row">
            <Image
              alt="shadcn"
              src="https://github.com/shadcn.png"
              width={40}
              height={40}
              className="rounded-full w-12 h-12"
            />

            <div className="ml-3">
              <CardTitle>Card title</CardTitle>
              <CardDescription>Card description</CardDescription>
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
            <Button>Ver más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
