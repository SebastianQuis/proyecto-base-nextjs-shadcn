"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export default function HomePage() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <div className="mt-4 mb-4">{value}</div>
      <button
        onClick={() => {
          console.log(value);
        }}
        className="outline-none"
      >
        Ingresar
      </button>
    </div>
  );
}
