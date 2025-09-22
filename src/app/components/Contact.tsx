"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/MeenakshiRajesh123", label: "GitHub" },
        { icon: <FaInstagram />, href: "https://instagram.com/meenakshi_rajesh", label: "Instagram" },
        { icon: <FaEnvelope />, href: "mailto:meenakshi.nair24@gmail.com", label: "Email" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/meenakshirajesh1/", label: "LinkedIn" },
    ];

    return (
        <div className="w-full flex flex-col items-center">
            {/* Heading outside purple div */}
            <motion.h2
                id="contact"
                className="text-3xl md:text-4xl font-bold mb-12 text-black text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Coffee & Code
                <span className="text-[#6F00FF]">?</span>
            </motion.h2>

            {/* Purple Contact Section */}
            <section
                className="w-screen bg-[#6F00FF] text-white flex flex-col items-center py-32"
                style={{ scrollMarginTop: "80px" }}
            >
                <div className="max-w-5xl text-center px-6 flex flex-col items-center">
                    {/* Avatar */}
                    <div className="mb-8">
                        <Image
                            src="/avatar.png"
                            alt="Meenakshi Avatar"
                            width={150}
                            height={150}
                            className="rounded-full object-cover border-4 border-white"
                        />
                    </div>

                    {/* Text */}
                    <div className="mb-8">
                        <p className="text-lg mb-4">
                            Interested in working together? We should queue up a time to chat. I’ll buy the coffee ☕
                        </p>
                        <p className="text-lg">
                            Whether it’s a collab, a job, or just saying hi, I’d love to hear from you!
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-8 text-2xl mb-12">
                        {socialLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="hover:text-gray-300 transition-colors"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Footer */}
                    <p className="text-sm opacity-80">
                        Built by <span className="font-semibold">Meenakshi Rajesh</span> • ©2025 present.
                    </p>
                </div>
            </section>
        </div>
    );
}
