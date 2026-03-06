"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Zap, BookOpen, Coffee, Code2, Video, Terminal } from "lucide-react";

export default function ProfessionalJourney() {
    const experiences = [
        {
            role: "Full Stack Developer",
            company: "World of Tech",
            location: "Remote — Pakistan",
            date: "Mar 2023 — Present",
            description: `"Building full-stack features for real e-commerce and SaaS platforms — owning both the React/React Native frontend and the ASP.NET Core backend on every feature."`,
            impact: "Delivered product catalogs, subscription flows, order management, and client dashboards across e-commerce and SaaS platforms, with measurably faster SQL Server response times after query and schema optimisation.",
            points: [
                "Built full-stack features for e-commerce and SaaS platforms — product catalogs, subscription flows, order management, and client dashboards using React, React Native, and ASP.NET Core.",
                "Designed RESTful APIs powering web and mobile experiences built in React and React Native, focusing on performance and data consistency.",
                "Implemented role-based access control using ASP.NET Identity, JWT, and custom middleware for vendor and admin portals.",
                "Optimized SQL Server queries and schemas, reducing response times across high-traffic endpoints.",
            ]
        },
        {
            role: "Jr. .NET Developer",
            company: "MaxHR (PlanZ)",
            location: "Remote — Dubai",
            date: "Nov 2024 — Jun 2025",
            description: `"A fast-moving product team shipping payroll, HR, and compliance features for enterprise clients across the Gulf — built on ASP.NET Core APIs."`,
            impact: "Shipped 10+ modules across HR and Payroll workflows, strengthened platform-wide security with MFA and QR auth, and integrated AWS S3 and NATS for scalable file storage and microservice messaging.",
            points: [
                "Developed Training, Inventory, Loan, Assets, and Support Ticket modules end-to-end across HR and Payroll workflows using ASP.NET Core.",
                "Implemented MFA and QR-based authentication, strengthening platform-wide security across all user roles.",
                "Delivered SIF Payroll Gratuity Report, Payslip modifications, Auth Dashboard APIs, Trade License, and Invite modules.",
                "Built a User-Status Cron Job for auto-checkout; integrated AWS S3 for file storage and NATS as a message broker across microservices.",
            ]
        },
        {
            role: ".NET Developer Intern",
            company: "Next Logics",
            location: "Onsite — Karachi",
            date: "Sep 2024 — Oct 2024",
            description: `"My formal introduction to production .NET systems — contributing to real internal tools from day one."`,
            impact: "Gained hands-on professional experience in backend API development and database integration within an onsite team environment.",
            points: [
                "Contributed to internal projects using ASP.NET MVC and Web Forms; gained hands-on experience in backend API development and database integration.",
            ]
        },
    ];

    return (
        <section id="experience" className="py-24 bg-[#0B1120] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Journey</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            From writing first lines of code to shipping production-grade systems — <span className="font-[family-name:var(--font-dancing-script)] text-xl text-white">Abdul Rafay Khan</span> has built full-stack platforms across e-commerce, SaaS, HR, and payroll — owning both the frontend and backend, across the .NET ecosystem, React, and cloud infrastructure.
                        </p>
                    </div>
                    <a
                        href="/Abdul Rafay Khan - Resume.pdf"
                        download
                        className="hidden md:flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 border border-blue-500 text-white rounded-lg transition-colors font-medium whitespace-nowrap"
                    >
                        <Download className="w-4 h-4" /> Download CV
                    </a>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Timeline - Left Column */}
                    <div className="lg:col-span-8">
                        <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3">
                            <Briefcase className="w-5 h-5 text-blue-500" /> Experience & Milestones
                        </h3>

                        <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-16 pb-16">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="relative pl-8 md:pl-12"
                                >
                                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-[#0B1120]"></div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                        <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                                        <span className="inline-flex items-center px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs font-medium text-slate-300 whitespace-nowrap">
                                            {exp.date}
                                        </span>
                                    </div>
                                    <p className="text-blue-400 font-medium mb-1 text-lg">{exp.company}</p>
                                    <p className="text-slate-500 text-sm mb-6">{exp.location}</p>

                                    <div className="bg-[#0f172a]/50 border-l-2 border-blue-500/50 pl-4 py-1 mb-8">
                                        <p className="text-slate-300 italic">{exp.description}</p>
                                    </div>

                                    <div className="bg-[#1e293b]/30 border border-slate-800 rounded-xl p-5 mb-6">
                                        <p className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-yellow-500" /> Key Impact
                                        </p>
                                        <p className="text-sm text-slate-400 leading-relaxed">{exp.impact}</p>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300 relative before:content-[''] before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full before:absolute before:left-[-1.5rem] before:top-1.5">
                                                <span className="pl-2">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}

                            {/* Education Node */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="relative pl-8 md:pl-12 mt-16"
                            >
                                <div className="absolute -left-2.5 top-0.5 w-5 h-5 bg-[#0B1120] text-blue-500 flex items-center justify-center">
                                    <GraduationCap className="w-4 h-4" />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                                    <h4 className="text-xl font-bold text-white">B.Sc. Software Engineering</h4>
                                    <span className="inline-flex items-center px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs font-medium text-slate-300 whitespace-nowrap">
                                        Expected 2027
                                    </span>
                                </div>
                                <p className="text-blue-400 font-medium text-base">University of Karachi</p>
                                <p className="text-slate-500 text-sm mt-1">Karachi, Pakistan</p>

                                <div className="mt-8">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                                        <h4 className="text-xl font-bold text-white">Diploma in Software Engineering</h4>
                                        <span className="inline-flex items-center px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs font-medium text-slate-300 whitespace-nowrap">
                                            Completed — Grade A
                                        </span>
                                    </div>
                                    <p className="text-blue-400 font-medium text-base">Aptech</p>
                                    <p className="text-slate-500 text-sm mt-1">Karachi, Pakistan</p>
                                </div>
                            </motion.div>
                        </div>

                        <a
                            href="/Abdul Rafay Khan - Resume.pdf"
                            download
                            className="md:hidden mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 border border-blue-500 text-white rounded-lg transition-colors font-medium"
                        >
                            <Download className="w-4 h-4" /> Download CV
                        </a>
                    </div>

                    {/* Sidebar - Right Column */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Technical Expertise */}
                        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 lg:p-8">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                                <Terminal className="w-5 h-5 text-blue-500" /> Technical Expertise
                            </h3>

                            <div className="mb-6">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">Languages</p>
                                <div className="space-y-4">
                                    {[
                                        { name: "C# / .NET", val: "90%" },
                                        { name: "TypeScript / JavaScript", val: "90%" },
                                        { name: "Python / SQL", val: "75%" },
                                    ].map(lang => (
                                        <div key={lang.name}>
                                            <div className="flex justify-between text-sm mb-1.5">
                                                <span className="text-slate-300 font-medium">{lang.name}</span>
                                                <span className="text-slate-400">{lang.val}</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 rounded-full" style={{ width: lang.val }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">Backend</p>
                                <div className="flex flex-wrap gap-2">
                                    {["ASP.NET Core", "ASP.NET MVC", "Web API", "Node.js", "Express.js"].map(tool => (
                                        <span key={tool} className="px-3 py-1 border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-md">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">Frontend</p>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "React Native", "Next.js", "Tailwind CSS", "ShadCN", "Bootstrap"].map(tool => (
                                        <span key={tool} className="px-3 py-1 border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-md">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">Databases</p>
                                <div className="flex flex-wrap gap-2">
                                    {["PostgreSQL", "SQL Server", "MongoDB", "MySQL", "Firebase"].map(tool => (
                                        <span key={tool} className="px-3 py-1 border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-md">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">Cloud & Tools</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Azure", "AWS S3", "IIS", "Vercel", "Git", "Postman"].map(tool => (
                                        <span key={tool} className="px-3 py-1 border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-md">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">Auth & Security</p>
                                <div className="flex flex-wrap gap-2">
                                    {["ASP.NET Identity", "JWT", "MFA", "QR Authentication", "OAuth"].map(tool => (
                                        <span key={tool} className="px-3 py-1 border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-md">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Beyond the Code */}
                        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 lg:p-8">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                                <BookOpen className="w-5 h-5 text-blue-500" /> Beyond the Code
                            </h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                        <Code2 className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">Open Source Projects</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">Building and contributing to projects that solve real problems for developers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                        <Coffee className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">Exploring New Tech</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">Always tinkering with new frameworks, tools, and ideas on the side.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                        <Video className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">Content Creation</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">Creating dev-focused content — sharing what I build and learn along the way.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}