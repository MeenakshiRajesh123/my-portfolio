"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FadeInSection } from "./FadeInSection";

const ChevronLeft = () => (
    <span className="text-8xl text-[#6F00FF] opacity-70 cursor-pointer hover:scale-110 transition-transform">
        ‹
    </span>
);

const ChevronRight = () => (
    <span className="text-8xl text-[#6F00FF] opacity-70 cursor-pointer hover:scale-110 transition-transform">
        ›
    </span>
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
            className="w-full flex flex-col items-center justify-center px-6 pb-10 relative"
        >
            {/* Heading */}
            <FadeInSection>
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-20">
                    What I Have Built<span className="text-[#6F00FF]">.</span>
                </h2>
            </FadeInSection>

            {/* Carousel */}
            <div className="relative w-full flex justify-center items-center">
                {/* Left arrow */}
                <button
                    onClick={prev}
                    className="absolute left-[70px] top-1/2 -translate-y-1/2 z-20"
                >
                    <ChevronLeft />
                </button>

                {/* Project card */}
                <div className="relative w-[90%] md:w-[75%] lg:w-[70%] bg-[#1c1b22] rounded-2xl shadow-2xl overflow-hidden cursor-pointer border-4 border-[#6F00FF]">
                    {/* Image */}
                    <div className="w-full h-80">
                        <Image
                            src={projects[index].image}
                            alt={projects[index].title}
                            width={800}
                            height={500}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6 text-white">
                        <h3 className="text-2xl font-semibold text-[#6F00FF]">
                            {projects[index].title}
                        </h3>
                        <p className="text-gray-300 mt-2">{projects[index].description}</p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {projects[index].tech.map((tech, j) => (
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
                                href={projects[index].githubLink}
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
                </div>

                {/* Right arrow */}
                <button
                    onClick={next}
                    className="absolute right-[60px] top-1/2 -translate-y-1/2 z-20"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-6 gap-2">
                {projects.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${i === index ? "bg-[#6F00FF]" : "bg-indigo-300 opacity-50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
