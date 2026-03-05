import { Github, ExternalLink, ArrowRight, Star, GitFork } from "lucide-react";
import Link from "next/link";
import { featuredProjects } from "@/config/projects";
import { fetchRepos, GithubRepo } from "@/lib/github";

export default async function HomeProjects() {
    // If no featured projects configured, show nothing
    if (featuredProjects.length === 0) return null;

    const repoNames = featuredProjects.map(p => p.repo);
    const repos = await fetchRepos(repoNames);

    const enriched = repos.map(repo => {
        const cfg = featuredProjects.find(p => p.repo === repo.name);
        return {
            ...repo,
            displayName: cfg?.displayName ?? repo.name.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()),
            displayDesc: cfg?.displayDesc ?? repo.description ?? "No description provided.",
        };
    });

    if (enriched.length === 0) return null;

    return (
        <section className="py-24 bg-[#0a0f18] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">
                            Selected Work
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Featured Projects.
                        </h3>
                    </div>
                    <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e293b] hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 text-white font-medium rounded-xl transition-all group">
                        Explore All Projects
                        <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {enriched.map((repo) => (
                        <div
                            key={repo.name}
                            className="group bg-[#0f172a] rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col"
                        >
                            {/* Header strip */}
                            <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400"></div>

                            <div className="p-8 flex-1 flex flex-col">
                                {/* Stats row */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                                        </span>
                                    </div>
                                    {repo.language && (
                                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                            {repo.language}
                                        </span>
                                    )}
                                </div>

                                {/* Topics / tags */}
                                {repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {repo.topics.slice(0, 4).map((topic: string) => (
                                            <span key={topic} className="text-[10px] font-bold tracking-wider text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                                                {topic.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <Link href={`/projects/${repo.name}`} className="group/title">
                                    <h4 className="text-2xl font-bold text-white mb-3 group-hover/title:text-blue-400 transition-colors">
                                        {repo.displayName}
                                    </h4>
                                </Link>
                                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6 line-clamp-3">
                                    {repo.displayDesc}
                                </p>

                                <div className="flex items-center gap-6 mt-auto pt-4 border-t border-slate-800 text-sm font-medium text-slate-400">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <Github className="w-4 h-4" /> Source code
                                    </a>
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 hover:text-white transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" /> Live preview
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}