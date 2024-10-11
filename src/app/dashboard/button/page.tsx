"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex gap-x-4">
      <Button variant={"default"}>default</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button disabled>disabled</Button>

      <Button>success</Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          console.log("hola mundo");
        }}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <Button>
        <Mail className="mr-2 h-4 w-4" /> Iniciar sesión
      </Button>

      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
