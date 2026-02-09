export function Footer() {
  return (
    <footer className="py-6 border-t border-[#111111] text-center">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-8 text-sm text-[#888888]">
          <a href="mailto:piyushkr446@gmail.com" className="hover:text-white transition-colors">Email</a>
          <a href="https://github.com/piyyu" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/piyush446" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
        </div>

        <div className="text-xs text-[#333333] font-mono">
          <span className="w-2 h-2 inline-block rounded-full bg-green-900 mr-2"></span>
          Open to new opportunities
        </div>
      </div>
    </footer>
  );
}
