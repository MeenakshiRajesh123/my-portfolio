"use client";

export default function Skills() {
    const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind", "Python", "SQL"];

    return (
        <section
            id="skills"
            className="relative flex flex-col items-center justify-center px-6 py-32 max-w-4xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-white mb-10">Skills</h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="bg-gray-800 text-yellow-400 px-4 py-2 rounded-full font-semibold hover:scale-110 transition-transform"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
