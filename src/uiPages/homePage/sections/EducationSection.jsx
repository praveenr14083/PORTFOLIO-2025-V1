import React from "react";
import { EducationCard } from "../components/EducationCard";
import { MY_QUALIFICATIONS } from "../data/myQualifications";
import { SparkleHeading } from "@/components/common/SparkleHeading";

export function EducationSection() {
  return (
    <section className="w-full section-px py-8 sm:py-10 md:py-12 lg:py-14 bg-background">
      <div className="w-full flex flex-col justify-center">
        {/* Section Heading */}
        <SparkleHeading firstText="my" secondText="education" />

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
