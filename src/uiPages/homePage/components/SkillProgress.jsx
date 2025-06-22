import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export function SkillProgress({ skill }) {
  return (
    <div className="w-full flex gap-3 items-center">
      <Image
        src={skill.image}
        alt={skill.name}
        width={40}
        height={40}
        className="rounded"
      />
      <div className="w-full flex flex-col gap-2">
        <p className="font-medium">{skill.name}</p>
        <Progress value={skill.level} />
      </div>
    </div>
  );
}
