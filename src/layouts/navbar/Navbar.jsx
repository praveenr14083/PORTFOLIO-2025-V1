"use client";

import React, { useState } from "react";
import Link from "next/link";

import { LuWebhook } from "react-icons/lu";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

import { NAV_ITEMS } from "@/utils/constants/navItems";
import { PERSONAL_DATA } from "@/utils/constants/personalData";

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { MobileMenu } from "./sections/MobileMenu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <nav
      id="navbar"
      className="sticky top-0 w-full section-px py-3 bg-black/90 border-b border-dashed"
    >
      <section className="flex items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <LuWebhook
            className="text-2xl text-white animate-spin"
            aria-label="Logo Icon"
          />

          <h1 className="hidden md:flex text-md text-white font-semibold ">
            {PERSONAL_DATA.name.toUpperCase()}
            <span>.DEV</span>
          </h1>
        </div>

        {/* Navigation & Contact */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 font-semibold">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white hover:text-violet-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Me Button */}
          <Link href="/" className="hidden md:block">
            <InteractiveHoverButton>Resume</InteractiveHoverButton>
          </Link>

          {/* Mobile Menu Icon */}
          <button
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            className="md:hidden size-10 bg-violet-500 hover:bg-violet-500/90 rounded flex items-center justify-center"
          >
            {menuOpen ? (
              <RiCloseFill className="text-xl text-white group-hover:text-black" />
            ) : (
              <RiMenu3Fill className="text-xl text-white group-hover:text-black" />
            )}
          </button>
        </div>
      </section>
      {menuOpen && <MobileMenu />}
    </nav>
  );
}
