"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";
import Link from "next/link";
import HeroOrbit from "@/components/HeroOrbit";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-[#0B1120] overflow-hidden">
            {/* Very faint vertical/horizontal grid lines matching the screenshot background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none"></div>

            {/* Animated rotating ring — top-right */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -right-32 w-[500px] h-[500px] pointer-events-none"
            >
                <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="250" cy="250" r="220" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="12 8" />
                    <circle cx="250" cy="250" r="180" stroke="rgba(99,179,237,0.10)" strokeWidth="1" strokeDasharray="6 14" />
                    <circle cx="250" cy="250" r="140" stroke="rgba(59,130,246,0.08)" strokeWidth="1.5" />
                </svg>
            </motion.div>

            {/* Animated counter-rotating ring — bottom-left */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-40 -left-40 w-[480px] h-[480px] pointer-events-none"
            >
                <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="240" cy="240" r="210" stroke="rgba(59,130,246,0.10)" strokeWidth="1" strokeDasharray="8 12" />
                    <circle cx="240" cy="240" r="160" stroke="rgba(147,197,253,0.07)" strokeWidth="1" strokeDasharray="4 16" />
                </svg>
            </motion.div>

            {/* Floating glowing orb — mid-right */}
            <motion.div
                animate={{ y: [0, -24, 0], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-12 w-40 h-40 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"
            />

            {/* Spinning geometric shape — center-left accent */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-8 -translate-y-1/2 w-48 h-48 pointer-events-none opacity-20"
            >
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
                    <polygon points="100,35 165,67 165,133 100,165 35,133 35,67" stroke="#60a5fa" strokeWidth="1" fill="none" />
                    <polygon points="100,60 140,80 140,120 100,140 60,120 60,80" stroke="#93c5fd" strokeWidth="0.8" fill="none" />
                </svg>
            </motion.div>

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
                            Hi, I&apos;m <strong className="text-white font-[family-name:var(--font-dancing-script)] text-2xl font-normal tracking-wide">Abdul Rafay Khan</strong>. A passionate Software Engineer focused on building modern, scalable, and high-performance applications.
                        </p>

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

                    {/* Right Column — Interactive GSAP orbital canvas */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* subtle outer glow ring */}
                            <div className="absolute inset-0 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
                            <HeroOrbit />
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
