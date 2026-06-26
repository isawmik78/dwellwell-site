import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// DwellWell Property Care — static marketing site.
// Output is fully static (Astro's default), so this deploys as plain HTML/CSS/JS
// to Cloudflare Pages or Netlify with no adapter:
//   - Build command:      npm run build
//   - Publish directory:  dist
//
// `site` is the live deploy origin. It is used only for absolute sitemap and
// canonical URLs; all asset/link paths stay root-relative, so pages still render
// on any host. If a custom domain is added later, update this one value.
export default defineConfig({
  site: 'https://dwellwell-site.pages.dev',
  output: 'static',
  integrations: [
    sitemap({
      // Keep noindex routes out of the sitemap.
      filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
    }),
  ],
});
