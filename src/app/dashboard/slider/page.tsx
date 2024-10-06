"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function HomePage() {
  const [valueSlider, setValueSlider] = useState(10);
  const [rangevalueSlider, setRangeValueSlider] = useState([10, 50]);

  return (
    <div className="grid grid-cols-1 gap-3">
      <h1>Slider Value: {valueSlider}</h1>
      <Slider
        defaultValue={[valueSlider]}
        onValueChange={(value) => setValueSlider(value[0])}
        max={100}
        step={5}
      />

      <h1>
        Range Value Slider: {rangevalueSlider[0]} - {rangevalueSlider[1]}
      </h1>
      <Slider
        defaultValue={rangevalueSlider}
        onValueChange={setRangeValueSlider}
        max={100}
        step={10}
      />
    </div>
  );
}
