"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
    {
        title: "Nexus Marketplace",
        desc: "Enterprise-grade e-commerce platform with real-time inventory management, multi-vendor support, and Stripe integration.",
        tags: ["REACT", "NODE.JS", "AWS"],
        visualStyle: "bg-slate-200"
    },
    {
        title: "CloudOps Monitor",
        desc: "Distributed system monitoring tool for K8s clusters with real-time log aggregation and predictive failure alerts.",
        tags: ["GO", "KUBERNETES", "VUE 3"],
        visualStyle: "bg-sky-100/20"
    },
    {
        title: "Pulse Health",
        desc: "Comprehensive fitness tracking mobile app featuring offline-first sync, wearable device integration, and AI-driven coaching.",
        tags: ["REACT NATIVE", "FIREBASE"],
        visualStyle: "bg-teal-100/20"
    }
];

export default function HomeProjects() {
    return (
        <section className="py-24 bg-[#0a0f18] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">
                            Selected Work
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Featured Projects.
                        </h3>
                    </div>
                    <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e293b] hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 text-white font-medium rounded-xl transition-all group">
                        Explore All Projects
                        <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group bg-[#0f172a] rounded-3xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-colors flex flex-col"
                        >
                            <Link href="/projects/e-commerce-rebuild" className="flex flex-col h-full">
                                {/* Visual Placeholder */}
                                <div className={`aspect-video w-full relative ${project.visualStyle} flex items-center justify-center p-6 overflow-hidden`}>
                                    <div className="w-[80%] h-full bg-slate-100 rounded-t-lg shadow-2xl border border-slate-300 mt-10 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="w-full h-6 bg-slate-200 flex items-center px-2 gap-1.5 border-b border-slate-300">
                                            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                                        </div>
                                        <div className="p-4 flex flex-col gap-3">
                                            <div className="w-1/3 h-2 bg-slate-300 rounded"></div>
                                            <div className="flex gap-2">
                                                <div className="w-full h-16 bg-blue-100 rounded border border-blue-200"></div>
                                                <div className="w-full h-16 bg-slate-200 rounded"></div>
                                                <div className="w-full h-16 bg-slate-200 rounded"></div>
                                            </div>
                                            <div className="w-full h-12 bg-slate-200 rounded"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold tracking-wider text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                                        {project.desc}
                                    </p>

                                    <div className="flex items-center gap-6 mt-auto pt-4 border-t border-slate-800 text-sm font-medium text-slate-400">
                                        <span className="flex items-center gap-2 hover:text-white transition-colors">
                                            <Github className="w-4 h-4" /> Source code
                                        </span>
                                        <span className="flex items-center gap-2 hover:text-white transition-colors">
                                            <ExternalLink className="w-4 h-4" /> Live preview
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
