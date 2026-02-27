export function Footer() {
  return (
    <footer className="py-12 mt-12 border-t border-[#1a1a1a]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-[#555555] font-mono flex items-center">
          Open for Work
        </div>

        <div className="flex gap-6 text-sm text-[#888888]">
          <a href="mailto:piyushkr446@gmail.com" className="hover:text-[#ededed] transition-colors">Email</a>
          <a href="https://github.com/piyyu" target="_blank" className="hover:text-[#ededed] transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/piyush446" target="_blank" className="hover:text-[#ededed] transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
