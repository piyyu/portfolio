import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/components/project-data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col items-center">
      <div className="w-full max-w-5xl min-h-screen border-x border-white/10 bg-black">
        <header className="px-6 md:px-10 pt-12 pb-8 border-b border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back home
          </Link>
          <h1 className="mt-6 text-4xl md:text-6xl font-serif tracking-tight">Projects</h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-[#a3a3a3] leading-relaxed">
            A curated project index with repository links and live deployments. Built to feel crisp, readable, and intentionally minimal.
          </p>
        </header>

        <section className="px-6 md:px-10 py-10 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="relative overflow-hidden border border-white/15 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7"
            >
              <div className="text-xs font-mono tracking-[0.2em] text-white/40">0{index + 1}</div>
              <h2 className="mt-4 text-3xl font-serif">{project.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#b1b1b1]">{project.summary}</p>
              <p className="mt-6 text-xs font-mono uppercase tracking-[0.15em] text-[#777]">{project.stack}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={project.repoUrl}
                  target="_blank"
                    rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/85 hover:bg-white/10 transition-colors"
                >
                  Repository
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/65 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
