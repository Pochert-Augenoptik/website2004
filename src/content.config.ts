import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ratgeber = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/ratgeber" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().optional(),
  }),
});

export const collections = { ratgeber };
