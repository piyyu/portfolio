import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      name: "Kodin",
      description: "Interactive GitHub repository tutorial generator.",
      tech: "Next.js • GitHub API • Contentlayer",
      link: "https://github.com/piyyu/kodin"
    },
    {
      name: "Brainbucket",
      description: "AI-powered knowledge management system with semantic search.",
      tech: "Python • OpenAI • Vector DB",
      link: "https://github.com/piyyu/brainbucket"
    },
    {
      name: "ApiCraft",
      description: "High-performance concurrent API testing tool written in Go.",
      tech: "Go • Bubbletea • TUI",
      link: "https://github.com/piyyu/apicraft"
    }
  ];

  return (
    <section id="projects" className="py-8">
      <div className="w-full px-6">
        <h2 className="text-lg font-mono text-[#444444] mb-8 uppercase tracking-widest">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.name}
              target="_blank"
              className="group block p-8 border border-[#111111] hover:border-[#333333] hover:bg-[#0a0a0a] transition-all bg-[#050505]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl text-white font-serif group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <ArrowUpRight size={20} className="text-[#444444] group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
              </div>

              <p className="text-[#888888] text-sm leading-relaxed mb-8 group-hover:text-[#aaaaaa]">
                {project.description}
              </p>

              <div className="text-xs font-mono text-[#444444] group-hover:text-[#666666]">
                {project.tech}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
