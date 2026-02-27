import { Briefcase, Calendar, Building2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Freelance Full Stack Engineer",
      company: "Independent",
      dates: "2023 - Present",
      description: "Building premium Web3 interfaces, AI-powered internal tools, and high-performance backends for early-stage startups."
    }
  ];

  return (
    <section className="py-8 border-t border-border">
      <h2 className="text-sm font-mono text-muted mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
        <Briefcase className="w-5 h-5" />
        Experience
      </h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-xl text-foreground font-serif">
                {exp.role}
              </h3>
              <div className="text-sm font-mono text-muted/50 flex items-center gap-1.5 md:mt-0">
                <Calendar className="w-5 h-5" />
                {exp.dates}
              </div>
            </div>

            <div className="text-sm text-muted font-mono flex items-center gap-1.5">
              <Building2 className="w-5 h-5" />
              {exp.company}
            </div>

            <p className="text-muted text-base leading-relaxed mt-1">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
