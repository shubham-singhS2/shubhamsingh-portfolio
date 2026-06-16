import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function LatestArticles() {
const posts = getAllPosts().slice(0, 3);

return ( <section
   id="blog"
   className="max-w-7xl mx-auto px-6 py-12"
 > <h2 className="text-4xl font-bold mb-8">
Latest Articles </h2>

  <div className="grid gap-6">

    {posts.map((post: any) => (
      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        className="block border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
      >

        <div className="text-blue-400 text-sm mb-3">
          {post.tags?.join(" • ")}
        </div>

        <h3 className="text-2xl font-semibold mb-3">
          {post.title}
        </h3>

        <p className="text-slate-400 mb-4">
          {post.description}
        </p>

        <div className="text-sm text-slate-500">
          {post.date}
        </div>

      </Link>
    ))}

  </div>
</section>

);
}
