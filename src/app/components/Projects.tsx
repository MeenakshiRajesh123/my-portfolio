"use client";

import { FadeInSection } from "./FadeInSection";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    tech: string[];
    githubLink: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "Portfolio Website",
        description: "Personal portfolio showcasing skills and projects. Showcases development projects and experience.",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
        githubLink: "https://github.com/MeenakshiRajesh123/my-portfolio",
        image: "/portfolio.png",
    },
    {
        title: "Chiptune Music Generator",
        description: "Generates nostalgic 8-bit music using a genetic algorithm. Outputs retro square-wave audio.",
        tech: ["Python", "Genetic Algorithm", "MIDI"],
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

];

const ProjectRow = ({ project, reverse }: { project: Project; reverse?: boolean }) => (
    <motion.div
        className={`flex flex-col md:flex-row items-center gap-8 w-full ${reverse ? "md:flex-row-reverse" : ""
            }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        {/* Image with jump effect */}
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg shadow-purple-700/20">
            <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-full"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full rounded-lg"
                />
            </motion.div>
        </div>

        {/* Text content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center gap-2">
            <h3 className="text-2xl md:text-3xl font-bold text-[#6F00FF]">{project.title}</h3> {/* Purple project title */}
            <p className="text-black text-base">{project.description}</p> {/* Black description */}
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs md:text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* GitHub avatar-style icon */}
            <div className="mt-2">
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6F00FF] hover:bg-[#5700cc] p-2 transition-transform transform hover:scale-110"
                >
                    <svg
                        viewBox="0 0 16 16"
                        fill="white"
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.54 7.54 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
            </div>
        </div>
    </motion.div>
);

export default function Projects() {
    return (
        <motion.div
            className="flex flex-col items-center gap-16 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <FadeInSection>
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-black text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Things I Have Built
                    <span className="text-[#6F00FF]">.</span>
                </motion.h2>
            </FadeInSection>

            <div className="flex flex-col gap-16 w-full">
                {projects.map((project, idx) => (
                    <ProjectRow key={project.title} project={project} reverse={idx % 2 !== 0} />
                ))}
            </div>
        </motion.div>
    );
}
