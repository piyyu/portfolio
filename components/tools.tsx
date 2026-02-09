import {
  SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs,
  SiPostgresql, SiGo, SiDocker, SiGit, SiC, SiCplusplus, SiPython, SiMysql,
  SiMongodb, SiLinux, SiOpenai
} from "react-icons/si";

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
    { name: "Artificial Intelligence", icon: SiOpenai },
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "Python", icon: SiPython },
    // { name: "MySql", icon: SiMysql }, // Removed due to potential icon unavailability in some versions, sticking to known good set or checking first. Actually let's try SiMysql, it usually exists.
    { name: "MySql", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Linux", icon: SiLinux }
  ];

  return (
    <section className="py-8 border-t border-[#111111]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-mono text-[#444444] mb-4 uppercase tracking-widest">
          Stack
        </h2>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool.name}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#222222] bg-[#0a0a0a] text-[#888888] text-sm hover:border-[#444444] hover:text-white transition-colors cursor-default"
            >
              <tool.icon className="w-3.5 h-3.5" />
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
