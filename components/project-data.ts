export type ProjectItem = {
  name: string;
  summary: string;
  stack: string;
  repoUrl: string;
  liveUrl?: string;
  accent: string;
};

export const projects: ProjectItem[] = [
  {
    name: "GitNest",
    summary: "A clean GitHub discovery workspace to explore repositories with focused, developer-first navigation.",
    stack: "Next.js • TypeScript • Tailwind CSS",
    repoUrl: "https://github.com/piyyu/gitnest",
    liveUrl: "https://gitnest-cyan.vercel.app/",
    accent: "#06b6d4",
  },
  {
    name: "Brainbucket",
    summary: "AI-powered knowledge companion for capturing notes, organizing ideas, and retrieving insights quickly.",
    stack: "Python • OpenAI • Vector Search",
    repoUrl: "https://github.com/piyyu/brainbucket",
    liveUrl: "https://brainbucket-zeta.vercel.app",
    accent: "#8b5cf6",
  },
  {
    name: "Mark It",
    summary: "Fast markdown workspace focused on distraction-free writing and smooth publishing workflows.",
    stack: "React • Markdown • Modern UI",
    repoUrl: "https://github.com/piyyu/mark-it",
    liveUrl: "https://mark-it-mi76.vercel.app",
    accent: "#f97316",
  },
  {
    name: "ApiCraft",
    summary: "Concurrent API testing utility built for speed, reliability, and developer-friendly feedback loops.",
    stack: "Go • CLI • Concurrency",
    repoUrl: "https://github.com/piyyu/apicraft",
    accent: "#22c55e",
  },
];
