import Link from "next/link";
import React from "react";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";
import { PERSONAL_DATA } from "@/utils/constants/personalData";

const SOCIAL_MEDIA = [
  {
    id: "github",
    icon: Github,
    url: PERSONAL_DATA.github,
    textColor: "hover:text-gray-500",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    url: PERSONAL_DATA.linkedin,
    textColor: "hover:text-blue-500",
  },
  {
    id: "email",
    icon: Mail,
    url: `mailto:${PERSONAL_DATA.email}`,
    borderColor: "border-red-500",
    textColor: "hover:text-red-500",
  },
  {
    id: "instagram",
    icon: Instagram,
    url: PERSONAL_DATA.instagram,
    textColor: "hover:text-pink-500",
  },
];

export function SocialMedia() {
  return (
    <div className="flex gap-6">
      {SOCIAL_MEDIA.map((media) => (
        <Link
          key={media.id}
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={media.id}
        >
          <media.icon className={`${media.textColor} text-muted-foreground`} />
        </Link>
      ))}
    </div>
  );
}
