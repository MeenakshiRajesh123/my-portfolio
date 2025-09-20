"use client";

import { FadeInSection } from "./FadeInSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tech: string[];
    githubLink: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "Chiptune Music Generator",
        description: "Generates nostalgic 8-bit music using a genetic algorithm. Outputs retro square-wave audio.",
        tech: ["Python", "Genetic Algorithm", "MIDI", "Audio Synthesis"],
        githubLink: "https://github.com/MeenakshiRajesh123/Chiptunes",
        image: "/chiptune.png",
    },
    {
        title: "Meal Planning App",
        description: "A prototype app that simplifies meal planning and recipe management. Schedule multiple meals and explore a wide variety of recipes.",
        tech: ["Android", "Java", "UI/UX Design"],
        githubLink: "https://github.com/MeenakshiRajesh123/MealPlanner",
        image: "/clementine.png",
    },
    {
        title: "MiniTemu Console App",
        description: "A console-based e-commerce simulation with cart, checkout, and reviews. Implements product management, inventory tracking, and authentication.",
        tech: ["C++", "OOP", "Console App"],
        githubLink: "https://github.com/MeenakshiRajesh123/MiniTemu",
        image: "/minitemu.png",
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio showcasing skills and projects. Showcases development projects and experience.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/MeenakshiRajesh123/my-portfolio",
        image: "/portfolio.png",
    },
];

const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
        whileHover={{ scale: 1.03 }}
        className="flex flex-col justify-between p-4 rounded-2xl bg-[#121212] border border-gray-700 shadow-lg"
        style={{ width: "360px", height: "480px", position: "relative" }}
    >
        <div>
            <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={360}
                    height={192}
                    className="object-cover"
                />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center text-teal-400">
                {project.title}
            </h3>

            <p className="text-gray-300 text-center text-sm md:text-base mb-4 whitespace-pre-line">
                {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs md:text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        <button
            onClick={() => window.open(project.githubLink, "_blank")}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-medium transition-colors relative z-10 pointer-events-auto mx-auto"
        >
            <Github size={18} />
            View Project
        </button>
    </motion.div>
);


export default function Projects() {
    return (
        <div className="flex flex-col items-center gap-8 w-full">
            <FadeInSection>
                <motion.h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold underline mb-6 text-white text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>
            </FadeInSection>

            {/* Two rows */}
            <div className="flex flex-col items-center gap-8 w-full">
                <div className="flex flex-row justify-center gap-8 flex-wrap">
                    {projects.slice(0, 2).map(p => <ProjectCard key={p.title} project={p} />)}
                </div>
                <div className="flex flex-row justify-center gap-8 flex-wrap">
                    {projects.slice(2, 4).map(p => <ProjectCard key={p.title} project={p} />)}
                </div>
            </div>
        </div>
    );
}
