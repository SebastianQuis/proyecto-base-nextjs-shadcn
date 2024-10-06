import { Button } from "@/components/ui/button";

import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const data = Array.from({ length: 50 }).map((_, i, a) => `v1.${a.length - i}`);

export default function HomePage() {
  return (
    <div>
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {data.map((item) => (
            <>
              <div key={item} className="text-sm">
                {item}
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
