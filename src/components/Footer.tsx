import Link from "next/link";
import { Mail, Globe, Link as LinkIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0B1120] text-slate-400 py-8 lg:py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link href="/" className="text-xl text-white font-[family-name:var(--font-dancing-script)] mb-2">
                            Abdul Rafay Khan
                        </Link>
                        <p className="text-sm">© {new Date().getFullYear()} Abdul Rafay Khan. All rights reserved.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors border-l border-white/10 pl-6 md:pl-8">Availability Status</Link>
                    </div>

                    <div className="flex items-center gap-5">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Globe className="w-4 h-4" /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><LinkIcon className="w-4 h-4" /></a>
                        <a href="mailto:abdul.rafay@engineer-portfolio.com" className="text-slate-400 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
