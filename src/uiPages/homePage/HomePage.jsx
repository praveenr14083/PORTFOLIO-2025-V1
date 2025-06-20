import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { Navbar } from "@/layouts/navbar/Navbar";

export default function HomePage() {
  return (
    <main id="home-page">
      <Navbar />
      <HeroSection />
    </main>
  );
}
