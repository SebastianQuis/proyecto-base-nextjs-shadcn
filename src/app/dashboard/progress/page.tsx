"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });

      return () => {
        clearInterval(interval);
      };
    }, 1000);
  }, []);

  return (
    <div>
      <Progress
        value={progress}
        indicatorColor={cn({
          "bg-indigo-300": progress < 30,
          "bg-indigo-500": progress >= 30 && progress < 70,
          "bg-indigo-700": progress >= 70,
        })}
      />
    </div>
  );
}
