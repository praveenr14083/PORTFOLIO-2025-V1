import { SocialMedia } from "@/uiPages/homePage/components/SocialMedia";
import React from "react";
import { NAV_ITEMS } from "@/utils/constants/navItems";
import Link from "next/link";
import { SKILLS } from "@/utils/constants/skills";
import Marquee from "react-fast-marquee";
import { Asterisk } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 sm:py-10 md:py-12 lg:py-14 space-y-5">
      <div className="section-px ">
        <div className="flex flex-col items-center gap-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-c-primary text-center">
              PRAVEEN.DEV
            </h1>
            <p className="text-center text-muted-foreground">
              Designing with Purpose. Developing with Precision.
            </p>
          </div>

          <div className="flex flex-col md:hidden gap-4 md:gap-8 text-center font-semibold">
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

          <SocialMedia />
        </div>
      </div>

      <div className="bored border-dashed border-t-1 border-b-1 border-gray-400/20 py-8">
        <Marquee className="w-full">
          {SKILLS.frontEndSkills.map((skill) => (
            <h1
              key={skill.id}
              className="font-semibold text-3xl md:text-7xl flex items-center ml-10 md:ml-20 text-"
            >
              {skill.name}
            </h1>
          ))}
        </Marquee>
      </div>

      <div className="text-center text-muted-foreground">
        © 2025 Copyright. All Rights Reserved.
      </div>
    </footer>
  );
}
