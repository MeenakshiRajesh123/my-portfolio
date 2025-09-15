"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const zoomStart = 0;
    const zoomEnd = 500;

    const blackStart = 450;
    const blackEnd = 700;

    // Bushes zoom faster
    const bushesScale = useTransform(scrollY, [zoomStart, zoomEnd], [1, 1.8]);
    const bushesTranslateY = useTransform(scrollY, [zoomStart, zoomEnd], [0, -80]);

    // Seaside zooms slower
    const seasideScale = useTransform(scrollY, [zoomStart, zoomEnd], [1, 1.2]);

    // Hero text opacity
    const textOpacity = useTransform(scrollY, [zoomStart, zoomEnd * 0.6], [1, 0]);

    // Black overlay opacity
    const blackOpacity = useTransform(scrollY, [blackStart, blackEnd], [0, 1]);

    // Navigation opacity
    const navOpacity = useTransform(scrollY, [blackStart, blackEnd], [0, 1]);

    // Hide seaside image when black overlay fully visible
    const seasideOpacity = useTransform(scrollY, [blackStart, blackEnd], [1, 0]);

    return (
        <section ref={ref} className="relative h-[200vh] w-full overflow-x-hidden">
      // Fixed hero wrapper
            <div className="fixed inset-0 z-10 overflow-hidden">
        // Seaside background
                <motion.div
                    style={{ scale: seasideScale, opacity: seasideOpacity }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/seaside.jpg"
                        alt="Seaside"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

        // Bushes overlay
                <motion.div
                    style={{ scale: bushesScale, y: bushesTranslateY, opacity: seasideOpacity }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/bushes.png"
                        alt="Bushes"
                        fill
                        className="object-cover object-top pointer-events-none"
                        priority
                    />
                </motion.div>

        // Hero text centered
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Hey, I'm Meenakshi
                    </h1>
                    <p className="mt-2 text-lg md:text-xl lg:text-2xl text-gray-200">
                        Full Stack Developer | Software Developer
                    </p>
                </motion.div>
            </div>

      // Black overlay
            <motion.div
                style={{ opacity: blackOpacity }}
                className="fixed inset-0 z-20 bg-black flex justify-center items-center"
            >
                <motion.div
                    style={{ opacity: navOpacity }}
                    className="flex flex-row space-x-12 text-center text-white text-2xl md:text-3xl lg:text-4xl"
                >
                    <a href="#about" className="hover:text-gray-400 transition-colors">
                        About
                    </a>
                    <a href="#projects" className="hover:text-gray-400 transition-colors">
                        Projects
                    </a>
                    <a href="#skills" className="hover:text-gray-400 transition-colors">
                        Skills
                    </a>
                    <a href="#contact" className="hover:text-gray-400 transition-colors">
                        Contact
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
