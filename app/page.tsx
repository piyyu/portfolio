import { Hero } from "@/components/hero";
import { Tools } from "@/components/tools";
import { Projects } from "@/components/projects";
import { GithubSection } from "@/components/github-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <div className="flex flex-col">
        <Hero />
        <Tools />
        <Projects />
        <GithubSection />
        <Footer />
      </div>
    </main>
  );
}

