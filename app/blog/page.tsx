import BlogNavbar from "@/components/BlogNavbar";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BlogNavbar />

      <main className="max-w-5xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold mb-4">
          Blog
        </h1>

        <p className="text-slate-400 mb-12">
          Articles, tutorials and hands-on experiences in
          DevOps, Cloud, Kubernetes and Infrastructure.
        </p>

        <div className="space-y-6">

          {posts.map((post: any) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
            >

              <div className="text-blue-400 text-sm mb-3">
                {post.tags?.join(" • ")}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {post.title}
              </h2>

              <p className="text-slate-400 mb-4">
                {post.description}
              </p>

              <div className="text-sm text-slate-500">
                {post.date} • {post.readingTime}
              </div>

            </Link>
          ))}

        </div>

      </main>
    </>
  );
}