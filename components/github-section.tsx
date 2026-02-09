"use client";

import { GitHubCalendar } from "react-github-calendar";

export function GithubSection() {
  return (
    <section className="py-8">
      <div className="w-full px-6">
        <h2 className="text-lg font-mono text-[#444444] mb-8 uppercase tracking-widest">
          Code Activity
        </h2>

        <div className="flex justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500">
          <GitHubCalendar
            username="piyyu"
            colorScheme="dark"
            blockSize={12}
            blockMargin={4}
            fontSize={10}
          />
        </div>
      </div>
    </section>
  );
}
