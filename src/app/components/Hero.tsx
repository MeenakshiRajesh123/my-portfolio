"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import About from "./About";
import Skills from "./Skills";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Scroll ranges
    const zoomStart = 0;
    const zoomEnd = 500;
    const aboutStart = 400;
    const aboutEnd = 900;

    // Hero background animations
    const bushesScale = useTransform(scrollY, [zoomStart, zoomEnd], [1, 1.8]);
    const bushesTranslateY = useTransform(scrollY, [zoomStart, zoomEnd], [0, -80]);
    const seasideScale = useTransform(scrollY, [zoomStart, zoomEnd], [1, 1.2]);
    const heroTextOpacity = useTransform(scrollY, [zoomStart, zoomEnd * 0.6], [1, 0]);
    const heroBgOpacity = useTransform(scrollY, [zoomStart, zoomEnd], [1, 0]);

    // About overlay fade-in
    const aboutOpacity = useTransform(scrollY, [aboutStart, aboutEnd], [0, 1]);

    // Scroll restoration
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual";
            setTimeout(() => window.scrollTo(0, 0), 0);
        }
    }, []);

    return (
        <section ref={ref} className="relative w-full overflow-x-hidden">
            {/* Hero Background */}
            <motion.div
                style={{ opacity: heroBgOpacity }}
                className="fixed inset-0 z-0 overflow-hidden pointer-events-none" // lowered z-index
            >
                <motion.div style={{ scale: seasideScale }} className="absolute inset-0">
                    <Image
                        src="/seaside.jpg"
                        alt="Seaside"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <motion.div
                    style={{ scale: bushesScale, y: bushesTranslateY }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/bushes.png"
                        alt="Bushes"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </motion.div>

                {/* Hero Text */}
                <motion.div
                    style={{ opacity: heroTextOpacity }}
                    className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pointer-events-auto"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Hey, I'm Meenakshi
                    </h1>
                    <p className="mt-2 text-lg md:text-xl lg:text-2xl text-gray-200">
                        Full Stack Developer | Software Developer
                    </p>
                </motion.div>
            </motion.div>

            {/* Spacer for Hero */}
            <div className="h-screen" />

            {/* Black Overlay with About */}
            <motion.div
                style={{ opacity: aboutOpacity }}
                className="relative w-full bg-black flex items-center justify-center min-h-screen z-10 pointer-events-none" // lowered z-index
            >
                <div
                    id="about"
                    className="flex flex-col items-center justify-center text-center px-6 pointer-events-auto"
                >
                    <About />
                </div>
            </motion.div>

            {/* Skills Section */}
            <div
                id="skills-anchor"
                className="w-full flex justify-center items-start pt-32 pb-32 bg-black relative z-20" // raised z-index
            >
                <div className="w-full max-w-7xl px-6">
                    <Skills />
                </div>
            </div>
        </section>
    );
}
