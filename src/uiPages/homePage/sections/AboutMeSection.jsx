import React from "react";
import Image from "next/image";
import { CoolMode } from "@/components/magicui/cool-mode";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export function AboutMeSection() {
  return (
    // About Me Section
    <section className="w-full section-px py-8 sm:py-10 md:py-12 lg:py-14 bg-gray-200/30 dark:bg-black/20">
      {/* Wrap Image and Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
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
          <h1 className="text-center md:text-start font-bold">
            <SparklesText
              colors={{ first: "#00A3E0", second: "#0061ff" }}
              sparklesCount={7}
              className="text-3xl md:text-6xl"
            >
              ABOUT <AuroraText>ME</AuroraText>
            </SparklesText>
          </h1>
          <p className="text-muted-foreground text-center md:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            iste beatae quidem repellendus ut, quaerat totam possimus voluptate!
            Possimus quibusdam voluptates quae incidunt labore maxime et dolore?
            Nihil, expedita in! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo iste beatae quidem repellendus ut,
            quaerat totam possimus voluptate! Possimus quibusdam voluptates quae
            incidunt labore maxime et dolore? Nihil, expedita in! Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>

          <CoolMode>
            <Link href="/">
              <button className="group flex gap-2 border border-c-primary bg-transparent  px-6 py-3 rounded-full font-semibold hover:bg-c-primary text-c-primary hover:text-white transition duration-200">
                <BriefcaseBusiness className="group-hover:animate-[shake_0.5s_infinite_ease-in-out]" />
                Hire me
              </button>
            </Link>
          </CoolMode>
        </div>
      </div>
    </section>
  );
}
