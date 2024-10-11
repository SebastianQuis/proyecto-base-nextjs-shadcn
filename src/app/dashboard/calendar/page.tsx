"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDate, setmultipleDate] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-2">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Calendar
        mode="multiple"
        selected={multipleDate}
        onSelect={setmultipleDate}
        className="rounded-md border"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />

      <div>
        <h1 className="mt-2 text-xl font-bold">Información calendario</h1>
        <p>{smallDate}</p>
        <h1 className="mt-4 text-xl font-bold">Multiples fechas</h1>
        <p>
          {multipleDate?.map((date) => {
            return `${date.toLocaleDateString()} - `;
          })}
        </p>
      </div>
    </div>
  );
}
