"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
    name: string;
    icon: string;
    category: "frontend" | "backend" | "tools";
}

export default function Skills() {
    const [activeCategory, setActiveCategory] =
        useState<Skill["category"]>("frontend");

    const skills: Skill[] = [
        // Frontend
        { name: "JavaScript", icon: "/javascript.png", category: "frontend" },
        { name: "React", icon: "/react.png", category: "frontend" },
        { name: "Next.js", icon: "/next.svg", category: "frontend" },
        { name: "TypeScript", icon: "/type.svg", category: "frontend" },
        { name: "HTML5", icon: "/html.png", category: "frontend" },
        { name: "Bootstrap", icon: "/bootstrap.png", category: "frontend" },

        // Backend
        { name: "Node", icon: "/node.png", category: "backend" },
        { name: "Python", icon: "/python.png", category: "backend" },
        { name: "Java", icon: "/java.png", category: "backend" },
        { name: "C++", icon: "/cpp.png", category: "backend" },
        { name: "MongoDB", icon: "/mongodb.png", category: "backend" },
        { name: "MySQL", icon: "/mysql.png", category: "backend" },

        // Tools
        { name: "VS Code", icon: "/vscode.png", category: "tools" },
        { name: "Git", icon: "/git.png", category: "tools" },
        { name: "Postman", icon: "/postman.png", category: "tools" },
        { name: "Power BI", icon: "/powerbi.png", category: "tools" },
        { name: "Kali Linux", icon: "/kali.png", category: "tools" },
    ];

    const nodeIcons: Record<Skill["category"], string> = {
        frontend: "/frontend.png",
        backend: "/backend.png",
        tools: "/tools.png",
    };

    const filteredSkills = skills.filter(
        (skill) => skill.category === activeCategory
    );

    return (
        <section
            className="w-screen relative flex flex-col items-center py-24 overflow-hidden"
        >
            {/* Heading */}
            <motion.h2
                id="skills"
                className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                What I Bring to the Table
                <span className="text-[#6F00FF]">.</span>
            </motion.h2>

            {/* Changed Background Div */}
            <motion.div
                className="w-full relative flex flex-col justify-center items-center rounded-xl shadow-lg p-8"
                style={{
                    background: "linear-gradient(180deg, #6F00FF 0%, #F0E5FF 100%)",
                    minHeight: "500px",
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Category title */}
                <motion.h3
                    key={activeCategory}
                    className="text-xl font-semibold text-white mb-6 -translate-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {activeCategory.charAt(0).toUpperCase() +
                        activeCategory.slice(1)}
                </motion.h3>

                {/* Icons container */}
                <motion.div className="flex flex-wrap justify-center items-center gap-10 relative z-10 max-w-3xl">
                    {filteredSkills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.15 }}
                            className="w-20 h-20 flex items-center justify-center"
                        >
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Node connectors */}
                <div className="absolute bottom-6 w-full flex justify-center">
                    <div className="relative w-full max-w-2xl flex justify-between items-center">
                        {/* White pipeline with purple border */}
                        <div className="absolute top-1/2 left-0 w-full h-2 bg-white border border-purple-500 rounded-full -translate-y-1/2"></div>

                        {(["frontend", "backend", "tools"] as Skill["category"][]).map(
                            (cat) => (
                                <motion.button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    animate={{
                                        scale: activeCategory === cat ? 1.3 : 1,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center p-2 transition
                                        ${activeCategory === cat
                                            ? "bg-gradient-to-br from-purple-500 to-indigo-500"
                                            : "bg-gray-200"
                                        }`}
                                >
                                    <Image
                                        src={nodeIcons[cat]}
                                        alt={cat}
                                        width={28}
                                        height={28}
                                        className="object-contain"
                                    />
                                </motion.button>
                            )
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
