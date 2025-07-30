import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { SparkleHeading } from "@/components/common/SparkleHeading";

export function AboutMeSection() {
  return (
    // About Me Outer Section
    <section id="about" className="bg-c-primary pt-2">
      {/* Inner Section*/}
      <section className="bg-background rounded-t-4xl">
        {/* Container Section */}
        <section className="section-px py-8 sm:py-10 md:py-12 lg:py-14">
          <div>
            {/* Section Heading */}
            <SparkleHeading firstText="about" secondText="me" />

            {/* Wrap Image and Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 pt-8 sm:pt-10 md:pt-12 lg:pt-14">
              <div className="flex justify-center items-center">
                <div className="relative size-70 md:size-100">
                  <Image
                    src="/assets/hero/praveen1.png"
                    alt="Hero background"
                    fill
                    className="object-contain z-6 drop-shadow-[0_0px_35px_rgba(0,163,224,0.3)] "
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6 items-center md:items-start">
                <p className="text-muted-foreground text-center md:text-justify md:text-lg">
                  I am Praveen R, and I have completed my B.Sc. in Computer
                  Science, which provided me with a solid foundation in
                  programming. Alongside my studies, I developed skills as a
                  Front-End Developer, UI Designer, and Graphic Designer,
                  blending creativity with technology to build visually
                  appealing, responsive, and user-friendly websites and
                  applications. I am passionate about learning new technologies
                  and continuously improving my craft to create impactful
                  digital experiences.
                </p>

                <button className="group flex gap-2 border border-c-primary bg-transparent  px-6 py-3 rounded-full font-semibold hover:bg-c-primary text-c-primary hover:text-white transition duration-200">
                  <Download />
                  Resume
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
