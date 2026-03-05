/**
 * PROJECTS CONFIG — Your single source of control.
 *
 * To add a project: paste your GitHub repo name into the array below.
 * To remove a project: delete it from the array.
 * To mark a project as featured (shown on homepage): set featured: true
 *
 * For best results, on each GitHub repo:
 *  - Set a clear "About" description
 *  - Add Topics (e.g. react, aspnet, typescript) — these become your tech tags
 *  - Set "Website" to your live/deployed URL if one exists
 */

export type ProjectConfig = {
    repo: string;        // GitHub repo name exactly as it appears in your GitHub URL
    featured?: boolean;  // true = show on homepage Featured Projects section
    // Optional overrides (if you want to display a different name/desc than GitHub)
    displayName?: string;
    displayDesc?: string;
};

export const GITHUB_USERNAME = "abdulrafayKhan-10";

export const projects: ProjectConfig[] = [
    // -------------------------------------------------------


    { repo: "NextGen-Ecommerce", featured: true },
    { repo: "FitForge-App", featured: true },
    { repo: "Novabill-WebApp", featured: true },
    { repo: "LifeSync-App", featured: true },
    { repo: "Nexus-Events", featured: true },
    { repo: "Flavora-App", featured: true },
    
];

export const featuredProjects = projects.filter(p => p.featured);
