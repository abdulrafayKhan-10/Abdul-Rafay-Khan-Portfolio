"use client";

import { useState } from "react";
import { Lock, Send, LayoutDashboard, ShoppingCart, Megaphone, Database, Smartphone, HelpCircle } from "lucide-react";

const categories = [
    {
        id: "webapp",
        icon: LayoutDashboard,
        title: "Web Application",
        desc: "SaaS, Dashboard, Tool"
    },
    {
        id: "ecommerce",
        icon: ShoppingCart,
        title: "E-Commerce",
        desc: "Shopify, Custom Store"
    },
    {
        id: "marketing",
        icon: Megaphone,
        title: "Marketing Site",
        desc: "Landing Page, Portfolio"
    },
    {
        id: "api",
        icon: Database,
        title: "API / Backend",
        desc: "Database, Server Logic"
    },
    {
        id: "mobile",
        icon: Smartphone,
        title: "Mobile App",
        desc: "iOS, Android, Hybrid"
    },
    {
        id: "consulting",
        icon: HelpCircle,
        title: "Consultation",
        desc: "Audit, Code Review"
    }
];

const quickChips = [
    "+ Add Authentication",
    "+ Add Payments",
    "+ Add CMS",
    "+ Add Analytics"
];

export default function HireMe() {
    const [selectedCategory, setSelectedCategory] = useState("webapp");
    const [requirements, setRequirements] = useState("");

    const handleChipAdd = (chip: string) => {
        const cleanChip = chip.replace("+ Add ", "");
        if (!requirements.includes(cleanChip)) {
            setRequirements(prev => prev ? `${prev}, ${cleanChip}` : cleanChip);
        }
    };

    return (
        <section className="py-24 bg-[#0B1120] min-h-screen relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Let&apos;s Build Something <span className="text-blue-500">Great</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Fill out this brief to help me understand your vision. I&apos;ll review it and get back to you with a proposal within 24 hours.
                    </p>
                </div>

                {/* Progress Tabs */}
                <div className="flex border-b border-slate-800 mb-12">
                    {[
                        { label: "01. DETAILS", active: true },
                        { label: "02. SCOPE", active: false },
                        { label: "03. BUDGET", active: false },
                        { label: "04. REVIEW", active: false }
                    ].map((tab, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center">
                            <span className={`text-[10px] sm:text-xs font-bold tracking-widest mb-3 ${tab.active ? "text-blue-500" : "text-slate-600"}`}>
                                {tab.label}
                            </span>
                            <div className={`w-full h-1 ${tab.active ? "bg-blue-500" : "bg-transparent"} rounded-t-lg`}></div>
                        </div>
                    ))}
                </div>

                {/* Main Form Container */}
                <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl mb-12">

                    {/* Step 1: Category */}
                    <div className="mb-12">
                        <div className="flex gap-4 mb-8">
                            <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold shrink-0">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">What are we building?</h3>
                                <p className="text-sm text-slate-400">Select the category that best describes your project.</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`text-left p-4 rounded-2xl border transition-all ${selectedCategory === cat.id
                                            ? "bg-blue-500/10 border-blue-500 text-blue-400"
                                            : "bg-[#1e293b]/50 border-slate-800 hover:border-slate-600 hover:bg-[#1e293b]"
                                        }`}
                                >
                                    <cat.icon className={`w-6 h-6 mb-4 ${selectedCategory === cat.id ? "text-blue-500" : "text-slate-400"}`} />
                                    <h4 className="font-bold text-white mb-1 text-sm">{cat.title}</h4>
                                    <p className="text-xs text-slate-500">{cat.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-800 my-10"></div>

                    {/* Step 2: Requirements */}
                    <div className="mb-12">
                        <div className="flex gap-4 mb-8">
                            <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold shrink-0">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Functional Requirements</h3>
                                <p className="text-sm text-slate-400">Describe the core features. Be as detailed as you like.</p>
                            </div>
                        </div>

                        <div className="bg-[#1e293b]/50 border border-slate-800 rounded-2xl p-2 mb-4">
                            <textarea
                                rows={4}
                                value={requirements}
                                onChange={(e) => setRequirements(e.target.value)}
                                placeholder="E.g., User authentication, payment gateway integration via Stripe, admin dashboard for managing orders..."
                                className="w-full bg-transparent border-none focus:ring-0 text-slate-300 placeholder-slate-600 text-sm resize-none p-4"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {quickChips.map((chip, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleChipAdd(chip)}
                                    className="px-4 py-2 rounded-full border border-slate-700 bg-transparent text-xs font-semibold text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
                                >
                                    {chip}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-800 my-10"></div>

                    {/* Step 3: Budget & Timeline */}
                    <div>
                        <div className="flex gap-4 mb-8">
                            <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold shrink-0">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Timeline & Budget</h3>
                                <p className="text-sm text-slate-400">Help me understand your constraints.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-2">Estimated Budget (USD)</label>
                                <select className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 appearance-none">
                                    <option>$1,000 - $5,000</option>
                                    <option>$5,000 - $10,000</option>
                                    <option>$10,000 - $25,000</option>
                                    <option>$25,000+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-2">Target Launch</label>
                                <select className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 appearance-none">
                                    <option>Within 1 month</option>
                                    <option>1-3 months</option>
                                    <option>3-6 months</option>
                                    <option>No rush</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-10">
                            <h4 className="text-sm font-bold text-white mb-4">Your Contact Details</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Form Footer */}
                        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800 gap-6">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Lock className="w-4 h-4 text-blue-500" />
                                Your idea is 100% confidential.
                            </div>
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <button className="flex-1 sm:flex-none px-6 py-3.5 bg-transparent text-slate-300 font-medium text-sm hover:text-white transition-colors">
                                    Save Draft
                                </button>
                                <button className="flex-1 sm:flex-none px-8 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-xl transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 group">
                                    Send Brief <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm text-slate-500">
                        Prefer email? Reach me directly at <a href="mailto:rafaykhan0000@gmail.com" className="text-blue-500 hover:underline">rafaykhan0000@gmail.com</a>
                    </p>
                </div>

            </div>
        </section>
    );
}
