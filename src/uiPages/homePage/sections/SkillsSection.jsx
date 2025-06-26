import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { SkillProgress } from "../components/SkillProgress";
import { SKILLS } from "@/utils/constants/skills";

export function SkillsSection() {
  return (
    // Main Section
    <section className="w-full section-px py-8 sm:py-10 md:py-12 lg:py-14 bg-background">
      <div className="w-full flex flex-col justify-center">
        {/* Section Heading */}
        <div>
          <h1 className="text-center font-bold">
            <SparklesText
              colors={{ first: "#00A3E0", second: "#0061ff" }}
              sparklesCount={7}
              className="text-3xl md:text-6xl"
            >
              MY <AuroraText>SKILLS</AuroraText>
            </SparklesText>
          </h1>
        </div>

        {/* Wrap Frontend and Tools Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8 sm:py-10 md:py-12 lg:py-14">
          {/* Frontend Skills */}
          <div className="space-y-5">
            <h1 className="text-center text-xl font-bold">Frontend Skills</h1>
            <p className="text-center text-muted-foreground">
              These are the technologies I use to build web applications.
            </p>

            <div className="space-y-8">
              {SKILLS.frontEndSkills.map((skill) => (
                <SkillProgress key={skill.id} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-5">
            <h1 className="text-center text-xl font-bold">Tools</h1>
            <p className="text-center text-muted-foreground">
              Here are the tools I use to streamline my development workflow.
            </p>

            <div className="space-y-8">
              {SKILLS.tools.map((skill) => (
                <SkillProgress key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
