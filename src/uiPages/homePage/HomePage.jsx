import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { AboutMeSection } from "./sections/AboutMeSection";
import { SkillsSection } from "./sections/SkillsSection";
import { EducationSection } from "./sections/EducationSection";
import { ContactSection } from "./sections/ContactSection";
import MainLayout from "@/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <AboutMeSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Contact Section */}
      <ContactSection />
    </MainLayout>
  );
}
