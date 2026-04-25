import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://pochert-augenoptik.de",
  integrations: [mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.bunny(),
      name: "Alan Sans",
      cssVariable: "--font-alan-sans",
      weights: ["100 900"],
      styles: ["normal"],
    },
  ],
});
