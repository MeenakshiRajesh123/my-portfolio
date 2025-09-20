"use client";
import { FadeInSection } from "./FadeInSection";
import Image from "next/image";

interface AboutProps {
    showTitle?: boolean;
}

export default function About({ showTitle = true }: AboutProps) {
    return (
        <div className="flex flex-col items-start justify-center text-left px-6 py-0 h-full w-full max-w-7xl">
            <FadeInSection>
                {/* Heading */}
                {showTitle && (
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white underline mb-8">
                        About Me
                    </h2>
                )}

                {/* Card */}
                <div className="border border-white rounded-2xl p-8 w-full shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col md:flex-row items-center gap-8">
                    {/* Picture */}
                    <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white">
                        <Image
                            src="/profile.jpg"
                            alt="Meenakshi Rajesh"
                            width={192}
                            height={192}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-left">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I’m Meenakshi Rajesh, a 4th-year Computing Science student at Thompson Rivers University
                            with experience in full-stack development, AI-driven projects, and QA processes.
                            I have strong skills in React, Node.js, MongoDB, Python, and cloud technologies like AWS.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mt-2">
                            Currently, I’m working as a Full Stack Developer at MAE, building dashboards
                            and managing secure APIs. I thrive in Agile teams, enjoy problem-solving,
                            and continuously seek to build scalable and efficient applications.
                        </p>
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}
