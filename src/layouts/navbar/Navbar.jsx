"use client";

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useTheme } from "next-themes";
import { NAV_ITEMS } from "@/utils/constants/navItems";
import { PERSONAL_DATA } from "@/utils/constants/personalData";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { MobileMenu } from "./sections/MobileMenu";
import { Sun, Moon, Menu, X, Webhook, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handlePreviewClick = () => {
    window.open("/assets/resume/PRAVEEN-R-RESUME.pdf", "_blank");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    // Main Section
    <nav
      id="navbar"
      className="sticky top-0 z-25 w-full bg-background border-b border-border border-dashed"
    >
      {/* Container Section */}
      <div className="section-px py-3 md:py-4">
        <section className="flex items-center justify-between">
          {/* Logo & Name */}
          <ScrollLink to="hero" smooth={true} offset={-60} spy={true}>
            <div className="flex items-center gap-3">
              <Webhook className="text-2xl animate-spin" />

              <h1 className="hidden md:flex text-md font-semibold ">
                {PERSONAL_DATA.name.toUpperCase()}
                <span>.DEV</span>
              </h1>
            </div>
          </ScrollLink>

          {/* Navigation & Contact */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-8 font-semibold">
              {NAV_ITEMS.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.href}
                  smooth={true}
                  offset={-60}
                  spy={true}
                  activeClass="text-c-primary transition-colors duration-500"
                  className="hover:text-c-primary transition-colors duration-200"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            {/* Download Resume Button */}
            <Button
              onClick={handlePreviewClick}
              className="group hidden md:flex gap-2 bg-c-primary hover:bg-white hover:text-black px-4 py-2 rounded-full font-semibold text-white"
            >
              <Download />
              Resume
            </Button>

            {/* Theme Toggle */}
            <Button
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="size-10 bg-background hover:bg-background text-black dark:text-white rounded-full border border-border"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>

            {/* Mobile Menu Icon */}
            <Button
              size="icon"
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="md:hidden size-10 bg-c-primary hover:bg-c-primary/90 flex items-center justify-center"
            >
              {menuOpen ? (
                <X className="text-xl text-white group-hover:text-black" />
              ) : (
                <Menu className="text-xl text-white group-hover:text-black" />
              )}
            </Button>
          </div>
        </section>
      </div>
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
    </nav>
  );
}
