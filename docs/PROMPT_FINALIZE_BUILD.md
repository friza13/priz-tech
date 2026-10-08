# TASK: FINALIZE BUILD, SEO VALIDATION & COMMIT

1. FIX TEST & GITIGNORE:
   - Rename `tests/seo.test.ts` to `tests/seo.test.tsx` so JSX syntax `<App />` compiles properly.
   - Create `.gitignore` containing:
     ```
     node_modules/
     dist/
     .env
     .env.local
     docs/PROMPT_*.md
     ```

2. VERIFY SEO ASSETS & METADATA:
   - In `public/robots.txt`:
     ```
     User-agent: *
     Allow: /
     Sitemap: https://prizftm.my.id/sitemap.xml
     ```
   - In `public/sitemap.xml`: valid XML sitemap with url `https://prizftm.my.id/`.
   - In `index.html`: ensure meta description, keywords, Open Graph, Twitter cards, canonical, and Schema.org JSON-LD are intact.

3. EXECUTE VALIDATION TESTS & BUILD:
   - Run: `npx vitest run` -> Ensure all 8 test files pass 100% green!
   - Run: `npm run build` -> Ensure clean build into `dist/` with zero errors.

4. GIT COMMIT & PUSH:
   - Stage created files and commit with: `feat: finalize full landing page with complete seo metadata and tests`
   - Push to `origin main` on GitHub.
