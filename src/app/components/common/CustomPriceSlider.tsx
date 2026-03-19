"use client";

import { useRef } from "react";

type Props = {
  maxPrice: number;
  selected: [number, number];
  onChange: (value: [number, number]) => void;
};

export default function CustomPriceSlider({
  maxPrice,
  selected,
  onChange,
}: Props) {
  const min = 0;
  const max = maxPrice;

  const [selectedMin, selectedMax] = selected;

  const trackRef = useRef<HTMLDivElement>(null);

  // 값 -> %
  const getPercent = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  // 마우스 위치 -> 값
  const getValueFromPosition = (clientX: number) => {
    if (!trackRef.current) return 0;

    const rect = trackRef.current.getBoundingClientRect();
    const percent = (clientX - rect.left) / rect.width;

    const rawValue = min + percent * (max - min);

    return Math.round(Math.max(min, Math.min(max, rawValue)));
  };

  // 드래그 처리
  const handleMouseDown = (type: "min" | "max") => {
    const handleMove = (e: MouseEvent) => {
      const value = getValueFromPosition(e.clientX);

      if (type === "min") {
        if (value <= selectedMax) {
          onChange([value, selectedMax]);
        }
      } else {
        if (value >= selectedMin) {
          onChange([selectedMin, value]);
        }
      }
    };

    const handleUp = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  };

  const minPercent = getPercent(selectedMin);
  const maxPercent = getPercent(selectedMax);

  return (
    <div>
      <div className="flex justify-between mt-4">
        <div
          ref={trackRef}
          className="h-1 w-full bg-border-muted rounded-full relative"
        >
          {/* 선택된 영역 */}
          <div
            className="absolute h-full bg-primary rounded-full"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />

          {/* min 핸들 */}
          <div
            onMouseDown={() => handleMouseDown("min")}
            className="absolute top-full -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-100 rounded-full border-2 border-primary cursor-pointer shadow-lg"
            style={{
              left: `${minPercent}%`,
            }}
          />

          {/* max 핸들 */}
          <div
            onMouseDown={() => handleMouseDown("max")}
            className="absolute top-full -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-100 rounded-full border-2 border-primary cursor-pointer shadow-lg"
            style={{
              left: `${maxPercent}%`,
            }}
          />
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <span className="text-xs text-slate-400">
          ${selectedMin}
        </span>
        <span className="text-xs text-slate-400">
          ${selectedMax}
        </span>
      </div>
    </div>
  );
}