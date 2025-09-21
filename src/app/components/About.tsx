"use client";

import { motion, Easing } from "framer-motion";
import Image from "next/image";

interface AboutProps {
    showTitle?: boolean;
}

// Define cubic-bezier easing
const easeOut: Easing = [0.42, 0, 0.58, 1];

export default function About({ showTitle = true }: AboutProps) {
    const introWords = ["FullStack", "Developer", "|", "Cybersecurity", "Enthusiast"];

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: easeOut, // use the cubic-bezier easing
            },
        }),
    };

    return (
        <>
            <section className="w-full bg-white px-6 pt-32 pb-0 flex flex-col items-center font-sans text-gray-900">
                {/* Full Stack Developer Animated Wave */}
                <div className="mb-6 text-center">
                    <p className="text-[34px] font-bold">
                        {introWords.map((word, i) => {
                            const isPurple = word === "FullStack" || word === "Cybersecurity";
                            return (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    variants={wordVariants}
                                    className={`inline-block mr-3 ${isPurple ? "text-[#6F00FF]" : ""}`}
                                >
                                    {word}
                                </motion.span>
                            );
                        })}
                    </p>
                </div>

                {/* Animated "I code and sometimes it works!" */}
                <motion.p
                    className="text-[24px] text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: easeOut, delay: introWords.length * 0.2 }}
                >
                    I <span className="text-[#6F00FF] font-semibold">code</span> and sometimes it works!
                </motion.p>

                {/* Desk image */}
                <div id="about" className="mt-8 flex justify-center">
                    <Image
                        src="/desk.png"
                        alt="Desk Setup"
                        width={800}
                        height={400}
                        className="object-contain"
                    />
                </div>
            </section>

            {/* Purple About Me section — FULL WIDTH */}
            <div className="w-screen bg-[#6F00FF] text-white flex flex-col justify-center items-center min-h-[500px]">
                <div className="max-w-5xl text-center px-6">
                    <h2 className="text-3xl font-bold mb-4">
                        Hi! I’m <span className="font-semibold">Meenakshi. Nice to meet you!</span>
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        I’m a 4th-year Computer Science student with a passion for building web applications, exploring AI, and diving into cybersecurity. I love solving problems and experimenting with code that actually work on the first try, rare but it happens!
                    </p>
                    <p className="text-lg leading-relaxed">
                        When I’m not coding, you’ll find me sharing memes with fellow devs, taking pictures, or exploring the world one trip at a time.
                    </p>
                </div>
            </div>
        </>
    );
}
