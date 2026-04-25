import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
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
