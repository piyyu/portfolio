import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Tools } from "@/components/tools";
import { Projects } from "@/components/projects";
import { GithubSection } from "@/components/github-section";
<<<<<<< HEAD

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col items-center">
      <div className="flex flex-col w-full max-w-5xl border-x border-white/10 min-h-screen bg-black">
=======
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#f5f5f5] selection:bg-white selection:text-black flex flex-col items-center py-8 md:py-16 px-6 md:px-0">
      <div className="flex flex-col w-full max-w-3xl">
>>>>>>> 503bab2 (ui)
        <Hero />
        <Experience />
        <Tools />
        <Projects />
        <GithubSection />
<<<<<<< HEAD
=======
        <Footer />
>>>>>>> 503bab2 (ui)
      </div>
    </main>
  );
}
