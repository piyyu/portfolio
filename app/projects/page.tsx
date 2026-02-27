import Link from "next/link";
<<<<<<< HEAD
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
=======
import { ArrowLeft, FolderGit2, Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const allProjects = [
    {
      name: "Brainbucket",
      description: "AI-powered second brain for effortlessly saving, searching, and chatting with your digital content.",
      tech: "React • Node.js • MongoDB • Voyage AI",
      github: "https://github.com/piyyu/brainbucket",
      link: "https://brainbucket-zeta.vercel.app/"
    },
    {
      name: "Gitnest",
      description: "Advanced AI tutoring assistant that generates structured, on-demand tutorials for any GitHub repository.",
      tech: "Next.js • TypeScript • Tailwind • Groq AI",
      github: "https://github.com/piyyu/gitnest",
      link: "https://gitnest-cyan.vercel.app/"
    },
    {
      name: "ApiCraft",
      description: "High-performance concurrent API testing tool written in Go, providing a terminal UI for rapid developer feedback.",
      tech: "Go • Bubbletea • TUI",
      github: "https://github.com/piyyu/apicraft",
      link: null
    },
    {
      name: "Mark-it",
      description: "Minimal, private space to save, organize, and rediscover your most important web links.",
      tech: "Next.js • TailwindCSS",
      github: "https://github.com/piyyu/mark-it",
      link: "https://mark-it-mi76.vercel.app/"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-[#f5f5f5] selection:bg-white selection:text-black flex flex-col items-center py-8 md:py-16 px-6 md:px-0">
      <div className="flex flex-col w-full max-w-3xl">

        <div className="mb-16 mt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono text-[#555555] hover:text-[#f5f5f5] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Link>

          <h1 className="text-3xl font-serif text-[#f5f5f5] mb-2 tracking-tight flex items-center gap-3">
            <FolderGit2 className="w-6 h-6 text-[#555555]" />
            All Projects
          </h1>
          <p className="text-[#888888] font-sans">
            A comprehensive list of my open-source work and freelance builds.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {allProjects.map((project) => (
            <div key={project.name} className="flex flex-col gap-3 group">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="text-2xl text-[#f5f5f5] font-serif">
                  {project.name}
                </h3>

                <div className="flex items-center gap-4 text-sm font-mono">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#555555] hover:text-[#f5f5f5] transition-colors flex items-center gap-1.5">
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#555555] hover:text-[#f5f5f5] transition-colors flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>

              <div className="text-xs font-mono text-[#555555]">
                {project.tech}
              </div>

              <p className="text-[#888888] text-base leading-relaxed mt-1 w-11/12 md:w-5/6">
                {project.description}
              </p>
            </div>
          ))}
        </div>

>>>>>>> 503bab2 (ui)
      </div>
    </main>
  );
}
