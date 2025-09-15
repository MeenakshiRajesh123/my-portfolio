"use client";

export default function About() {
    return (
        <section
            id="about"
            className="relative flex flex-col items-center justify-center px-6 py-32 text-center max-w-4xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
                I’m a 4th-year Computing Science student with a passion for building
                scalable full-stack web applications and exploring AI-driven technologies.
                I enjoy solving complex problems, collaborating on innovative projects, and
                continuously learning new tools and frameworks.
            </p>
        </section>
    );
}
