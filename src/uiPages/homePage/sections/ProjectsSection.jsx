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

  {
    title: "Noto - Note Taking App",
    description:
      "A full-stack note-taking web app built with Next.js, Shadcn, and Tailwind CSS. It features seamless CRUD operations, MongoDB integration, and a modern UI for organizing notes efficiently.",
    image: "/assets/projects/noto-note-taking-app.png",
    tags: [
      "Next JS",
      "Shadcn",
      "Tailwind CSS",
      "Node JS",
      "Express JS",
      "Mongo DB",
    ],
    demoUrl: "https://noto-note-taking-webapp.vercel.app/",
    githubUrl: "https://github.com/praveenr14083/Noto-NoteTakingApp.git",
    readMoreUrl: "https://noto-note-taking-webapp.vercel.app/",
  },
];
// noto-note-taking-app

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
