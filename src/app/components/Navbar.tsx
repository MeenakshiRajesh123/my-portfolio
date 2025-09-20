"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const [scrollY, setScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                // scrolling up or at top
                setShowNavbar(true);
            } else {
                // scrolling down
                setShowNavbar(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <AnimatePresence>
            {showNavbar && (
                <motion.nav
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md flex justify-between items-center px-6 py-3 shadow-md"
                >
                    {/* Left Icon */}
                    <motion.div
                        className="text-2xl font-bold text-purple-600 cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        🟣
                    </motion.div>

                    {/* Right Links */}
                    <ul className="flex gap-8 text-purple-700 font-semibold text-lg">
                        {navLinks.map((link, i) => (
                            <motion.li
                                key={link.name}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link href={link.href}>{link.name}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
