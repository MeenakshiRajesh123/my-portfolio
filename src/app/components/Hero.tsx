"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Image from "next/image";

interface NavLink {
    label: string;
    href: string;
}

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const [showNavbar, setShowNavbar] = useState(true);
    const { scrollY } = useScroll();
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks: NavLink[] = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    // Hide/show navbar on scroll
    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest === 0) {
                setShowNavbar(true); // always visible at top
            } else if (latest > lastScrollY && latest > 100) {
                setShowNavbar(false); // scrolling down
            } else if (latest < lastScrollY) {
                setShowNavbar(true); // scrolling up
            }
            setLastScrollY(latest);
        });
    }, [scrollY, lastScrollY]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual";
            setTimeout(() => window.scrollTo(0, 0), 0);
        }
    }, []);

    return (
        <div ref={ref} className="relative w-full bg-white overflow-x-hidden font-sans text-gray-900">
            {/* Navbar */}
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: showNavbar ? 0 : -100 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-50 bg-white"
            >
                {/* Top Left Icon */}
                <div className="flex items-center">
                    <Image src="/icon.png" alt="Logo" width={100} height={100} /> {/* bigger icon */}
                </div>

                {/* Top Right Links */}
                <div className="flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-900 font-medium hover:text-purple-600 transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </motion.nav>

            {/* Intro Section */}
            <section className="w-full flex flex-col items-center justify-center pt-[80px] pb-16 text-center">
                <About showTitle={true} />
            </section>

            {/* Skills Section */}
            <section
                id="skills"
                className="w-full py-32"
                style={{ scrollMarginTop: "80px" }}
            >
                <Skills />
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className="w-full flex justify-center items-start py-32"
                style={{ scrollMarginTop: "80px" }}
            >
                <div className="w-full max-w-7xl px-6">
                    <Projects />
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="w-full flex justify-center items-start py-32 md:pb-0"
                style={{ scrollMarginTop: "80px" }}
            >
                <Contact />
            </section>


        </div>
    );
}
