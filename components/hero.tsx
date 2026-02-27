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
    <section className="mb-10 mt-4 w-full">
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 w-full">

        {/* Text Body - Left Side */}
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-3xl font-serif text-foreground mb-2 tracking-tight flex items-center gap-2">
              Piyush Kumar
            </h1>
            <p className="text-muted font-sans text-lg">
              Full Stack Engineer
            </p>
          </div>

          {/* Minimal Social Links */}
          <div className="flex gap-4 text-muted/50">
            <a href="https://github.com/piyyu" target="_blank" className="hover:text-foreground transition-colors">
              <TbBrandGithub className="w-6 h-6" />
            </a>
            <a href="https://x.com/heypiyyu" target="_blank" className="hover:text-foreground transition-colors">
              <TbBrandX className="w-6 h-6" />
            </a>
            <a href="https://discordapp.com/users/heypiyyu" target="_blank" className="hover:text-foreground transition-colors">
              <TbBrandDiscord className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/piyush446" target="_blank" className="hover:text-foreground transition-colors">
              <TbBrandLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:piyushkr446@gmail.com" className="hover:text-foreground transition-colors">
              <TbMail className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/piyyu" target="_blank" className="hover:text-foreground transition-colors">
              <TbBrandLeetcode className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Premium Editorial Avatar - Right Side */}
        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border border-muted-dark shadow-xl shrink-0">
          <Image
            src="https://github.com/piyyu.png"
            alt="Piyush Kumar"
            width={176}
            height={176}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>

      </div>
    </section>
  );
}
