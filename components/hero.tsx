import {
  TbBrandGithub,
  TbBrandX,
  TbBrandDiscord,
  TbBrandLeetcode,
  TbBrandLinkedin,
  TbMail
} from "react-icons/tb";
import Image from "next/image";

export function Hero() {
  return (
    <section className="mb-10 mt-4">
      <div className="flex flex-col gap-6">

        {/* Premium Editorial Avatar - Square & Colorful */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border border-[#333333] shadow-xl">
          <Image
            src="https://github.com/piyyu.png"
            alt="Piyush Kumar"
            width={96}
            height={96}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>

        <div>
          <h1 className="text-3xl font-serif text-[#f5f5f5] mb-2 tracking-tight flex items-center gap-2">
            Piyush Kumar
          </h1>
          <p className="text-[#888888] font-sans">
            Full Stack Engineer building tools and interfaces.
          </p>
        </div>

        {/* Minimal Social Links */}
        <div className="flex gap-4 text-[#555555]">
          <a href="https://github.com/piyyu" target="_blank" className="hover:text-[#f5f5f5] transition-colors">
            <TbBrandGithub className="w-6 h-6" />
          </a>
          <a href="https://x.com/heypiyyu" target="_blank" className="hover:text-[#f5f5f5] transition-colors">
            <TbBrandX className="w-6 h-6" />
          </a>
          <a href="https://discordapp.com/users/heypiyyu" target="_blank" className="hover:text-[#f5f5f5] transition-colors">
            <TbBrandDiscord className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/piyush446" target="_blank" className="hover:text-[#f5f5f5] transition-colors">
            <TbBrandLinkedin className="w-6 h-6" />
          </a>
          <a href="mailto:piyushkr446@gmail.com" className="hover:text-[#f5f5f5] transition-colors">
            <TbMail className="w-6 h-6" />
          </a>
          <a href="https://leetcode.com/piyyu" target="_blank" className="hover:text-[#f5f5f5] transition-colors">
            <TbBrandLeetcode className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
