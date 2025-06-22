import React from "react";
import Marquee from "react-fast-marquee";
import { SKILLS } from "@/utils/constants/skills";
import { Asterisk } from "lucide-react";

export function MarqueeText() {
  return (
    <div className="w-full">
      <div className="h-15 bg-black text-white dark:bg-white dark:text-black flex items-center">
        <Marquee className="w-full">
          {SKILLS.frontEndSkills.map((skill) => (
            <h1
              key={skill.id}
              className="font-semibold text-lg md:text-2xl flex items-center gap-8 ml-8 md:gap-15 md:ml-15"
            >
              {skill.name}
              <span className="text-c-primary text-2xl font-bold">
                <Asterisk />
              </span>
            </h1>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
