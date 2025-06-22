import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { Navbar } from "@/layouts/navbar/Navbar";
import { AboutMeSection } from "./sections/AboutMeSection";
import { SkillsSection } from "./sections/SkillsSection";
import { MarqueeText } from "./components/MarqueeText";
import { EducationSection } from "./sections/EducationSection";

export default function HomePage() {
  return (
    <main id="home-page">
      <Navbar />
      <HeroSection />
      <MarqueeText />
      <AboutMeSection />
      <SkillsSection />
      <EducationSection />
    </main>
  );
}
