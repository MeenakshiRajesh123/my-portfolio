"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FadeInSection } from "./FadeInSection";

const ChevronLeft = () => (
    <span className="text-6xl text-indigo-500 opacity-60 hover:opacity-100">‹</span>
);
const ChevronRight = () => (
    <span className="text-6xl text-indigo-500 opacity-60 hover:opacity-100">›</span>
);

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
        description: "Personal portfolio showcasing skills and projects.",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
        githubLink: "https://github.com/MeenakshiRajesh123/my-portfolio",
        image: "/portfolio.png",
    },
    {
        title: "Chiptune Music Generator",
        description: "Generates nostalgic 8-bit music using a genetic algorithm.",
        tech: ["Python", "Genetic Algorithm", "MIDI"],
        githubLink: "https://github.com/MeenakshiRajesh123/Chiptunes",
        image: "/chiptune.png",
    },
    {
        title: "Meal Planning App",
        description: "Simplifies meal planning and recipe management.",
        tech: ["Android", "Java", "UI/UX Design"],
        githubLink: "https://github.com/MeenakshiRajesh123/MealPlanner",
        image: "/clementine.png",
    },
    {
        title: "MiniTemu Console App",
        description: "A console-based e-commerce simulation with cart, checkout, and reviews.",
        tech: ["C++", "OOP", "Console App"],
        githubLink: "https://github.com/MeenakshiRajesh123/MiniTemu",
        image: "/minitemu.png",
    },
];

export default function Projects() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % projects.length);
    const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <section
            id="projects"
            className="w-full flex flex-col items-center justify-center px-6 pb-75 bg-white relative"
        >
            {/* Heading */}
            <FadeInSection>
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-80">
                    What I Have Built<span className="text-[#6F00FF]">.</span>
                </h2>
            </FadeInSection>

            {/* Carousel */}
            <div className="relative w-full flex justify-center items-center">
                {/* Left arrow */}
                <button
                    onClick={prev}
                    className="absolute left-[-90px] top-1/2 -translate-y-1/2 z-20"
                >
                    <ChevronLeft />
                </button>

                {/* Project cards container */}
                <div className="flex justify-center items-center gap-6 overflow-hidden w-full max-w-7xl">
                    {projects.map((project, i) => {
                        const offset = (i - index + projects.length) % projects.length;

                        let scale = 0.75;
                        let opacity = 0.25;
                        let zIndex = 0;
                        let translateX = 0;

                        if (offset === 0) {
                            scale = 1;
                            opacity = 1;
                            zIndex = 10;
                        } else if (offset === 1) {
                            translateX = 300;
                            opacity = 0.5;
                            scale = 0.85;
                        } else if (offset === projects.length - 1) {
                            translateX = -300;
                            opacity = 0.5;
                            scale = 0.85;
                        }

                        return (
                            <motion.div
                                key={i}
                                animate={{ scale, opacity, x: translateX, zIndex }}
                                transition={{ duration: 0.6 }}
                                className="absolute w-[85%] md:w-[60%] bg-[#1c1b22] rounded-2xl shadow-2xl overflow-hidden"
                            >
                                {/* Image */}
                                <div className="w-full h-72">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={500}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 text-white">
                                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                                    <p className="text-gray-300 mt-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.map((tech, j) => (
                                            <span
                                                key={j}
                                                className="px-3 py-1 text-xs bg-indigo-600/30 text-indigo-200 rounded-lg"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* GitHub Icon */}
                                    <div className="mt-4">
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-block"
                                        >
                                            <FaGithub
                                                className="text-3xl"
                                                style={{ color: "#6F00FF" }}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Right arrow */}
                <button
                    onClick={next}
                    className="absolute right-[-90px] top-1/2 -translate-y-1/2 z-20"
                >
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
}
