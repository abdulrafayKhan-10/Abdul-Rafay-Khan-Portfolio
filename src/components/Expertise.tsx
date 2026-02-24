"use client";

import { motion } from "framer-motion";
import { Search, Code2, Rocket, Monitor, Cloud, Figma, CheckCircle2, ArrowRight } from "lucide-react";

const processSteps = [
    {
        icon: Search,
        num: "1",
        title: "Discovery & Strategy",
        desc: "We start by defining clear goals. I analyze your requirements, tech stack needs, and business objectives to create a roadmap that minimizes risk and maximizes value.",
    },
    {
        icon: Code2,
        num: "2",
        title: "Development & Iteration",
        desc: "I build your solution using modern best practices. Regular sprint demos and code reviews ensure you're always in the loop, allowing for feedback and quick adjustments.",
    },
    {
        icon: Rocket,
        num: "3",
        title: "Deployment & Handoff",
        desc: "Final testing, performance optimization, and seamless deployment to your cloud environment. I provide documentation and training to ensure a smooth handover.",
    },
];

const services = [
    {
        icon: Monitor,
        title: "Full-Stack Development",
        desc: "Custom web applications built with modern frameworks like React and Node.js. High-performance and accessibility-focused solutions tailored by Abdul.",
        points: [
            "API Integration & Microservices",
            "Database Design & Optimization",
            "Responsive UI/UX implementation"
        ]
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        desc: "Scalable, secure, and cost-effective AWS/Azure cloud architecture setup. Modern DevOps practices for fast delivery.",
        points: [
            "CI/CD Pipeline Automation",
            "Serverless & Docker Containers",
            "Infrastructure as Code (Terraform)"
        ]
    },
    {
        icon: Figma,
        title: "UI/UX Design",
        desc: "Intuitive user interfaces and seamless user experiences for digital products. Research-driven design systems crafted by Abdul.",
        points: [
            "User Research & Personas",
            "Interactive Prototyping",
            "Atomic Design Systems"
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
                        Working with Me: <br />
                        <span className="text-blue-500">Process & Services</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        I partner with companies to build scalable digital products. My approach combines technical expertise with a transparent, collaborative process to deliver results that matter.
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="mb-32">
                    <h3 className="text-2xl font-bold text-white mb-4">My Process</h3>
                    <p className="text-slate-400 mb-12 max-w-2xl">
                        A structured approach ensures we stay aligned and deliver on time. Here is how I handle freelance projects from start to finish.
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
                    <h3 className="text-2xl font-bold text-white mb-12">Core Services</h3>
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
