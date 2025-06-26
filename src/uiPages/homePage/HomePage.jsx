import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { Navbar } from "@/layouts/navbar/Navbar";
import { AboutMeSection } from "./sections/AboutMeSection";
import { SkillsSection } from "./sections/SkillsSection";
import { EducationSection } from "./sections/EducationSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "@/layouts/footer/Footer";

export default function HomePage() {
  return (
    <main id="home-page">
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
