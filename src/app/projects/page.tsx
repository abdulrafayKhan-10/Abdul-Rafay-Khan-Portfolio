import { Github, ExternalLink, Star, GitFork, Calendar } from "lucide-react";
import Link from "next/link";
import { projects } from "@/config/projects";
import { fetchRepos } from "@/lib/github";

export const revalidate = 3600; // rebuild data every hour

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default async function ProjectsPage() {
    const repoNames = projects.map(p => p.repo);
    const repos = await fetchRepos(repoNames);

    // Merge config overrides with GitHub data
    const enriched = repos.map(repo => {
        const cfg = projects.find(p => p.repo === repo.name);
        return {
            ...repo,
            displayName: cfg?.displayName ?? repo.name.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
            displayDesc: cfg?.displayDesc ?? repo.description ?? "No description provided.",
        };
    });

    return (
        <main className="pt-28 pb-24 bg-[#0B1120] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-16">
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">Portfolio</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">All Projects</h1>
                    <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                        A collection of things I have built — web apps, APIs, mobile apps, and more. Click any project to read more.
                    </p>
                </div>

                {enriched.length === 0 ? (
                    <div className="text-center py-32">
                        <p className="text-slate-500 text-lg mb-4">No projects found.</p>
                        <p className="text-slate-600 text-sm">Add repo names to <code className="text-blue-400">src/config/projects.ts</code> to get started.</p>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {enriched.map((repo) => (
                            <div
                                key={repo.name}
                                className="group bg-[#0f172a] border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-blue-500/50 hover:bg-[#1e293b]/50 transition-all duration-300"
                            >
                                {/* Top row */}
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                        <Github className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                                        </span>
                                    </div>
                                </div>

                                {/* Name & desc */}
                                <Link href={`/projects/${repo.name}`} className="group/title">
                                    <h2 className="text-lg font-bold text-white mb-2 group-hover/title:text-blue-400 transition-colors leading-snug">
                                        {repo.displayName}
                                    </h2>
                                </Link>
                                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5 line-clamp-3">
                                    {repo.displayDesc}
                                </p>

                                {/* Topics / tags */}
                                {repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {repo.topics.slice(0, 5).map(topic => (
                                            <span key={topic} className="text-[10px] font-bold uppercase tracking-wide text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-auto">
                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                        {repo.language && (
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                                {repo.language}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {formatDate(repo.updated_at)}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-500 hover:text-white transition-colors"
                                            title="GitHub"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                        {repo.homepage && (
                                            <a
                                                href={repo.homepage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-500 hover:text-white transition-colors"
                                                title="Live site"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}