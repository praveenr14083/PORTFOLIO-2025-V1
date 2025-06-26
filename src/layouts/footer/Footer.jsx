import { SocialMedia } from "@/uiPages/homePage/components/SocialMedia";
import React from "react";
import { NAV_ITEMS } from "@/utils/constants/navItems";
import Link from "next/link";
import { SKILLS } from "@/utils/constants/skills";
import Marquee from "react-fast-marquee";

export function Footer() {
  return (
    // Main Secction
    <section
      id="footer"
      className="w-full bg-background py-8 sm:py-10 md:py-12 lg:py-14 space-y-8"
    >
      <div className="section-px ">
        <div className="flex flex-col items-center gap-6">
          {/* Heading and Description */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-c-primary text-center">
              PRAVEEN.DEV
            </h1>
            <p className="text-center text-muted-foreground">
              Designing with Purpose. Developing with Precision.
            </p>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col md:hidden gap-4 md:gap-8 text-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="hover:text-c-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Media Icon */}
          <SocialMedia />
        </div>
      </div>

      {/* Footer Marquee */}
      <div className="relative bored border-dashed border-t-1 border-b-1 border-gray-400/20 py-4 italic">
        <Marquee className="w-full h-[5rem]">
          {SKILLS.frontEndSkills.map((skill) => (
            <h1
              key={skill.id}
              className="font-semibold text-4xl md:text-7xl flex items-center pl-10 md:pl-20 borde-l-1"
            >
              {skill.name}
            </h1>
          ))}
        </Marquee>
      </div>

      {/* Copyright */}
      <div className="text-center text-muted-foreground">
        © {new Date().getFullYear()} Copyright. All Rights Reserved.
      </div>
    </section>
  );
}
