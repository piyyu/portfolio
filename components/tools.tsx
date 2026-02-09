export function Tools() {
  const tools = [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind",
    "Node.js",
    "PostgreSQL",
    "Go",
    "Docker",
    "Git",
    "Artificial Intelligence",
    "C",
    "C++",
    "Python",
    "MySql",
    "MongoDB",
    "Linux"
  ];

  return (
    <section className="py-8 border-t border-[#111111]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-mono text-[#444444] mb-4 uppercase tracking-widest">
          Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-5 py-2 rounded-full border border-[#222222] bg-[#0a0a0a] text-[#888888] text-sm hover:border-[#444444] hover:text-white transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
