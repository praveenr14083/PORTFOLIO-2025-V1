import React from "react";
import { SparkleHeading } from "@/components/common/SparkleHeading";
import { ProjectCard } from "../components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built using Next.js, showcasing projects, skills, and achievements with smooth animations and responsive design.",
    image: "/assets/projects/portfolio.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
    readMoreUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    // Main section
    <section id="project-section" className="bg-background">
      {/* Container section */}
      <section className="section-px py-8 sm:py-10 md:py-12 lg:py-14">
        <div>
          {/* Section Heading */}
          <SparkleHeading firstText="my" secondText="projects" />

          <div className="flex flex-wrap justify-center gap-8 pt-8 sm:pt-10 md:pt-12 lg:pt-14">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
