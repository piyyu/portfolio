"use client";

import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";
import { useState, useEffect } from "react";

export function GithubSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <section className="py-12 border-t border-[#1a1a1a]">
      <h2 className="text-sm font-mono text-[#888888] mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
        <Github className="w-4 h-4" />
        GitHub Activity
      </h2>

      <div className="w-full flex justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 min-h-[150px]">
        {mounted && (
          <GitHubCalendar
            username="piyyu"
            colorScheme="dark"
            theme={{
              dark: ['#1a1a1a', '#333333', '#555555', '#888888', '#ededed'],
            }}
            blockSize={10}
            blockMargin={4}
            fontSize={10}
          />
        )}
      </div>
    </section>
  );
}
