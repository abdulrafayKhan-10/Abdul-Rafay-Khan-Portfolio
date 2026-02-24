"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Lightbulb, Zap, BookOpen, CheckCircle2, ShieldCheck, Box, Server, Smartphone, LayoutTemplate } from "lucide-react";
import Link from "next/link";

// ... existing projects array ...
const projects = [
    {
        title: "Nexus Marketplace",
        desc: "Enterprise-grade e-commerce platform with real-time inventory management, multi-vendor support, and Stripe integration.",
        tags: ["REACT", "NODE.JS", "AWS"],
        category: "Web App",
        role: "Lead Dev",
        boxTitle: "KEY CHALLENGE",
        boxIcon: Lightbulb,
        boxDesc: "\"Designed a custom caching layer to reduce AWS costs by 40% during peak traffic.\"",
        link1Text: "GitHub",
        link1Icon: Github,
        link2Text: "Demo",
        link2Icon: ExternalLink,
        year: "2024",
        visualStyle: "bg-slate-200"
    },
    {
        title: "Pulse Health",
        desc: "Comprehensive fitness tracking mobile app featuring offline-first sync, wearable device integration, and AI-driven coaching.",
        tags: ["REACT NATIVE", "FIREBASE"],
        category: "Mobile",
        role: "Solo Project",
        boxTitle: "KEY LESSON",
        boxIcon: BookOpen,
        boxDesc: "\"Mastered React Native Reanimated to achieve 60fps animations on low-end Android devices.\"",
        link1Text: "GitHub",
        link1Icon: Github,
        link2Text: "Live",
        link2Icon: Smartphone,
        year: "2023",
        visualStyle: "bg-teal-100/20"
    },
    {
        title: "CloudOps Monitor",
        desc: "Distributed system monitoring tool for K8s clusters with real-time log aggregation and predictive failure alerts.",
        tags: ["GO", "KUBERNETES", "VUE 3"],
        category: "Web App",
        role: "Architect",
        boxTitle: "SOLUTION",
        boxIcon: CheckCircle2,
        boxDesc: "\"Implemented eBPF probes for non-intrusive monitoring, reducing overhead by 15%.\"",
        link1Text: "GitHub",
        link1Icon: Github,
        link2Text: "App",
        link2Icon: ExternalLink,
        year: "2024",
        visualStyle: "bg-sky-100/20"
    },
    {
        title: "OpenAuth Library",
        desc: "Lightweight, highly secure authentication middleware for Node.js applications with zero dependencies and built-in PKCE support.",
        tags: ["TYPESCRIPT", "OAUTH2"],
        category: "Open Source",
        role: "Core Contributor",
        boxTitle: "IMPACT",
        boxIcon: ShieldCheck,
        boxDesc: "\"Reduced bundle size by 85% by rewriting the cryptographic utility layer.\"",
        link1Text: "Source",
        link1Icon: Box,
        link2Text: "Docs",
        link2Icon: BookOpen,
        year: "OSS",
        visualStyle: "bg-slate-900 border border-slate-800"
    },
    {
        title: "Portfolio Engine",
        desc: "A headless CMS powered portfolio template designed for performance (100 Lighthouse score) and high search engine visibility.",
        tags: ["NEXT.JS", "TAILWIND", "SANITY.IO"],
        category: "Web App",
        role: "UI Designer",
        boxTitle: "ACHIEVEMENT",
        boxIcon: Zap,
        boxDesc: "\"Optimized LCP from 2.4s to 0.8s using dynamic image generation strategies.\"",
        link1Text: "GitHub",
        link1Icon: Github,
        link2Text: "Preview",
        link2Icon: LayoutTemplate,
        year: "2024",
        visualStyle: "bg-slate-800"
    },
    {
        title: "SocialConnect API",
        desc: "High-concurrency backend API for social networking apps, supporting graph-based friend recommendations and instant messaging.",
        tags: ["FASTAPI", "POSTGRESQL", "REDIS"],
        category: "API",
        role: "Backend Lead",
        boxTitle: "PERFORMANCE",
        boxIcon: Server,
        boxDesc: "\"Scaled WebSocket connections to 50k concurrent users using Redis Pub/Sub.\"",
        link1Text: "GitHub",
        link1Icon: Github,
        link2Text: "API",
        link2Icon: Server,
        year: "2023",
        visualStyle: "bg-slate-950 border border-slate-800"
    },
];

const filters = ["All", "Web App", "Mobile", "Open Source", "API"];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [visible, setVisible] = useState(3);

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const visibleProjects = filteredProjects.slice(0, visible);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-12">
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">Portfolio</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Featured Projects
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                        A curated collection of my recent work, architecture patterns, and technical experiments across full-stack development.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {filters.map((filter, idx) => (
                        <button
                            key={filter}
                            onClick={() => {
                                setActiveFilter(filter);
                                setVisible(3);
                            }}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${activeFilter === filter
                                ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                : "bg-[#1e293b] hover:bg-slate-700 text-slate-300"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {visibleProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden flex flex-col hover:border-slate-600 transition-colors"
                        >
                            <Link href="/projects/e-commerce-rebuild" className="group">
                                {/* Visual Area Placeholder */}
                                <div className={`aspect-[4/3] w-full relative ${project.visualStyle} flex items-center justify-center p-6 overflow-hidden`}>

                                    {/* Abstract representation inside the image area */}
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

                                    <div className="absolute top-4 right-4 bg-[#0B1120] text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2 border border-blue-500/30">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                        Role: {project.role}
                                    </div>
                                </div>

                                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold tracking-wider text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                                        {project.desc}
                                    </p>

                                    <div className="bg-[#1e293b]/50 border border-slate-700/50 rounded-xl p-4 mb-6">
                                        <p className="text-[11px] font-bold text-yellow-500 mb-2 tracking-wider flex items-center gap-1.5">
                                            <project.boxIcon className="w-3.5 h-3.5" /> {project.boxTitle}
                                        </p>
                                        <p className="text-xs text-slate-300 italic">
                                            {project.boxDesc}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800 text-sm font-medium text-slate-400">
                                        <div className="flex gap-6">
                                            <span className="flex items-center gap-2 hover:text-white transition-colors">
                                                <project.link1Icon className="w-4 h-4" /> {project.link1Text}
                                            </span>
                                            <span className="flex items-center gap-2 hover:text-white transition-colors">
                                                <project.link2Icon className="w-4 h-4" /> {project.link2Text}
                                            </span>
                                        </div>
                                        <span className="text-slate-600 text-xs">{project.year}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Load More Button */}
                {visible < filteredProjects.length && (
                    <div className="flex justify-center">
                        <button
                            onClick={() => setVisible(filteredProjects.length)}
                            className="px-8 py-3 bg-transparent border border-slate-700 hover:border-blue-500 text-white font-medium rounded-xl transition-colors"
                        >
                            Load More Projects
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
