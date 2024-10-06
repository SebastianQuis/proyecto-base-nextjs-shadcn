import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const data = "123456789".split("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex-row">
            <Skeleton className="rounded-full w-10 h-10" />

            <div className="flex-col flex-grow ml-3">
              <Skeleton className="h-3 w-1/2 mb-2" />
              <Skeleton className="h-3 w-full" />
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
            <Skeleton className="w-20 h-4" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
