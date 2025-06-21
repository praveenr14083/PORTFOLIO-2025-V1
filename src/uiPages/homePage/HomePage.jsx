import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { Navbar } from "@/layouts/navbar/Navbar";
import { AboutMeSection } from "./sections/AboutMeSection";

export default function HomePage() {
  return (
    <main id="home-page">
      <Navbar />
      <HeroSection />
      <AboutMeSection />
    </main>
  );
}
