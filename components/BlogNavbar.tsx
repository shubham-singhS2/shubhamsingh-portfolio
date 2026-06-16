import Link from "next/link";

export default function BlogNavbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-800/50 bg-slate-950/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">

        <Link
          href="/"
          className="font-semibold text-slate-300 hover:text-white transition"
        >
          ← Shubham Singh
        </Link>

      </div>
    </nav>
  );
}