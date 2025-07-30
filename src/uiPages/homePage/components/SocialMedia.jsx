import Link from "next/link";
import React from "react";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";
import { PERSONAL_DATA } from "@/utils/constants/personalData";

const SOCIAL_MEDIA = [
  {
    id: "github",
    icon: Github,
    url: PERSONAL_DATA.github,
    borderColor: "border-gray-400",
    textColor: "text-gray-400",
    hoverColor: "hover:bg-gray-400",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    url: PERSONAL_DATA.linkedin,
    borderColor: "border-blue-500",
    textColor: "text-blue-500",
    hoverColor: "hover:bg-blue-500",
  },
  {
    id: "email",
    icon: Mail,
    url: `mailto:${PERSONAL_DATA.email}`,
    borderColor: "border-red-500",
    textColor: "text-red-500",
    hoverColor: "hover:bg-red-500",
  },
  {
    id: "instagram",
    icon: Instagram,
    url: PERSONAL_DATA.instagram,
    borderColor: "border-pink-500",
    textColor: "text-pink-500",
    hoverColor: "hover:bg-pink-500",
  },
];

export function SocialMedia() {
  return (
    <div className="flex gap-4">
      {SOCIAL_MEDIA.map((media) => (
        <Link
          key={media.id}
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={media.id}
          className={`group border ${media.borderColor} ${media.textColor} ${media.hoverColor} p-3 rounded-full`}
        >
          <media.icon className="group-hover:text-white" />
        </Link>
      ))}
    </div>
  );
}
