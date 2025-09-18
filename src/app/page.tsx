"use client";

import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black">
      {/* Always visible nav */}
      <nav className="fixed top-6 left-0 w-full z-40 flex justify-between px-8 text-white text-lg md:text-xl lg:text-2xl">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#skills" className="hover:text-gray-400">Skills</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </nav>

      <Hero />
      <About />
    </main>
  );
}
