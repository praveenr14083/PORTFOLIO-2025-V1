import React from "react";
import { SparkleHeading } from "@/components/common/SparkleHeading";
import { ProjectCard } from "../components/ProjectCard";
import { EXPERIENCE } from "../data/educationExperience";

const projects = [
  {
    title: "JAS DigicraftTek Portfolio",
    description: "Portfolio website",
    companyName: EXPERIENCE[0].title,
    image: "/assets/projects/jas-digicraft-tek.png",
    tags: ["Next JS", "Tailwind CSS", "Shadcn"],
    demoUrl: "#",
    githubUrl: "#",
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
  },
  {
    title: "Cakedoo",
    description: "Cake website",
    image: "/assets/projects/cakedoo.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Eco Smart Waste Mangement System",
    description:
      "This Project I did Hardware related work, like Implement IOT System,Micro controller programming, PCB Connection and Integreated Microcntroller with Sensors.",
    companyName: "College Project",
    image: "/assets/projects/cakedoo.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Jasfin",
    description: "Finance website",
    companyName: EXPERIENCE[0].title,
    image: "/assets/projects/jasfin.png",
    tags: ["React", "Vite", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    // Main section
    <section id="projects" className="bg-background">
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
