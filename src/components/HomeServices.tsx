"use client";

import { motion } from "framer-motion";
import { Code2, Server, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const coreServices = [
    {
        title: "Frontend Development",
        icon: Code2,
        desc: "Pixel-precise UIs built with React and Next.js — fast to load, smooth to use, and built to scale. I turn designs into production-ready interfaces that actually feel good to interact with."
    },
    {
        title: "Backend & API Engineering",
        icon: Server,
        desc: "Robust REST APIs, authentication flows, and database architecture using Node.js, ASP.NET Core, PostgreSQL, and MongoDB. Clean code, solid structure, no black boxes."
    },
    {
        title: "Product Engineering",
        icon: Layers,
        desc: "From idea to deployment — I work across the stack to ship complete products. Whether it's a SaaS app, an internal tool, or a client-facing platform, I own the full delivery."
    },
];

export default function HomeServices() {
    return (
        <section className="py-24 bg-[#0B1120] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">
                            What I Do
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Here's what I build.
                        </h3>
                    </div>
                    <Link href="/services" className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium group text-sm truncate">
                        View Detailed Services & Process
                        <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {coreServices.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative bg-[#0f172a] rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-colors overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                                <service.icon className="w-6 h-6" />
                            </div>

                            <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed text-balance">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
