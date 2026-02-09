import {
  SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs,
  SiPostgresql, SiGo, SiDocker, SiGit, SiC, SiCplusplus, SiPython, SiMysql,
  SiMongodb, SiLinux, SiOpenai
} from "react-icons/si";
import Marquee from "react-fast-marquee";

export function Tools() {
  const tools = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Artificial Intelligence", icon: SiOpenai, color: "#10A37F" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    // { name: "MySql", icon: SiMysql }, // Removed due to potential icon unavailability in some versions, sticking to known good set or checking first. Actually let's try SiMysql, it usually exists.
    { name: "MySql", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" }
  ];

  return (
    <section className="py-8">
      <div className="w-full px-6">
        <h2 className="text-lg font-mono text-[#444444] mb-8 uppercase tracking-widest">
          Tools I Use
        </h2>

        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* First Row - Left to Right */}
          <div className="mb-4 flex" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <Marquee gradient={false} speed={40} pauseOnHover>
              <div className="flex gap-4 pr-4">
                {tools.slice(0, Math.ceil(tools.length / 2)).map((tool) => (
                  <span
                    key={tool.name}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#222222] bg-[#0a0a0a] text-[#888888] text-sm hover:border-[#444444] hover:text-[var(--hover-color)] transition-all cursor-default min-w-max"
                    style={{ "--hover-color": tool.color } as React.CSSProperties}
                  >
                    <tool.icon className="w-5 h-5" />
                    {tool.name}
                  </span>
                ))}
              </div>
            </Marquee>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <Marquee gradient={false} speed={40} direction="right" pauseOnHover>
              <div className="flex gap-4 pr-4">
                {tools.slice(Math.ceil(tools.length / 2)).map((tool) => (
                  <span
                    key={tool.name}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#222222] bg-[#0a0a0a] text-[#888888] text-sm hover:border-[#444444] hover:text-[var(--hover-color)] transition-all cursor-default min-w-max"
                    style={{ "--hover-color": tool.color } as React.CSSProperties}
                  >
                    <tool.icon className="w-5 h-5" />
                    {tool.name}
                  </span>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
