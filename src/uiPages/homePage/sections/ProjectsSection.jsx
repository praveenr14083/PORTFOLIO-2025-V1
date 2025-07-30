import React from "react";
import { SparkleHeading } from "@/components/common/SparkleHeading";
import { ProjectCard } from "../components/ProjectCard";
import { EXPERIENCE } from "../data/educationExperience";

const projects = [
  {
    title: "JAS DigicraftTek Portfolio",
    description:
      "A modern and responsive portfolio website designed to showcase digital services, past projects, and creative expertise. Built with Next.js, Tailwind CSS, and Shadcn UI, it features smooth navigation, an interactive UI, and a visually appealing layout optimized for all devices.",
    companyName: EXPERIENCE[0].title,
    image: "/assets/projects/jas-digicraft-tek.png",
    tags: ["Next JS", "Tailwind CSS", "Shadcn"],
    demoUrl: "https://jas-digicrafttek.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Noto - Note Taking App",
    description:
      "A full-stack note-taking web application built with Next.js, Shadcn, and Tailwind CSS. It supports seamless CRUD operations, integrates with MongoDB, and features a modern, user-friendly UI for organizing notes efficiently.",
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
    title: "Eco Smart Waste Management System",
    description:
      "An IoT-based hardware project focused on smart waste management. Developed as part of a team using MicroPython with Firebase integration, where I contributed to the hardware side, handling microcontroller programming, PCB design, and sensor-based waste monitoring for improved efficiency.",
    companyName: "College Project",
    image: "/assets/projects/eco-smart-waste-management-system.png",
    tags: ["MicroPython", "Firebase", "IoT", "PCB Design", "Sensors"],
    demoUrl: "https://eco-smart-waste-management-system.netlify.app/",
    githubUrl: "#",
  },
  {
    title: "Cakedoo",
    description:
      "A beautifully designed cake shop website built with React and Tailwind CSS, featuring responsive layouts and engaging visuals.",
    image: "/assets/projects/cakedoo.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    title: "Jasfin",
    description:
      "A finance-focused website developed using React and Vite, featuring a clean, responsive design tailored for financial services.",
    companyName: EXPERIENCE[0].title,
    image: "/assets/projects/jasfin.png",
    tags: ["React", "Vite", "Tailwind CSS"],
    demoUrl: "https://jasfin.netlify.app/",
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
