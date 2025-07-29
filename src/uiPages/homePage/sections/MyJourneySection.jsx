import React from "react";
import { EdExCard } from "../components/EdExCard";
import { EDUCATION, EXPERIENCE } from "../data/educationExperience";
import { SparkleHeading } from "@/components/common/SparkleHeading";

export function MyJourneySection() {
  return (
    // Main Section
    <section id="my-education" className="bg-background">
      {/* Container Section */}
      <section className="section-px py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="w-full flex flex-col justify-center">
          {/* Section Heading */}
          <SparkleHeading firstText="my" secondText="journey" />

          {/* Wrap Education cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 sm:pt-10 md:pt-12 lg:pt-14">
            {/* Education Section */}
            <div className="space-y-5">
              <h1 className="text-center text-xl font-bold">Education</h1>
              <p className="text-center text-muted-foreground">
                Here are the tools I use to streamline my development workflow.
              </p>

              <div>
                {EDUCATION.map((qualification) => (
                  <EdExCard key={qualification.id} data={qualification} />
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-5">
              <h1 className="text-center text-xl font-bold">Experience</h1>
              <p className="text-center text-muted-foreground">
                Here are the tools I use to streamline my development workflow.
              </p>

              <div>
                {EXPERIENCE.map((experience) => (
                  <EdExCard key={experience.id} data={experience} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
