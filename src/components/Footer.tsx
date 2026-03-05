import Link from "next/link";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

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

const footerSocials = [
    { name: "GitHub", href: "https://github.com/abdulrafayKhan-10", Icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/abdul-rafay-khan--", Icon: Linkedin },
    { name: "X", href: "https://x.com/A_RafayKhanDev", Icon: XIcon },
    { name: "Instagram", href: "https://www.instagram.com/abdulrafaykhan_dev", Icon: Instagram },
    { name: "Dev.to", href: "https://dev.to/abdulrafaykhan_dev", Icon: DevToIcon },
    { name: "Medium", href: "https://abdulrafaykhan-dev.medium.com/", Icon: MediumIcon },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0B1120] text-slate-400 py-8 lg:py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link href="/" className="text-xl text-white font-[family-name:var(--font-dancing-script)] mb-2">
                            Abdul Rafay Khan
                        </Link>
                        <p className="text-sm">{"© "}{new Date().getFullYear()}{" Abdul Rafay Khan. All rights reserved."}</p>
                    </div>

                    <div className="flex items-center gap-5">
                        {footerSocials.map(({ name, href, Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={name}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <Icon />
                            </a>
                        ))}
                        <a href="mailto:rafaykhan0000@gmail.com" title="Email" className="text-slate-400 hover:text-white transition-colors">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}