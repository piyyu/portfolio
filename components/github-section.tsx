"use client";

import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function GithubSection() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <section className="py-12 border-t border-border">
      <h2 className="text-sm font-mono text-muted mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
        <Github className="w-4 h-4" />
        GitHub Activity
      </h2>

      <div className="w-full flex justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 mt-4">
        <div className="w-full max-w-[800px] flex justify-center [&_article]:w-full [&_article]:max-w-full [&_svg]:w-full [&_svg]:max-w-full [&_svg]:h-auto">
          {mounted && (
            <GitHubCalendar
              username="piyyu"
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              blockSize={12}
              blockMargin={2}
              fontSize={12}
              theme={{
                light: ['#f0f0f0', '#d0d0d0', '#a0a0a0', '#707070', '#404040'],
                dark: ['#1a1a1a', '#333333', '#555555', '#888888', '#ededed'],
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
