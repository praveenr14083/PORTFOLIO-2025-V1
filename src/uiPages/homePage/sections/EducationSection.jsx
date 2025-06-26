import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { EducationCard } from "../components/EducationCard";
import { MY_QUALIFICATIONS } from "../data/myQualifications";

export function EducationSection() {
  return (
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
              MY <AuroraText>EDUCATION</AuroraText>
            </SparklesText>
          </h1>
        </div>

        {/* Wrap Education cards */}
        <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-14">
          {MY_QUALIFICATIONS.map((qualification) => (
            <EducationCard key={qualification.id} data={qualification} />
          ))}
        </div>
      </div>
    </section>
  );
}
