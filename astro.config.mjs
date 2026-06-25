import { defineConfig } from 'astro/config';

// DwellWell Property Care — static marketing site.
// Output is fully static (Astro's default), so this deploys as plain HTML/CSS/JS
// to Cloudflare Pages or Netlify with no adapter:
//   - Build command:      npm run build
//   - Publish directory:  dist
//
// No `site` / `base` is set on purpose: all asset and link paths stay
// root-relative ("/", "/about", "/_astro/...", "/favicon.svg"), so the build
// works on whatever domain it lands on (e.g. any auto-suffixed *.pages.dev URL).
export default defineConfig({
  output: 'static',
});

