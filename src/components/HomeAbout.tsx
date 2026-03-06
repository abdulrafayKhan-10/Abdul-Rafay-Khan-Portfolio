"use client";

import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomeAbout() {
    return (
        <section className="py-24 bg-[#0a0f18] border-t border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-square max-w-md mx-auto"
                        >
                            {/* Profile Image Container */}
                            <div className="absolute inset-4 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-700/50 shadow-2xl overflow-hidden bg-slate-800 group transform -rotate-3 hover:rotate-0 transition-all duration-500">
                                {/* NOTE: Replace this src with your actual image path in the public folder */}
                                <Image
                                    src="/Abdul Rafay Khan.jpg"
                                    alt="Abdul Rafay Khan"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 lg:-right-12 bg-slate-900 border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-xl"
                            >
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                                    <User className="w-5 h-5 text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Software</p>
                                    <p className="text-blue-400 text-xs font-medium tracking-widest uppercase">Engineer</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Text Side */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">
                                About Me
                            </h2>
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Full-stack engineer. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Product-minded builder.</span>
                            </h3>
                            <p className="text-lg text-slate-400 leading-relaxed mb-4">
                                I&apos;m <span className="font-[family-name:var(--font-dancing-script)] text-2xl text-white font-normal tracking-wide">Abdul Rafay Khan</span> — a Software Engineer with hands-on experience building e-commerce platforms, SaaS products, and enterprise HR systems using .NET and React.
                            </p>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                I enjoy working across the full stack — from building clean, responsive UIs to structuring APIs and databases that hold up well in production.
                            </p>

                            <div className="flex items-center gap-6">
                                <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e293b] hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 text-white font-medium rounded-xl transition-all group">
                                    My Full Journey
                                    <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
