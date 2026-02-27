import { ArrowLeft, FolderGit2, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

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
      </div>
    </main>
  );
}
