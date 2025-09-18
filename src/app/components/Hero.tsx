"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import About from "./About";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [forceAbout, setForceAbout] = useState(false);

    // Scroll ranges
    const zoomStart = 0;
    const zoomEnd = 500;
    const blackStart = 450;
    const blackEnd = 700;

    // Background animations
    const bushesScale = useTransform(scrollY, [zoomStart, zoomEnd], [1, 1.8]);
    const bushesTranslateY = useTransform(scrollY, [zoomStart, zoomEnd], [0, -80]);
    const seasideScale = useTransform(scrollY, [zoomStart, zoomEnd], [1, 1.2]);

    // Hero text + overlay
    const textOpacity = useTransform(scrollY, [zoomStart, zoomEnd * 0.6], [1, 0]);
    const blackOpacity = useTransform(scrollY, [blackStart, blackEnd], [0, 1]);
    const aboutOpacity = useTransform(scrollY, [blackStart, blackEnd + 200], [0, 1]);

    // Scroll to top on refresh
    useEffect(() => {
        if (typeof window !== "undefined") {
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "manual";
            }
            setTimeout(() => window.scrollTo(0, 0), 0);
        }
    }, []);

    // Nav click scroll handler
    useEffect(() => {
        const handleNavClick = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (!target || !target.getAttribute) return;

            const href = target.getAttribute("href");
            if (href === "#about") {
                e.preventDefault();

                // Force full About opacity while scrolling
                setForceAbout(true);
                window.scrollTo({
                    top: blackEnd + 200, // adjust to fully show About
                    behavior: "smooth",
                });

                // Remove force after scroll (to resume normal fade behavior)
                setTimeout(() => {
                    setForceAbout(false);
                }, 800); // match transition duration
            }
        };

        document.querySelectorAll('a[href="#about"]').forEach((el) =>
            el.addEventListener("click", handleNavClick)
        );

        return () => {
            document.querySelectorAll('a[href="#about"]').forEach((el) =>
                el.removeEventListener("click", handleNavClick)
            );
        };
    }, []);

    return (
        <section ref={ref} className="relative h-[200vh] w-full overflow-x-hidden">
            {/* Hero Background */}
            <div className="fixed inset-0 z-10 overflow-hidden">
                <motion.div style={{ scale: seasideScale }} className="absolute inset-0">
                    <Image
                        src="/seaside.jpg"
                        alt="Seaside"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <motion.div style={{ scale: bushesScale, y: bushesTranslateY }} className="absolute inset-0">
                    <Image
                        src="/bushes.png"
                        alt="Bushes"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </motion.div>

                {/* Hero Text */}
                <motion.div style={{ opacity: textOpacity }} className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Hey, I'm Meenakshi
                    </h1>
                    <p className="mt-2 text-lg md:text-xl lg:text-2xl text-gray-200">
                        Full Stack Developer | Software Developer
                    </p>
                </motion.div>
            </div>

            {/* Black Overlay */}
            <motion.div
                style={{ opacity: blackOpacity }}
                className="fixed inset-0 z-20 bg-black flex justify-center items-center"
            >
                <motion.div style={{ opacity: forceAbout ? 1 : aboutOpacity }} id="about">
                    <About />
                </motion.div>
            </motion.div>

            {/* Scroll anchor for nav */}
            <div id="about-anchor" className="absolute top-[700px] w-full h-[1px]" />
        </section>
    );
}
