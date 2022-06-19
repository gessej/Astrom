import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import lit from "@astrojs/lit";



export default defineConfig({

  site: 'https://isnt-gessej-awesome.netlify.app',
  sitemap: false,
  integrations: [sitemap(), preact(), lit()]
}); 