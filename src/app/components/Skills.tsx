"use client";
import { FadeInSection } from "./FadeInSection";
import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
    name: string;
    icon?: string;
}

const SkillItem = ({ skill }: { skill: Skill }) => (
    <motion.div
        whileHover={{ y: -8, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="flex flex-col items-center justify-start p-6 rounded-xl cursor-pointer"
    >
        {skill.icon && (
            <Image
                src={skill.icon}
                alt={skill.name}
                width={64}
                height={64}
                className="mb-3 object-contain"
            />
        )}
        <span className="text-gray-300 text-center text-base md:text-lg mt-3 font-medium">
            {skill.name}
        </span>
    </motion.div>
);

export default function Skills() {
    const skillSections: { title: string; skills: Skill[] }[] = [
        {
            title: "Web Technologies",
            skills: [
                { name: "HTML5", icon: "/html.png" },
                { name: "CSS3", icon: "/css.png" },
                { name: "JavaScript", icon: "/javascript.png" },
                { name: "Bootstrap", icon: "/bootstrap.png" },
                { name: "React.js", icon: "/react.png" },
                { name: "Node.js", icon: "/node.png" },
            ],
        },
        {
            title: "Tools & Technologies",
            skills: [
                { name: "VS Code", icon: "/vscode.png" },
                { name: "Git", icon: "/git.png" },
                { name: "Postman", icon: "/postman.png" },
                { name: "Power BI", icon: "/powerbi.png" },
                { name: "Kali Linux", icon: "/kali.png" },
            ],
        },
        {
            title: "Languages",
            skills: [
                { name: "Python", icon: "/python.png" },
                { name: "C", icon: "/c.png" },
                { name: "C++", icon: "/cpp.png" },
                { name: "Java", icon: "/java.png" },
            ],
        },
        {
            title: "Cybersecurity",
            skills: [
                { name: "Security Analysis", icon: "/security.png" },
                { name: "Encryption", icon: "/encryption.png" },
                { name: "Incident Response", icon: "/incident.png" },
                { name: "Penetration Testing", icon: "/penetration.png" },
            ],
        },
        {
            title: "Databases",
            skills: [
                { name: "MongoDB", icon: "/mongodb.png" },
                { name: "MySQL", icon: "/mysql.png" },
                { name: "Redis", icon: "/redis.png" },
            ],
        },
    ];

    return (
        <section id="skills" className="w-full bg-black px-6 py-16 flex flex-col items-center">
            <div className="flex flex-col items-start w-full max-w-7xl mb-6">
                <FadeInSection>
                    <h2 className="text-5xl md:text-6xl font-bold text-white underline mb-2">
                        Skills
                    </h2>
                </FadeInSection>
            </div>

            <div className="skills-container flex flex-col w-full max-w-7xl gap-6">
                {skillSections.map((section) => (
                    <FadeInSection key={section.title}>
                        <div className="skills-category bg-gray-800 border border-gray-700 rounded-2xl p-6 flex flex-col w-full">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4">
                                {section.title}
                            </h3>
                            <div
                                className="skills-grid grid gap-4 w-full"
                                style={{ gridTemplateColumns: `repeat(${section.skills.length}, minmax(0, 1fr))` }}
                            >
                                {section.skills.map((skill) => (
                                    <SkillItem key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
}
