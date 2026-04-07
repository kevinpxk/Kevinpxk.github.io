import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://kevinpxk.github.io",
  base: "/",
  integrations: [tailwind()],
});

