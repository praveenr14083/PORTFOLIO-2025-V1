import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";

export function SparkleHeading({ firstText, secondText, gap = "mr-4" }) {
  return (
    <div>
      <h1 className="text-center font-bold">
        <SparklesText
          colors={{ first: "#FDA817", second: "#FFFF08" }}
          sparklesCount={7}
          className="text-3xl md:text-6xl"
        >
          <span className={gap}>{firstText.toUpperCase()}</span>
          <AuroraText>
            <span>{secondText.toUpperCase()}</span>
          </AuroraText>
        </SparklesText>
      </h1>
    </div>
  );
}
