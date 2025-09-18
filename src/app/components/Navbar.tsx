"use client";
import Navbar from "./components/Navbar";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-30 flex justify-between p-6 text-white text-lg md:text-xl lg:text-2xl">
            <div className="flex space-x-8">
                <a href="#about" className="hover:text-gray-400">About</a>
                <a href="#skills" className="hover:text-gray-400">Skills</a>
            </div>
            <div className="flex space-x-8">
                <a href="#projects" className="hover:text-gray-400">Projects</a>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
            </div>
        </nav>
    );
}
