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
        whileHover="hover"
        className="flex flex-col items-center justify-start p-6 rounded-xl cursor-pointer"
    >
        {skill.icon && (
            <motion.div
                variants={{
                    hover: {
                        y: [0, -15, 0],
                        transition: {
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    },
                }}
                className="mb-3 flex items-center justify-center w-20 h-20"
            >
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="object-contain"
                />
            </motion.div>
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
                { name: "JavaScript", icon: "/javascript.png" },
                { name: "React", icon: "/react.png" },
                { name: "Node", icon: "/node.png" },
                { name: "Next.js", icon: "/next.svg" },
                { name: "Typescript", icon: "/type.svg" },
                { name: "HTML5", icon: "/html.png" },
                { name: "Bootstrap", icon: "/bootstrap.png" },
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
                { name: "MongoDB", icon: "/mongodb.svg" },
                { name: "MySQL", icon: "/mysql.png" },
            ],
        },
    ];

    return (
        <section id="skills" className="w-full bg-black px-6 py-16 flex flex-col items-center">
            {/* Main Skills Heading */}
            <div className="flex flex-col items-start w-full max-w-7xl mb-6">
                <FadeInSection>
                    <motion.h2
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white underline mb-2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Skills
                    </motion.h2>
                </FadeInSection>
            </div>

            <div className="skills-container flex flex-col w-full max-w-7xl gap-6">
                {skillSections.map((section) => {
                    const headingColor = "text-gray-400"; // updated subsection heading color

                    return (
                        <FadeInSection key={section.title}>
                            {/* Section Card with hover effect */}
                            <motion.div
                                className="skills-category border border-gray-700 rounded-2xl p-6 flex flex-col w-full"
                                style={{ backgroundColor: "#121212" }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <h3 className={`text-xl md:text-2xl font-bold mb-4 ${headingColor}`}>
                                    {section.title}
                                </h3>
                                <div
                                    className="skills-grid grid gap-6 w-full place-items-center"
                                    style={{
                                        gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`,
                                    }}
                                >
                                    {section.skills.map((skill) => (
                                        <SkillItem key={skill.name} skill={skill} />
                                    ))}
                                </div>
                            </motion.div>
                        </FadeInSection>
                    );
                })}
            </div>
        </section>
    );
}
