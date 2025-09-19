"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft } from "lucide-react"; // arrow icon

export default function SlideOutNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex items-center">
            {/* Slide-out panel */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="bg-gray-900 text-white w-40 py-6 px-4 rounded-l-xl shadow-lg flex flex-col gap-6 relative"
            >
                <a href="#about" className="hover:text-gray-400">About</a>
                <a href="#skills" className="hover:text-gray-400">Skills</a>
                <a href="#projects" className="hover:text-gray-400">Projects</a>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
            </motion.div>

            {/* Arrow trigger */}
            <button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="bg-gray-800 p-2 rounded-l-xl shadow-md hover:bg-gray-700 transition-colors absolute right-0 top-1/2 -translate-y-1/2"
            >
                <ChevronLeft className="text-white w-6 h-6" />
            </button>
        </div>
    );
}
