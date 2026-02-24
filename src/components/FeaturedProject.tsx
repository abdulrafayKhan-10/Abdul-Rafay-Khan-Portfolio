"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Code, LayoutDashboard, ExternalLink, Github, Zap, Lightbulb, User } from "lucide-react";
import Link from "next/link";

export default function FeaturedProject() {
    return (
        <section className="bg-[#0B1120] relative border-t border-white/5 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 pt-6">
                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <span>&gt;</span>
                    <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
                    <span>&gt;</span>
                    <span className="text-slate-300">E-Commerce Rebuild</span>
                </div>

                {/* Project Hero Banner */}
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[21/9] mb-16 flex items-end p-8 md:p-12 lg:p-16">
                    <div className="absolute inset-0 top-0 bg-gradient-to-br from-slate-800 to-slate-900/40"></div>

                    {/* Abstract Image representation inside banner */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="w-[80%] h-[120%] bg-[#f8fafc] rounded-t-xl transform rotate-12 translate-y-20 border-8 border-slate-700 shadow-2xl relative overflow-hidden">
                            <div className="w-full h-8 bg-slate-200 border-b border-slate-300 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                            </div>
                            <div className="p-8 flex gap-8">
                                <div className="w-1/4 h-full bg-slate-100 rounded-lg"></div>
                                <div className="flex-1 space-y-4 pt-4">
                                    <div className="w-3/4 h-8 bg-slate-200 rounded-lg"></div>
                                    <div className="w-1/2 h-4 bg-slate-200 rounded"></div>
                                    <div className="w-full h-32 bg-slate-200/50 rounded-lg mt-8"></div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1120] opacity-80 backdrop-blur-[2px]"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Scaling Modern Commerce
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                            A deep dive into building a high-performance headless commerce solution for global brands.
                        </p>
                    </div>
                </div>

                {/* Project Content */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* The Problem */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                    <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-red-500"></div>
                                </div>
                                The Problem
                            </h3>
                            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    The client&apos;s existing legacy platform was struggling with extreme latency during peak traffic periods, leading to a 40% cart abandonment rate. The monolithic architecture made it nearly impossible to implement new features without risking site-wide stability.
                                </p>
                                <p>
                                    Key challenges included slow page load times exceeding 5 seconds, an inflexible checkout flow, and poor mobile responsiveness that alienated 50% of their user base.
                                </p>
                            </div>
                        </motion.div>

                        {/* The Solution */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <div className="w-4 h-6 rounded-t-full bg-blue-500 relative">
                                        <div className="absolute -bottom-2 -left-1 w-6 h-2 bg-blue-500 rounded-sm"></div>
                                    </div>
                                </div>
                                The Solution
                            </h3>
                            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    We architected a headless commerce solution using Next.js for the frontend and a microservices-based backend. By decoupling the presentation layer from the business logic, we were able to optimize performance at every level.
                                </p>
                                <ul className="space-y-3 pl-2">
                                    <li className="flex gap-3 text-slate-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                                        Implemented server-side rendering (SSR) for lightning-fast initial loads.
                                    </li>
                                    <li className="flex gap-3 text-slate-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                                        Developed a custom GraphQL API to consolidate disparate data sources.
                                    </li>
                                    <li className="flex gap-3 text-slate-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                                        Integrated a global CDN strategy for static assets and image optimization.
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                    <Box className="w-5 h-5 text-green-500" />
                                </div>
                                Results
                            </h3>

                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                <div className="bg-[#1e293b]/50 border border-slate-700/50 rounded-2xl p-6">
                                    <h4 className="text-4xl font-bold text-blue-500 mb-2">85%</h4>
                                    <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Faster Loading</p>
                                </div>
                                <div className="bg-[#1e293b]/50 border border-slate-700/50 rounded-2xl p-6">
                                    <h4 className="text-4xl font-bold text-blue-500 mb-2">22%</h4>
                                    <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Conv. Increase</p>
                                </div>
                                <div className="bg-[#1e293b]/50 border border-slate-700/50 rounded-2xl p-6">
                                    <h4 className="text-4xl font-bold text-blue-500 mb-2">0</h4>
                                    <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Downtime Incidents</p>
                                </div>
                            </div>

                            <p className="text-slate-400 text-lg leading-relaxed">
                                The new platform successfully handled the Black Friday surge with 150,000 concurrent users, maintaining sub-second response times and achieving record-breaking sales volume for the company.
                            </p>
                        </motion.div>

                        {/* Personal Reflection block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#0f172a] border border-blue-500/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <div className="w-40 h-40 border-[20px] border-blue-500 rounded-full blur-[20px]"></div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                                <Lightbulb className="w-6 h-6 text-yellow-500 fill-yellow-500/20" />
                                Personal Reflection
                            </h3>

                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h4 className="flex items-center gap-2 text-blue-400 font-bold mb-3">
                                        <Zap className="w-4 h-4 fill-blue-400" /> Why This Project Mattered
                                    </h4>
                                    <p className="text-slate-300 italic leading-relaxed">
                                        &quot;This project was a turning point for me professionally. The biggest hurdle wasn&apos;t just the code, but coordinating the migration of 50,000+ products without downtime. I had to write custom scripts to validate data integrity in real-time, which was nerve-wracking but incredibly rewarding.&quot;
                                    </p>
                                </div>

                                <div>
                                    <h4 className="flex items-center gap-2 text-blue-400 font-bold mb-3">
                                        <Zap className="w-4 h-4 fill-blue-400" /> Technical Breakthrough
                                    </h4>
                                    <p className="text-slate-300 italic leading-relaxed">
                                        &quot;Solving the N+1 query problem in our GraphQL layer taught me deeply about backend optimization. It wasn&apos;t just about making it work; it was about making it scalable for years to come.&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-800 flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center overflow-hidden">
                                    <User className="w-6 h-6 text-slate-400" />
                                </div>
                                <div>
                                    <p className="font-[family-name:var(--font-dancing-script)] text-xl text-white">Abdul Rafay Khan</p>
                                    <p className="text-xs text-slate-500 font-medium tracking-wider">SOFTWARE ENGINEER</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project Gallery Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <LayoutDashboard className="w-6 h-6 text-blue-500" /> Project Gallery
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#1e293b] rounded-2xl aspect-[4/3] border border-slate-800 flex items-center justify-center">
                                    <div className="w-2/3 h-1/2 bg-slate-900 rounded-lg shadow-xl border border-slate-800 p-2">
                                        <div className="w-1/2 h-2 bg-slate-800 rounded mb-2"></div>
                                        <div className="w-full h-2 bg-slate-800 rounded"></div>
                                    </div>
                                </div>
                                <div className="bg-[#1e293b] rounded-2xl aspect-[4/3] border border-slate-800 flex items-center justify-center p-8">
                                    <div className="w-1/2 h-full bg-slate-900 rounded-lg shadow-xl border border-slate-800 relative">
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                                    </div>
                                </div>
                                <div className="col-span-2 bg-[#f8fafc] rounded-2xl aspect-[21/9] border border-slate-800 flex flex-col justify-center items-center text-center p-8">
                                    <h4 className="text-3xl font-serif text-slate-800 mb-4">Minimal Product Page</h4>
                                    <div className="w-24 h-1 bg-slate-200 mb-8 mx-auto"></div>
                                    <p className="text-slate-500 text-sm max-w-sm">Clean minimalist aesthetics built for maximum conversion and brand storytelling.</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-28 space-y-8">

                            {/* Technical Stack */}
                            <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-bl-full blur-[40px] pointer-events-none"></div>

                                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                                    <Code className="w-5 h-5 text-blue-500" /> Technical Stack
                                </h3>

                                <div className="space-y-8 relative z-10">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1.5 h-4 bg-blue-500 rounded-r-sm"></div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Frontend Core</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {["Next.js 14", "Tailwind CSS", "TypeScript", "Framer Motion"].map(tech => (
                                                <span key={tech} className="px-3 py-1.5 bg-[#1e293b] border border-slate-700 rounded-lg text-sm text-slate-300 font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1.5 h-4 bg-green-500 rounded-r-sm"></div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Backend Systems</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {["Node.js", "PostgreSQL", "Redis", "GraphQL"].map(tech => (
                                                <span key={tech} className="px-3 py-1.5 bg-[#1e293b] border border-slate-700 rounded-lg text-sm text-slate-300 font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1.5 h-4 bg-yellow-500 rounded-r-sm"></div>
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">DevOps & Cloud</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {["AWS", "Docker", "Vercel"].map(tech => (
                                                <span key={tech} className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-sm text-yellow-400 font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Links */}
                            <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-8">
                                <h3 className="text-lg font-bold text-white mb-6">Project Links</h3>
                                <div className="space-y-3">
                                    <a href="#" className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                                        <ExternalLink className="w-4 h-4" /> View Live Site
                                    </a>
                                    <a href="#" className="w-full flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-slate-700 text-white font-medium py-3.5 px-4 border border-slate-700 rounded-xl transition-colors">
                                        <Github className="w-4 h-4" /> Source Code
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* View Next Project Callout */}
                <div className="mt-32 pt-16 border-t border-slate-800 text-center">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">View Next Project</p>
                    <a href="#" className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold text-white hover:text-blue-400 transition-colors group">
                        AI Content Engine <ArrowRight className="w-8 h-8 md:w-10 md:h-10 transform group-hover:translate-x-2 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
}
