import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Mail, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full mb-2">
      <div className="w-full h-52 md:h-72 overflow-hidden border-b border-white/10 relative">
        <img
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"
          alt="Banner"
          className="w-full h-full object-cover object-center opacity-70 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="w-full px-6 md:px-8">
        <div className="flex flex-col items-start -mt-14 md:-mt-16 ml-2 md:ml-4 relative z-10">
          <img
            src="https://github.com/piyyu.png"
            alt="Piyush Kumar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black shadow-2xl"
          />

          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-5 mt-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/45">Portfolio / 2026</p>
              <h1 className="text-4xl md:text-6xl text-white font-serif leading-none tracking-tight mt-2">
                Piyush Kumar
              </h1>
              <p className="text-[#a0a0a0] text-base md:text-lg mt-3 font-sans font-light max-w-xl">
                Full Stack Engineer crafting fast, expressive products from backend systems to refined UI.
              </p>
              <Link
                href="/projects"
                className="mt-5 inline-flex items-center gap-2 border border-white/20 bg-white/[0.04] hover:bg-white/[0.1] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/80 transition-all"
              >
                Explore projects
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex gap-3 mb-1">
              <a href="https://github.com/piyyu" target="_blank" rel="noreferrer" className="group relative p-3 rounded-full bg-[#222] border border-[#333] text-[#888] hover:text-white hover:bg-[#2a2a2a] transition-all duration-100">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="https://x.com/piyyu" target="_blank" rel="noreferrer" className="group relative p-3 rounded-full bg-[#222] border border-[#333] text-[#888] hover:text-white hover:bg-[#2a2a2a] transition-all duration-100">
                <SiX className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/piyush446" target="_blank" rel="noreferrer" className="group relative p-3 rounded-full bg-[#222] border border-[#333] text-[#888] hover:text-[#0077b5] hover:bg-[#2a2a2a] transition-all duration-100">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:piyushkr446@gmail.com" className="group relative p-3 rounded-full bg-[#222] border border-[#333] text-[#888] hover:text-[#EA4335] hover:bg-[#2a2a2a] transition-all duration-100">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
