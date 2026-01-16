import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  output: "static",
  base: "/",
  site: "https://fvalenciano.github.io",

  markdown: {
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
