"use client";

import { motion } from "framer-motion";
import { Search, Code2, Rocket, Monitor, Server, Smartphone, CheckCircle2, ArrowRight } from "lucide-react";

const processSteps = [
    {
        icon: Search,
        num: "1",
        title: "Understand the Problem",
        desc: "Before writing a single line of code, I sit with the requirements. What does this product actually need to do? I map out the data, the flows, and the edge cases upfront so nothing surprises us later.",
    },
    {
        icon: Code2,
        num: "2",
        title: "Build & Iterate",
        desc: "I ship working features incrementally — not a big reveal at the end. You see real progress throughout, and feedback gets incorporated fast. Clean code, proper structure, no shortcuts.",
    },
    {
        icon: Rocket,
        num: "3",
        title: "Ship & Support",
        desc: "Production-ready deployment with testing, performance checks, and proper configuration. I don't disappear after launch — I make sure everything runs smoothly before the handoff.",
    },
];

const services = [
    {
        icon: Monitor,
        title: "Full-Stack Web Development",
        desc: "End-to-end web applications built with React / Next.js on the frontend and ASP.NET Core or Node.js on the backend. From a simple internal tool to a full product — I handle the whole stack.",
        points: [
            "React, Next.js & TypeScript frontends",
            "ASP.NET Core / Node.js backends",
            "PostgreSQL, SQL Server & MongoDB",
        ]
    },
    {
        icon: Server,
        title: "Backend & API Engineering",
        desc: "Robust RESTful APIs, secure authentication systems, and well-structured databases. Whether you need a standalone API or a full backend for your product, I build it right the first time.",
        points: [
            "REST APIs with ASP.NET Core Web API",
            "JWT, ASP.NET Identity, MFA & OAuth",
            "Database design, queries & optimisation",
        ]
    },
    {
        icon: Smartphone,
        title: "Cross-Platform Mobile Apps",
        desc: "React Native mobile applications that work on both iOS and Android — built with the same care and architecture as any production web app. Real features, real performance.",
        points: [
            "React Native (iOS & Android)",
            "API integration & offline support",
            "Auth flows, payroll & HR module experience",
        ]
    }
];

import Link from "next/link";

export default function Expertise() {
    return (
        <section id="services" className="py-24 bg-[#0a0f18] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="max-w-3xl mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        AVAILABLE FOR NEW PROJECTS
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        What I Build &<br />
                        <span className="text-blue-500">How I Work</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        I work with clients and teams to build real products — web apps, APIs, mobile apps, and Automation systems. Here&apos;s what I offer and how I approach every project I take on.
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="mb-32">
                    <h3 className="text-2xl font-bold text-white mb-4">My Process</h3>
                    <p className="text-slate-400 mb-12 max-w-2xl">
                        No fluff, no endless back-and-forth. Here&apos;s what working with me actually looks like from first conversation to deployment.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-px bg-slate-800 -z-10"></div>

                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-slate-700 flex items-center justify-center mb-6 shadow-xl relative isolate">
                                    <step.icon className="w-6 h-6 text-blue-400" />
                                    <div className="absolute -top-3 -right-3 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-[#0a0f18]">
                                        {step.num}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Core Services */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Core Services</h3>
                    <p className="text-slate-400 mb-12 max-w-2xl">
                        These are the three areas I spend most of my time in. If your project falls into any of these, we&apos;re probably a good fit.
                    </p>
                    <div className="grid lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#0f172a] border border-slate-800 rounded-3xl p-8 hover:bg-[#1e293b]/50 hover:border-slate-700 transition-all duration-300 flex flex-col"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                                    <service.icon className="w-7 h-7 text-blue-400" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                                <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">
                                    {service.desc}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="w-full py-3 px-4 bg-transparent border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                                    Request a Quote <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
