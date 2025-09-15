"use client";

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative flex flex-col items-center justify-center px-6 py-32 max-w-5xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((project) => (
                    <div
                        key={project}
                        className="bg-gray-900 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                    >
                        <h3 className="text-2xl font-bold mb-2">Project {project}</h3>
                        <p className="text-gray-300">Short description of the project goes here.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
