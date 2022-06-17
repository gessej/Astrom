import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import lit from "@astrojs/lit";




export default defineConfig({
  site: 'http://essej.dev',
  sitemap: false,
  integrations: [sitemap(), preact(), lit()]
});