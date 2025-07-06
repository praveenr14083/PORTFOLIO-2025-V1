import { SparkleHeading } from "@/components/common/SparkleHeading";
import React from "react";
import Image from "next/image";

const certificates = [
  {
    src: "/assets/certificates/scape-2k24-bug-hunt.jpeg",
    alt: "Scape 2K24 Bug Hunt",
    large: true,
  },
  {
    src: "/assets/certificates/debugging-2024.jpeg",
    alt: "Debugging 2024",
    large: false,
  },
  {
    src: "/assets/certificates/web-design-dec-2024.jpeg",
    alt: "Web Design Dec 2024",
    large: false,
  },
  {
    src: "/assets/certificates/web-design-april-2024.jpeg",
    alt: "Web Design April 2024",
    large: true,
  },
];

export function MyAchievements() {
  return (
    // Main Section
    <section id="my-acheivements" className="bg-background">
      {/* Container Section */}
      <section className="section-px py-8 sm:py-10 md:py-12 lg:py-14">
        <div>
          {/* Section Heading */}
          <SparkleHeading firstText="my" secondText="acheivements" />

          {/* Grid Layout - Wrap Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 md:gap-8 pt-8 sm:pt-10 md:pt-12 lg:pt-14">
            {certificates.map((cert, index) => (
              <Image
                key={index}
                src={cert.src}
                alt={cert.alt}
                width={0} // prevent fixed width
                height={0} // prevent fixed height
                sizes="(max-width: 768px) 100vw, 500px"
                className={`object-contain rounded-xl z-6 hover:scale-102 transition-transform duration-300
                      w-full md:w-[${cert.large ? "500px" : "330px"}]`}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
