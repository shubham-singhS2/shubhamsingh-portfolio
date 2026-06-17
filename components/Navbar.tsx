export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-800/50 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <a
          href="#"
          className="font-bold text-2xl tracking-tight hover:text-blue-400 transition"
        >
          Shubham Singh
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-4 md:gap-8 text-sm text-slate-300">

          {/* Desktop Links Only */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-white transition"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="hover:text-white transition"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

          {/* Always Visible */}
          <a
            href="/blog"
            className="hover:text-white transition"
          >
            Blog
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition"
          >
            Resume
          </a>

        </div>

      </div>
    </nav>
  );
}