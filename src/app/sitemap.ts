import { MetadataRoute } from "next";
import { DATA } from "@/data/resume";
import { allPosts } from "content-collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = allPosts.map((post) => ({
    url: `${DATA.url}/blog/${post._meta.path.replace(/\.mdx$/, "")}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${DATA.url}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogPosts];
}
