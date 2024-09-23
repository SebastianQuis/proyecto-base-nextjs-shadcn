import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function HomePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {

        "123456789".split("").map( value => (
          <Card key={value}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant={"ghost"}>Cancel</Button>
              <Button >Comprar</Button>
            </CardFooter>
          </Card>
        ))
      } 
      

      <Card className="col-span-1 sm:col-span-3">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Name of your project" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p>Col span 3</p>
        </CardFooter>
      </Card>
    </div>
  );
}