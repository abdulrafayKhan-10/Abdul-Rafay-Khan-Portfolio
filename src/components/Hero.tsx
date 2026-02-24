"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const techStack = [
    "React", "TypeScript", "Node.js", "Next.js", "AWS", "Tailwind", "GraphQL", "PostgreSQL"
];

export default function Hero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-[#0B1120] overflow-hidden">
            {/* Very faint vertical/horizontal grid lines matching the screenshot background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                            Building digital <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                                experiences.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                            Hi, I&apos;m <strong className="text-white font-[family-name:var(--font-dancing-script)] text-2xl font-normal tracking-wide">Abdul Rafay Khan</strong>. A passionate Full-Stack Engineer focused on building modern, scalable, and high-performance applications.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mb-10">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Link
                                href="/hire-me"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center gap-2"
                            >
                                Start a Project <Terminal className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/projects"
                                className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-bold rounded-xl transition-colors flex items-center gap-2"
                            >
                                View Work <ArrowDown className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column - Image (Simple layout) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-square w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] rotate-6 transform"></div>
                            <div className="absolute inset-0 bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-700">
                                {/* Replace with your actual hero image */}
                                <Image
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
                                    alt="Coding hero"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
