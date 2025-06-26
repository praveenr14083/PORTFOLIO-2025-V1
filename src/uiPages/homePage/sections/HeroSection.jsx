"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import Link from "next/link";
import { SocialMedia } from "../components/SocialMedia";
import { BriefcaseBusiness } from "lucide-react";
import "./styles/HeroSection.css";

export function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 z-0">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          strokeDasharray={"5 2"}
          className={cn(
            "h-full w-full",
            "[mask-image:radial-gradient(200px_circle_at_center,black,transparent)] md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      {/* Main content section */}
      <section className="relative z-8 section-px pb-20 py-8 sm:py-10 md:py-12 lg:py-14 w-full md:h-[calc(100dvh-66px)] ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-10">
          {/* Text content */}
          <div className="w-full flex flex-col justify-center gap-3 md:gap-6 order-2 md:order-1">
            <h1 className="text-xl md:text-2xl text-center md:text-start">
              Hi, I am
            </h1>

            <h1 className="text-3xl md:text-5xl text-center md:text-start  font-bold">
              <Typewriter
                options={{
                  strings: [
                    "<span style='color:#00A3E0'>Praveen</span>",
                    "a <span style='color:#00A3E0'>Frontend Developer</span>",
                    "a <span style='color:#00A3E0'>UI Developer</span>",
                    "a <span style='color:#00A3E0'>Designer</span>",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className="text-center md:text-justify text-muted-foreground">
              I am a passionate Front-End Developer, UI designer, and graphic
              designer with a keen eye for detail and a love for creating
              visually appealing, user-friendly digital experiences. From
              designing intuitive interfaces to crafting clean, responsive web
              applications, I blend creativity with technical skills to bring
              ideas to life.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <Link href="/">
                <button className="group flex gap-2 border border-c-primary bg-background  px-6 py-3 rounded-full font-semibold hover:bg-c-primary text-c-primary hover:text-white transition duration-200">
                  <BriefcaseBusiness className="group-hover:animate-[shake_0.5s_infinite_ease-in-out]" />
                  Hire me
                </button>
              </Link>

              <SocialMedia />
            </div>
          </div>

          {/* Image content */}
          <div className="w-full text-white flex md:justify-end justify-center items-center order-1 md:order-2">
            <div className="relative size-70 md:size-100">
              <Image
                src="/assets/hero/praveen1.png"
                alt="Hero background"
                fill
                className="object-contain z-6 drop-shadow-[0_0px_35px_rgba(0,163,224,0.3)] "
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full absolute -bottom-2 left-0 overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="-scale-y-100 w-full h-[60px]"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="fill-c-primary "
          />
        </svg>
      </div>
    </section>
  );
}
