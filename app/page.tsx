import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Tools } from "@/components/tools";
import { Projects } from "@/components/projects";
import { GithubSection } from "@/components/github-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background flex flex-col items-center py-8 md:py-16 px-6 md:px-0">
      <div className="flex flex-col w-full max-w-3xl">
        <Hero />
        <Experience />
        <Tools />
        <Projects />
        <GithubSection />
        <Footer />
      </div>
    </main>
  );
}
