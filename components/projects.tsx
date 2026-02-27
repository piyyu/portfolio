import Link from "next/link";
import { ArrowUpRight, Circle, Rocket } from "lucide-react";
import { projects } from "@/components/project-data";

export function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-10 md:py-12">
      <div className="w-full px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-lg font-mono text-[#6f6f6f] uppercase tracking-[0.2em]">Featured Projects</h2>
            <p className="text-sm text-[#969696] mt-3 max-w-2xl">
              Product-minded builds with a focus on clarity, speed, and practical user experience.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition-all"
          >
            View all
            <Rocket className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden border border-white/10 bg-gradient-to-b from-[#101010] to-[#070707] p-6 md:p-7"
            >
              <div
                className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full blur-2xl opacity-40"
                style={{ backgroundColor: project.accent }}
              />

              <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-white/45">
                <Circle className="h-2 w-2 fill-current" style={{ color: project.accent }} />
                Active
              </div>

              <h3 className="text-2xl text-white font-serif leading-tight">{project.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#a3a3a3]">{project.summary}</p>
              <p className="mt-6 text-xs font-mono tracking-wide text-[#6d6d6d]">{project.stack}</p>

              <div className="mt-8 flex items-center gap-3">
                <Link
                  href={project.repoUrl}
                  target="_blank"
                    rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/85 hover:bg-white/10 transition-all"
                >
                  Repo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/65 hover:text-white hover:bg-white/10 transition-all"
                  >
                    Live
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/projects"
          className="sm:hidden mt-5 inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition-all"
        >
          View all projects
          <Rocket className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
