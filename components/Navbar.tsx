"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

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
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Always Visible */}
          <a
            href="/blog"
            className="hidden sm:inline hover:text-white transition"
          >
            Blog
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="hidden sm:inline bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-300 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-800/50 bg-slate-950/95 px-6 py-4 flex flex-col gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/blog"
            onClick={() => setOpen(false)}
            className="hover:text-white transition"
          >
            Blog
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            onClick={() => setOpen(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
