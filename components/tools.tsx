import {
  SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiTailwindcss,
  SiNodedotjs, SiPostgresql, SiGo, SiDocker, SiGit, SiPython,
  SiMysql, SiMongodb, SiLinux, SiCplusplus, SiC, SiOpenai
} from "react-icons/si";

import { Wrench } from "lucide-react";

export function Tools() {
  const tools = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Go", icon: SiGo },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "AI", icon: SiOpenai }, // Using OpenAI logo to represent AI generically
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "Python", icon: SiPython },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Linux", icon: SiLinux }
  ];

  return (
    <section className="py-12 border-t border-[#1a1a1a]">
      <h2 className="text-sm font-mono text-[#888888] mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
        <Wrench className="w-4 h-4" />
        Toolkit
      </h2>

      <div className="flex flex-wrap gap-x-4 gap-y-3 text-[#888888] font-sans text-sm leading-relaxed">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <span key={tool.name} className="flex items-center">
              <span className="flex items-center gap-1.5 hover:text-[#f5f5f5] transition-colors cursor-default">
                <Icon className="w-3.5 h-3.5" />
                {tool.name}
              </span>
              {index < tools.length - 1 && <span className="ml-4 text-[#333333] select-none">•</span>}
            </span>
          );
        })}
      </div>
    </section>
  );
}
