"use client";
import { FadeInSection } from "./FadeInSection";

interface AboutProps {
    showTitle?: boolean;
}

export default function About({ showTitle = true }: AboutProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center px-6 py-32 min-h-screen">
            {showTitle && (
                <FadeInSection>
                    <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
                </FadeInSection>
            )}
            <FadeInSection delay={0.2}>
                <p className="text-gray-300 text-lg leading-relaxed">
                    I’m a 4th-year Computing Science student with a passion for building
                    scalable full-stack web applications and exploring AI-driven
                    technologies. I enjoy solving complex problems, collaborating on
                    innovative projects, and continuously learning new tools and
                    frameworks.
                </p>
            </FadeInSection>
        </div>
    );
}
