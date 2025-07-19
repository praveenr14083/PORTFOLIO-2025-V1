"use client";

import React, { useEffect, useState } from "react";
import { HeroSection } from "./sections/HeroSection";
import { AboutMeSection } from "./sections/AboutMeSection";
import { SkillsSection } from "./sections/SkillsSection";
import { EducationSection } from "./sections/EducationSection";
import { ContactSection } from "./sections/ContactSection";
import MainLayout from "@/layouts/MainLayout";
import { MyAchievements } from "./sections/MyAchievements";
import { PreLoader } from "@/components/common/PreLoader";
import { ProjectsSection } from "./sections/ProjectsSection";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate 4s load
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PreLoader />;

  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <AboutMeSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Project section */}
      <ProjectsSection />

      {/* Education Section */}
      <EducationSection />

      {/* My Achievements */}
      <MyAchievements />

      {/* Contact Section */}
      <ContactSection />
    </MainLayout>
  );
}
