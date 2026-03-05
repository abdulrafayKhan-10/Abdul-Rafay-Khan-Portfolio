"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram, Facebook } from "lucide-react";

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const DevToIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M7.42 10.57c-.23-.23-.56-.24-.79-.02l-.41.42v1.26h.83l.37-.37a.54.54 0 000-.77v-.02zM0 4.5v15h24v-15H0zm5.98 11.48H3.35V8.01h2.63v7.97zm5.7-3.37H9.06v1.78h1.5v1.59H7.47V8.01h3.09v1.59H9.06v1.78h2.62v1.73zm5.32 2.1c-.41.82-1.11 1.28-1.98 1.28h-2.4V8.01h2.4c.87 0 1.57.46 1.98 1.28.19.39.25.67.25 2.2s-.06 1.81-.25 2.2zm-1.77-4.02c-.09-.29-.31-.38-.62-.38h-.44v3.78h.44c.31 0 .53-.09.62-.38.08-.26.11-.64.11-1.51s-.03-1.24-.11-1.51z" />
    </svg>
);

const MediumIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
);

const HashnodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 00-7.962 0l-6.37 6.37a5.63 5.63 0 000 7.962l6.37 6.37a5.63 5.63 0 007.962 0l6.37-6.37a5.63 5.63 0 000-7.962zM12 15.953a3.953 3.953 0 110-7.906 3.953 3.953 0 010 7.906z" />
    </svg>
);

const DailyDevIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M5 4h7a6 6 0 010 12H5V4zm2 2v8h5a4 4 0 000-8H7z" />
    </svg>
);

const socials = [
    { name: "GitHub", href: "https://github.com/abdulrafayKhan-10", Icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/abdul-rafay-khan--", Icon: Linkedin },
    { name: "X", href: "https://x.com/A_RafayKhanDev", Icon: XIcon },
    { name: "Instagram", href: "https://www.instagram.com/abdulrafaykhan_dev", Icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61564267217879", Icon: Facebook },
    { name: "Dev.to", href: "https://dev.to/abdulrafaykhan_dev", Icon: DevToIcon },
    { name: "Medium", href: "https://abdulrafaykhan-dev.medium.com/", Icon: MediumIcon },
    { name: "Hashnode", href: "https://hashnode.com/@abdulrafaykhan", Icon: HashnodeIcon },
    { name: "daily.dev", href: "https://app.daily.dev/abdulrafaykhandev", Icon: DailyDevIcon },
];

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const data = new FormData(form);
        try {
            const res = await fetch("https://formspree.io/f/mojkawzo", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });
            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

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
                        {"Have a project in mind or want to collaborate? Drop me a message — I usually respond within 24 hours."}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column - Contact Info + Socials */}
                    <div className="lg:col-span-4">
                        <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Email</p>
                                        <a href="mailto:rafaykhan0000@gmail.com" className="text-white hover:text-blue-400 transition-colors text-sm break-all">rafaykhan0000@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Phone</p>
                                        <a href="tel:+923012256139" className="text-white hover:text-blue-400 transition-colors text-sm">+92 301 2256139</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Location</p>
                                        <p className="text-white text-sm">Karachi, Pakistan</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-slate-800 pt-8">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-5">Find me on</p>
                                <div className="grid grid-cols-3 gap-3">
                                    {socials.map(({ name, href, Icon }) => (
                                        <a
                                            key={name}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={name}
                                            className="flex flex-col items-center gap-2 p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 text-slate-400 transition-all"
                                        >
                                            <Icon />
                                            <span className="text-[10px] font-medium leading-none text-center">{name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-8">
                        <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl">
                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                                        <Send className="w-7 h-7 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                                    <p className="text-slate-400 mb-8">{"Thanks for reaching out. I'll get back to you within 24 hours."}</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
                                    >
                                        Send another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-medium text-slate-400 mb-2">Full Name</label>
                                            <input
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-slate-400 mb-2">Email Address</label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-2">Subject</label>
                                        <input
                                            name="subject"
                                            type="text"
                                            required
                                            placeholder="What's this about?"
                                            className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            rows={6}
                                            required
                                            placeholder="Tell me about your project or just say hi..."
                                            className="w-full bg-[#1e293b]/50 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                        />
                                    </div>

                                    {status === "error" && (
                                        <p className="text-red-400 text-sm">{"Something went wrong. Please try again or email me directly at rafaykhan0000@gmail.com."}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 group"
                                    >
                                        {status === "loading" ? "Sending..." : (
                                            <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}