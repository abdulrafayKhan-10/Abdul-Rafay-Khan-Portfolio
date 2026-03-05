import { notFound } from "next/navigation";
import { fetchRepo, fetchReadme, resolveReadmeImageUrl } from "@/lib/github";
import { projects } from "@/config/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Github, ExternalLink, Star, GitFork, ArrowLeft, Calendar } from "lucide-react";

export const revalidate = 3600;

// Pre-generate pages for all configured repos at build time
export async function generateStaticParams() {
    return projects.map(p => ({ slug: p.repo }));
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", {
        day: "numeric", month: "long", year: "numeric",
    });
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Only render pages for repos in our config
    const cfg = projects.find(p => p.repo === slug);
    if (!cfg) notFound();

    const [repo, readme] = await Promise.all([
        fetchRepo(slug),
        fetchReadme(slug),
    ]);

    if (!repo) notFound();

    const displayName =
        cfg.displayName ?? repo.name.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const displayDesc = cfg.displayDesc ?? repo.description ?? "";

    return (
        <main className="pt-28 pb-24 bg-[#0B1120] min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-10 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    All Projects
                </Link>

                {/* Header */}
                <div className="mb-10 pb-10 border-b border-slate-800">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                        {displayName}
                    </h1>

                    {displayDesc && (
                        <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-3xl">
                            {displayDesc}
                        </p>
                    )}

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 mb-6">
                        <span className="flex items-center gap-1.5">
                            <Star className="w-4 h-4" /> {repo.stargazers_count} stars
                        </span>
                        <span className="flex items-center gap-1.5">
                            <GitFork className="w-4 h-4" /> {repo.forks_count} forks
                        </span>
                        {repo.language && (
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block"></span>
                                {repo.language}
                            </span>
                        )}
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" /> Updated {formatDate(repo.updated_at)}
                        </span>
                    </div>

                    {/* Topics */}
                    {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {repo.topics.map(topic => (
                                <span
                                    key={topic}
                                    className="text-[10px] font-bold uppercase tracking-wide text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 flex-wrap">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1e293b] hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 text-white text-sm font-medium rounded-xl transition-all"
                        >
                            <Github className="w-4 h-4" /> View on GitHub
                        </a>
                        {repo.homepage && (
                            <a
                                href={repo.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl transition-all"
                            >
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* README */}
                {readme ? (
                    <article className="prose prose-invert prose-slate max-w-none
                        prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                        prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                        prose-p:text-slate-400 prose-p:leading-relaxed
                        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white
                        prose-code:text-blue-300 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                        prose-pre:bg-[#0f172a] prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-2xl
                        prose-blockquote:border-l-blue-500 prose-blockquote:text-slate-400
                        prose-img:rounded-2xl prose-img:border prose-img:border-slate-800
                        prose-hr:border-slate-800
                        prose-li:text-slate-400
                        prose-th:text-white prose-td:text-slate-400
                    ">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                // eslint-disable-next-line @next/next/no-img-element
                                img({ src, alt, ...rest }) {
                                    const resolved = resolveReadmeImageUrl(typeof src === "string" ? src : "", slug);
                                    return (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={resolved}
                                            alt={alt ?? ""}
                                            className="rounded-2xl border border-slate-800 max-w-full h-auto"
                                            {...rest}
                                        />
                                    );
                                },
                            }}
                        >
                            {readme}
                        </ReactMarkdown>
                    </article>
                ) : (
                    <div className="text-center py-20 text-slate-500">
                        <p className="text-lg mb-2">No README found for this project.</p>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline text-sm"
                        >
                            View on GitHub instead →
                        </a>
                    </div>
                )}
            </div>
        </main>
    );
}
