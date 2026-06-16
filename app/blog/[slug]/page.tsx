import fs from "fs";
import remarkGfm from "remark-gfm";
import path from "path";
import BlogPostNavbar from "@/components/BlogPostNavbar";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MDXComponents";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return {};
  }

  const source = fs.readFileSync(filePath, "utf8");

  const { data } = matter(source);

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function BlogPost({
  params,
}: Props) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

return (
  <>
    <BlogPostNavbar/>

    <article className="max-w-4xl mx-auto px-6 py-12">

      <div className="mb-12">

        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-slate-800 text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-5xl font-bold leading-tight">
          {data.title}
        </h1>

        <p className="text-slate-400 mt-4 text-sm">
          {data.date} • {data.readingTime}
        </p>

      </div>

      <div className="space-y-6 text-slate-300 leading-8">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>

    </article>
  </>
);
}