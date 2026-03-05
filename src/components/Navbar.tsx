"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl md:text-3xl text-white font-[family-name:var(--font-dancing-script)]">
                            Abdul Rafay Khan
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-baseline space-x-6 text-sm font-medium text-slate-300">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/hire-me"
                                className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                            >
                                Hire Me
                            </Link>
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700 shrink-0">
                                <Image src="/Abdul Rafay Khan.jpg" alt="Abdul Rafay Khan" width={40} height={40} className="w-full h-full object-cover object-top" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/5">
                    <div className="px-5 pt-2 pb-5 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-4 px-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700 shrink-0">
                                <Image src="/Abdul Rafay Khan.jpg" alt="Abdul Rafay Khan" width={40} height={40} className="w-full h-full object-cover object-top" />
                            </div>
                            <Link
                                href="/hire-me"
                                className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg font-medium block text-center flex-1 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                onClick={() => setIsOpen(false)}
                            >
                                Hire Me
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
