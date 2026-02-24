"use client";

import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#0B1120] min-h-screen relative">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">Get in Touch</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Contact Me
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Have a question, want to collaborate, or just say hi? Drop me a message below.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column - Contact Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Email</p>
                                        <a href="mailto:rafaykhan0000@gmail.com" className="text-white hover:text-blue-400 transition-colors">rafaykhan0000@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Phone</p>
                                        <a href="tel:+1234567890" className="text-white hover:text-blue-400 transition-colors">+1 (234) 567-890</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Location</p>
                                        <p className="text-white">Remote / Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-8">
                        <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl">
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="How can I help you?"
                                        className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-2">Message</label>
                                    <textarea
                                        rows={6}
                                        placeholder="Your message here..."
                                        className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    />
                                </div>

                                <button className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-xl transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 group">
                                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
