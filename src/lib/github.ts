import { GITHUB_USERNAME } from "@/config/projects";

export type GithubRepo = {
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
};

export type GithubReadme = {
    content: string; // base64
    encoding: string;
};

const BASE = "https://api.github.com";

const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    // If you ever hit rate limits (60 req/hr unauthenticated),
    // create a GitHub personal access token (read-only, public repos)
    // and add it here:
    // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

export async function fetchRepo(repoName: string): Promise<GithubRepo | null> {
    try {
        const res = await fetch(`${BASE}/repos/${GITHUB_USERNAME}/${repoName}`, {
            headers,
            next: { revalidate: 3600 }, // cache for 1 hour
        });
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export async function fetchRepos(repoNames: string[]): Promise<GithubRepo[]> {
    const results = await Promise.all(repoNames.map(fetchRepo));
    return results.filter((r): r is GithubRepo => r !== null);
}

/**
 * Rewrites a README image src to an absolute raw.githubusercontent.com URL.
 * Handles: relative paths, ./relative, GitHub blob links, and already-absolute URLs.
 */
export function resolveReadmeImageUrl(src: string, repoName: string): string {
    if (!src) return src;
    // Already a raw URL — leave it alone
    if (src.startsWith("https://raw.githubusercontent.com")) return src;
    // GitHub blob URL → convert to raw
    const blobMatch = src.match(
        /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/
    );
    if (blobMatch) {
        return `https://raw.githubusercontent.com/${blobMatch[1]}/${blobMatch[2]}/${blobMatch[3]}/${blobMatch[4]}`;
    }
    // Any other absolute URL — leave it alone
    if (src.startsWith("http://") || src.startsWith("https://")) return src;
    // Relative path — resolve against the repo's HEAD
    const clean = src.startsWith("./") ? src.slice(2) : src.startsWith("/") ? src.slice(1) : src;
    return `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/HEAD/${clean}`;
}

export async function fetchReadme(repoName: string): Promise<string | null> {
    try {
        const res = await fetch(`${BASE}/repos/${GITHUB_USERNAME}/${repoName}/readme`, {
            headers,
            next: { revalidate: 3600 },
        });
        if (!res.ok) return null;
        const data: GithubReadme = await res.json();
        // Decode base64 content
        return Buffer.from(data.content, "base64").toString("utf-8");
    } catch {
        return null;
    }
}
