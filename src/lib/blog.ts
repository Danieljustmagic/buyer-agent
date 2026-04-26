import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  readingTime: number;
}

export interface Post extends PostMeta {
  content: string;
}

function estimateReadingTime(text: string): number {
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? "Sans titre",
        date: data.date ?? "",
        description: data.description ?? "",
        category: data.category ?? "Conseils",
        readingTime: estimateReadingTime(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const extensions = [".mdx", ".md"];
  for (const ext of extensions) {
    const filepath = path.join(BLOG_DIR, `${slug}${ext}`);
    if (!fs.existsSync(filepath)) continue;

    const raw = fs.readFileSync(filepath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? "Sans titre",
      date: data.date ?? "",
      description: data.description ?? "",
      category: data.category ?? "Conseils",
      readingTime: estimateReadingTime(content),
      content,
    };
  }
  return null;
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
