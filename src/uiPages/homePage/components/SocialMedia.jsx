import Link from "next/link";
import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import { PERSONAL_DATA } from "@/utils/constants/personalData";

const SOCIAL_MEDIA = [
  {
    id: "github",
    icon: Github,
    url: PERSONAL_DATA.github,
  },
  {
    id: "linkedin",
    icon: Linkedin,
    url: PERSONAL_DATA.linkedin,
  },
  {
    id: "email",
    icon: Mail,
    url: `mailto:${PERSONAL_DATA.email}`,
  },
];

export function SocialMedia() {
  return (
    <div className="flex gap-8">
      {SOCIAL_MEDIA.map((media) => (
        <Link
          key={media.id}
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={media.id}
        >
          <media.icon className="hover:text-c-primary transition-colors" />
        </Link>
      ))}
    </div>
  );
}
