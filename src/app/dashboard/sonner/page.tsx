"use client";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";

export default function HomePage() {
  return (
    <div>
      <Button
        // variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            description: `Sunday, ${new Date().getFullYear()} `,
            className: "bg-gray-400",
            duration: 1000,
            // position: "bottom-left",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}
