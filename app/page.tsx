import { Hero } from "@/components/hero";
import { Tools } from "@/components/tools";
import { Projects } from "@/components/projects";
import { GithubSection } from "@/components/github-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col items-center">
      <div className="flex flex-col w-full max-w-5xl border-x border-white/10 min-h-screen bg-black">
        <Hero />
        <Tools />
        <Projects />
        <GithubSection />
      </div>
    </main>
  );
}
