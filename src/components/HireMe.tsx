"use client";

import { useState } from "react";
import { Send, Lock, LayoutDashboard, ShoppingCart, Megaphone, Database, Smartphone, Cog } from "lucide-react";

const categories = [
    { id: "webapp", icon: LayoutDashboard, title: "Web Application", desc: "SaaS, Dashboard, Tool" },
    { id: "ecommerce", icon: ShoppingCart, title: "E-Commerce", desc: "Custom Store, Shopify" },
    { id: "marketing", icon: Megaphone, title: "Marketing / Landing", desc: "Landing Page, Portfolio" },
    { id: "api", icon: Database, title: "API / Backend", desc: "Database, Server Logic" },
    { id: "mobile", icon: Smartphone, title: "Mobile App", desc: "React Native, iOS & Android" },
    { id: "automation", icon: Cog, title: "Automation Systems", desc: "Workflows, Integrations, Bots" },
];

export default function HireMe() {
    const [selected, setSelected] = useState("webapp");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const data = new FormData(form);
        try {
            const res = await fetch("https://formspree.io/f/meerjkbw", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });
            if (res.ok) {
                setStatus("success");
                form.reset();
                setSelected("webapp");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section className="py-24 bg-[#0B1120] min-h-screen relative">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">Work With Me</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
                        {"Let's Build Something"} <span className="text-blue-500">Together</span>
                    </h1>
                    <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
                        Tell me about your project and I&apos;ll get back to you within 24 hours with next steps.
                    </p>
                </div>

                {status === "success" ? (
                    <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-12 text-center shadow-2xl">
                        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                            <Send className="w-7 h-7 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Brief Received!</h3>
                        <p className="text-slate-400 mb-8 max-w-sm mx-auto">{"Thanks for reaching out. I'll review your project and get back to you within 24 hours."}</p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
                        >
                            Submit another
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl space-y-10">

                        {/* Hidden field to send selected category */}
                        <input type="hidden" name="project_type" value={selected} />

                        {/* Step 1: Project Type */}
                        <div>
                            <h2 className="text-lg font-bold text-white mb-1">What are we building?</h2>
                            <p className="text-sm text-slate-500 mb-6">Pick the category that best fits your project.</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {categories.map((cat) => (
                                    <button
                                        type="button"
                                        key={cat.id}
                                        onClick={() => setSelected(cat.id)}
                                        className={`text-left p-4 rounded-2xl border transition-all ${selected === cat.id
                                            ? "bg-blue-500/10 border-blue-500"
                                            : "bg-[#1e293b]/40 border-slate-800 hover:border-slate-600"
                                            }`}
                                    >
                                        <cat.icon className={`w-5 h-5 mb-3 ${selected === cat.id ? "text-blue-400" : "text-slate-500"}`} />
                                        <p className={`text-sm font-semibold mb-0.5 ${selected === cat.id ? "text-blue-300" : "text-white"}`}>{cat.title}</p>
                                        <p className="text-xs text-slate-500">{cat.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-slate-800"></div>

                        {/* Step 2: Your Details */}
                        <div>
                            <h2 className="text-lg font-bold text-white mb-1">Your Details</h2>
                            <p className="text-sm text-slate-500 mb-6">{"So I know who I'm talking to."}</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-2">Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-2">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-2">Phone / WhatsApp <span className="text-slate-600">(optional)</span></label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder="+1 234 567 8900"
                                        className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-2">Company / Website <span className="text-slate-600">(optional)</span></label>
                                    <input
                                        name="company"
                                        type="text"
                                        placeholder="Acme Inc. or acme.com"
                                        className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-slate-800"></div>

                        {/* Step 3: Project Info */}
                        <div>
                            <h2 className="text-lg font-bold text-white mb-1">Project Details</h2>
                            <p className="text-sm text-slate-500 mb-6">Describe what you need — the more detail, the better my proposal.</p>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-2">Project Description</label>
                                    <textarea
                                        name="description"
                                        rows={5}
                                        required
                                        placeholder="What does the project do? Who is it for? What problem does it solve?"
                                        className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-2">Budget Range</label>
                                        <select
                                            name="budget"
                                            className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        >
                                            <option value="under-1k">Under $1,000</option>
                                            <option value="1k-5k">$1,000 – $5,000</option>
                                            <option value="5k-10k">$5,000 – $10,000</option>
                                            <option value="10k-25k">$10,000 – $25,000</option>
                                            <option value="25k+">$25,000+</option>
                                            <option value="discuss">{"Let's discuss"}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-2">Timeline</label>
                                        <select
                                            name="timeline"
                                            className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        >
                                            <option value="asap">As soon as possible</option>
                                            <option value="1month">Within 1 month</option>
                                            <option value="1-3months">1–3 months</option>
                                            <option value="3-6months">3–6 months</option>
                                            <option value="flexible">{"Flexible / No rush"}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        {status === "error" && (
                            <p className="text-red-400 text-sm">{"Something went wrong. Please try again or email me at rafaykhan0000@gmail.com."}</p>
                        )}

                        <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-5">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Lock className="w-4 h-4 text-blue-500 shrink-0" />
                                Your information is 100% confidential.
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 group"
                            >
                                {status === "loading" ? "Sending..." : (
                                    <>Send Brief <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                )}
                            </button>
                        </div>

                    </form>
                )}

                <p className="text-center text-sm text-slate-600 mt-8">
                    Prefer a quick chat? Email me at{" "}
                    <a href="mailto:rafaykhan0000@gmail.com" className="text-blue-500 hover:underline">rafaykhan0000@gmail.com</a>
                </p>

            </div>
        </section>
    );
}