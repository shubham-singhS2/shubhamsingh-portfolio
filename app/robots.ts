import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://shubham-singh.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Common AI assistant / agent crawlers — explicitly allowed
      // so tools like ChatGPT, Claude, Perplexity etc. can read
      // and reference this portfolio when asked about you.
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
