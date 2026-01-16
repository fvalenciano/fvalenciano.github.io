// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.object({
      en: z.string(),
      es: z.string(),
    }),
    pubDate: z.date(),
    description: z.object({
      en: z.string(),
      es: z.string(),
    }),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    readingTime: z.number().optional(),
  }),
});
const projectsCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.object({
      en: z.string(),
      es: z.string(),
    }),
    year: z.string(),
    description: z.object({
      en: z.string(),
      es: z.string(),
    }),
    image: z.string(),
    paper: z.string().optional(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
