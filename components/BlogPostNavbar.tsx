import Link from "next/link";

export default function BlogPostNavbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-800/50 bg-slate-950/80">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">

        <Link
          href="/blog"
          className="font-semibold text-slate-300 hover:text-white transition"
        >
          ← Back to Blog
        </Link>

      </div>
    </nav>
  );
}