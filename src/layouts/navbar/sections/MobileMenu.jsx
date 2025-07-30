import React from "react";
import { Link } from "react-scroll";
import {
  Info,
  FolderKanban,
  BrainCircuit,
  GraduationCap,
  Mail,
} from "lucide-react";
import { NAV_ITEMS } from "@/utils/constants/navItems";

const ICONS_MAP = {
  about: Info,
  projects: FolderKanban,
  skills: BrainCircuit,
  myJourney: GraduationCap,
  contact: Mail,
};

export function MobileMenu({ setMenuOpen }) {
  return (
    <nav className="absolute left-0 section-px h-[100dvh] w-full md:hidden flex flex-col gap-6 py-6 bg-background">
      {NAV_ITEMS.map((item) => {
        const Icon = ICONS_MAP[item.id];
        return (
          <Link
            key={item.id}
            to={item.href}
            smooth={true}
            offset={-55}
            spy={true}
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-6 hover:text-c-primary transition-colors duration-200"
          >
            {Icon && <Icon className="text-lg" />}
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
