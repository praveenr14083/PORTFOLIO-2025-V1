import React from "react";
import Link from "next/link";
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
  education: GraduationCap,
  contact: Mail,
};

export function MobileMenu() {
  return (
    <nav className="md:hidden flex flex-col gap-6 py-6">
      {NAV_ITEMS.map((item) => {
        const Icon = ICONS_MAP[item.id];
        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-center gap-6 text-white hover:text-violet-500 transition-colors duration-200"
          >
            {Icon && <Icon className="text-lg" />}
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
