import Link from "next/link";
import { ArrowRight, FolderGit2, Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      name: "Gitnest",
      description: "Advanced AI tutoring assistant that generates structured, on-demand tutorials for any GitHub repository.",
      tech: "Next.js • TypeScript • Tailwind • Groq AI",
      github: "https://github.com/piyyu/gitnest",
      link: "https://gitnest-cyan.vercel.app/"
    },
    {
      name: "Brainbucket",
      description: "AI-powered second brain for effortlessly saving, searching, and chatting with your digital content.",
      tech: "React • Node.js • MongoDB • Voyage AI",
      github: "https://github.com/piyyu/brainbucket",
      link: "https://brainbucket-zeta.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-12 border-t border-[#1a1a1a]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-mono text-[#888888] uppercase tracking-[0.2em] flex items-center gap-2">
          <FolderGit2 className="w-4 h-4" />
          Selected Work
        </h2>
        <Link href="/projects" className="text-sm font-mono text-[#555555] hover:text-[#f5f5f5] transition-colors flex items-center gap-1">
          View all <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-2 group">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
              <h3 className="text-xl text-[#f5f5f5] font-serif">
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

            <p className="text-[#888888] text-base leading-relaxed mt-1">
              {project.description}
            </p>

            <div className="text-xs font-mono text-[#555555]">
              {project.tech}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
