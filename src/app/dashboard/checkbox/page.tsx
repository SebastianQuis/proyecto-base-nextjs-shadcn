"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id="terms1"
        checked={isChecked}
        onCheckedChange={(value: boolean) => {
          setIsChecked(value);
        }}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p
          className={`text-sm text-muted-foreground${
            !isChecked ? " text-red-500" : ""
          }`}
        >
          You agree to our Terms of Service and Privacy Policy.
        </p>

        {isChecked ? (
          <Badge>Great!!</Badge>
        ) : (
          <Badge variant={"destructive"}>destructive!!</Badge>
        )}
      </div>
    </div>
  );
}
