import Image from "next/image";
import React from "react";
import { Github, ExternalLink, BookOpen } from "lucide-react";

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  companyName = "self-project",
  // readMoreUrl,
}) {
  return (
    <div className="group flex flex-col justify-between w-full md:min-w-[320px] md:max-w-[350px] rounded-xl bg-card border border-border overflow-hidden transition">
      <div>
        {/* Image */}
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-[250px]">
            <Image
              src={image}
              alt={`${title} Preview`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </a>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>

          <p className="uppercase text-sm text-c-primary font-semibold tracking-widest">
            {companyName}
          </p>

          <p className="text-sm text-muted-foreground text-justify">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-sm">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-muted rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap gap-3 p-4  items-center justify-between">
        <div className="flex gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md bg-c-primary text-white hover:bg-c-primary/90 transition"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
          {/* {readMoreUrl && (
            <a
              href={readMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-input text-foreground hover:bg-muted transition"
            >
              <BookOpen size={16} />
              Read More
            </a>
          )} */}
        </div>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground"
          >
            <Github size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
