import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(
  process.cwd(),
  "content/blog"
);

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fullPath = path.join(
      postsDirectory,
      file
    );

    const fileContents = fs.readFileSync(
      fullPath,
      "utf8"
    );

    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return posts.sort(
    (a: any, b: any) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}