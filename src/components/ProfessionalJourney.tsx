"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Zap, BookOpen, MountainSnow, Gamepad2, PenTool, Terminal } from "lucide-react";

export default function ProfessionalJourney() {
    const experiences = [
        {
            role: "Senior Software Engineer",
            company: "TechCorp Solutions",
            date: "Jan 2021 — Present",
            description: `"Leading the charge on modernizing our tech stack. I spearheaded the transition from a monolithic architecture to microservices, enabling us to ship features daily instead of weekly."`,
            impact: "Increased deployment frequency by 300% and reduced manual testing overhead by 40%, directly accelerating the company's time-to-market for new enterprise features.",
            points: [
                "Architected and migrated legacy monolith to AWS microservices.",
                "Led a team of 6 engineers in developing a real-time analytics dashboard.",
                "Mentored junior developers and established code review standards.",
            ]
        },
        {
            role: "Full Stack Developer",
            company: "WebStudio Agency",
            date: "Mar 2018 — Dec 2020",
            description: `"My time at WebStudio was defined by variety and velocity. I built high-performance e-commerce platforms for diverse clients, mastering the art of balancing custom functionality with core web vitals."`,
            impact: "Consistently achieved 95+ Lighthouse scores for client builds, resulting in a measurable 15% increase in conversion rates for our top 3 retail clients.",
            points: [
                "Developed custom e-commerce solutions using Next.js and Shopify API.",
                "Optimized frontend performance for core web vitals.",
                "Integrated multiple third-party payment gateways and shipping providers.",
            ]
        },
        {
            role: "Junior Developer",
            company: "AppWorks Inc.",
            date: "Jun 2016 — Feb 2018",
            description: `"Where it all started. I cut my teeth on mobile development and backend maintenance, learning the importance of clean code and user-centric design in a fast-paced startup environment."`,
            impact: "Played a pivotal role in launching the company's first cross-platform mobile app, which gained 50k users in its first month.",
            points: [
                "Collaborated on building a cross-platform mobile app using React Native.",
                "Maintained and fixed bugs in existing Ruby on Rails applications.",
                "Assisted in UI/UX design and prototyping using Figma.",
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-[#0B1120] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Journey</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Over 8 years of crafting digital experiences. From my first line of code to leading engineering teams, here is the story of how <span className="font-[family-name:var(--font-dancing-script)] text-xl text-white">Abdul Rafay Khan</span> builds scalable web applications and high-performance frontend systems.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#1e293b] hover:bg-slate-700 border border-slate-700 text-white rounded-lg transition-colors font-medium whitespace-nowrap">
                        <Download className="w-4 h-4" /> Download CV
                    </button>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Timeline - Left Column */}
                    <div className="lg:col-span-8">
                        <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3">
                            <Briefcase className="w-5 h-5 text-blue-500" /> Experience & Milestones
                        </h3>

                        <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-16 pb-16">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="relative pl-8 md:pl-12"
                                >
                                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-[#0B1120]"></div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                        <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                                        <span className="inline-flex items-center px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs font-medium text-slate-300 whitespace-nowrap">
                                            {exp.date}
                                        </span>
                                    </div>
                                    <p className="text-blue-400 font-medium mb-6 text-lg">{exp.company}</p>

                                    <div className="bg-[#0f172a]/50 border-l-2 border-blue-500/50 pl-4 py-1 mb-8">
                                        <p className="text-slate-300 italic">&quot;{exp.description}&quot;</p>
                                    </div>

                                    <div className="bg-[#1e293b]/30 border border-slate-800 rounded-xl p-5 mb-6">
                                        <p className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-yellow-500" /> Key Impact
                                        </p>
                                        <p className="text-sm text-slate-400 leading-relaxed">{exp.impact}</p>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300 relative before:content-[''] before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full before:absolute before:left-[-1.5rem] before:top-1.5">
                                                <span className="pl-2">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}

                            {/* Education Node */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="relative pl-8 md:pl-12 mt-16"
                            >
                                <div className="absolute -left-2.5 top-0.5 w-5 h-5 bg-[#0B1120] text-blue-500 flex items-center justify-center">
                                    <GraduationCap className="w-4 h-4" />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                                    <h4 className="text-xl font-bold text-white">B.Sc. Computer Science</h4>
                                    <span className="inline-flex items-center px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs font-medium text-slate-300 whitespace-nowrap">
                                        2012 — 2016
                                    </span>
                                </div>
                                <p className="text-blue-400 font-medium text-base">University of Technology</p>
                            </motion.div>
                        </div>

                        <button className="md:hidden mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#1e293b] hover:bg-slate-700 border border-slate-700 text-white rounded-lg transition-colors font-medium">
                            <Download className="w-4 h-4" /> Download CV
                        </button>
                    </div>

                    {/* Sidebar - Right Column */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Technical Expertise */}
                        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 lg:p-8">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                                <Terminal className="w-5 h-5 text-blue-500" /> Technical Expertise
                            </h3>

                            <div className="mb-8">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">Languages & Core</p>
                                <div className="space-y-4">
                                    {[{ name: "TypeScript / JavaScript", val: "95%" }, { name: "Go / Rust", val: "75%" }, { name: "Python", val: "85%" }].map(lang => (
                                        <div key={lang.name}>
                                            <div className="flex justify-between text-sm mb-1.5">
                                                <span className="text-slate-300 font-medium">{lang.name}</span>
                                                <span className="text-slate-400">{lang.val}</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 rounded-full" style={{ width: lang.val }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">Frameworks & Libs</p>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Next.js", "Node.js", "Express", "TailwindCSS", "Redux", "GraphQL", "Prisma"].map(tool => (
                                        <span key={tool} className="px-3 py-1 border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-md">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">DevOps & Tools</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Docker", "AWS (EC2, S3, Lambda)", "GitHub Actions", "PostgreSQL", "Redis", "Terraform"].map(tool => (
                                        <span key={tool} className="px-3 py-1 border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-md">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Side Pursuits */}
                        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 lg:p-8">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                                <BookOpen className="w-5 h-5 text-blue-500" /> Side Pursuits & Interests
                            </h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                        <MountainSnow className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">Outdoor Exploration</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">Avid hiker and photographer, capturing landscapes on weekends.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#1e293b] border border-slate-600 flex items-center justify-center relative shadow-[0_0_10px_rgba(255,255,255,0.1)] shrink-0">
                                        <PenTool className="w-5 h-5 text-white" />
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">Tech Blogging</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">Writing weekly articles on Dev.to about system design.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                        <Gamepad2 className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">Indie Game Dev</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">Building pixel art platformers in Godot Engine for fun.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Available Widget */}
                        <div className="bg-blue-500 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-400 rounded-full opacity-50 blur-xl"></div>
                            <h3 className="text-xl font-bold text-white mb-3 relative z-10">Available for projects</h3>
                            <p className="text-blue-100 text-sm mb-6 relative z-10">
                                Looking for a specialized developer for your next big idea? Let&apos;s connect and discuss your requirements.
                            </p>
                            <button className="w-full bg-white text-blue-600 font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all relative z-10">
                                Book a Consultation
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
