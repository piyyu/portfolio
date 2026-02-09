import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full pt-4 md:pt-12 mb-16">
      <div className="w-full px-6">
        {/* Cover Image */}
        <div className="w-full h-48 md:h-64 bg-gradient-to-b from-neutral-800 to-black rounded-lg opacity-80 animate-in fade-in zoom-in duration-700 border-b border-white/5"></div>

        {/* Content Container (Avatar + Text) */}
        <div className="flex flex-col items-start -mt-12 md:-mt-16 ml-4 relative z-10">
          {/* Avatar (PFP) */}
          <img
            src="https://github.com/piyyu.png"
            alt="Piyush Kumar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />

          {/* Editorial Text & Socials */}
          <div className="w-full flex justify-between items-end mt-6">
            <div>
              <h1 className="text-4xl md:text-6xl text-white font-serif leading-none tracking-tight">
                Piyush Kumar
              </h1>
              <p className="text-[#888888] text-base md:text-lg mt-2 font-sans font-light">
                Full Stack Engineer
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mb-2">
              <a href="https://github.com/piyyu" target="_blank" className="group relative p-3 rounded-full bg-[#222] border border-[#333] border-b-4 border-b-[#111] text-[#888] hover:text-white hover:bg-[#2a2a2a] hover:border-b-[#111] active:border-b-0 active:translate-y-1 transition-all duration-100">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/piyush446" target="_blank" className="group relative p-3 rounded-full bg-[#222] border border-[#333] border-b-4 border-b-[#111] text-[#888] hover:text-[#0077b5] hover:bg-[#2a2a2a] hover:border-b-[#111] active:border-b-0 active:translate-y-1 transition-all duration-100">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/piyyu" target="_blank" className="group relative p-3 rounded-full bg-[#222] border border-[#333] border-b-4 border-b-[#111] text-[#888] hover:text-[#1DA1F2] hover:bg-[#2a2a2a] hover:border-b-[#111] active:border-b-0 active:translate-y-1 transition-all duration-100">
                <SiX className="w-5 h-5" />
              </a>
              <a href="mailto:piyushkr446@gmail.com" className="group relative p-3 rounded-full bg-[#222] border border-[#333] border-b-4 border-b-[#111] text-[#888] hover:text-[#EA4335] hover:bg-[#2a2a2a] hover:border-b-[#111] active:border-b-0 active:translate-y-1 transition-all duration-100">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}