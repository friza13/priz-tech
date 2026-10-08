# BUILD EXECUTION DIRECTIVE: PRIZ TECH OFFICIAL LANDING PAGE

## Context & Objectives
You are building the official, production-grade landing page for **Priz Tech** (`prizftm.my.id`).
The user has approved the implementation plan in `docs/PLAN_PRIZ_TECH_LANDING.md`.
**Crucial Requirement from User:** Must be SEO-optimized so the website is easily discovered by search engines (Google, Bing, etc.) when deployed to VPS1.

## Deliverables & Execution Scope
Follow the implementation plan task-by-task:
1. **Scaffold Project (React 19 / TypeScript + Vite + Tailwind CSS):**
   - Initialize with `vite` or create standard `package.json`, `tsconfig.json`, `vite.config.ts`.
   - Install required dependencies: `react`, `react-dom`, `lucide-react`, `tailwindcss`, `@tailwindcss/vite` or `postcss` + `autoprefixer`.
   - Install testing harness: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`.

2. **Brand & Design Tokens (Dark Tech Aesthetic):**
   - Dark theme styling inspired by Linear/Vercel/Stripe:
     - Base canvas: `#08090d`, surface: `#0f1118`, elevated: `#161924`
     - Accents: cyan `#06b6d4`, indigo `#6366f1`, emerald `#10b981`
     - Typography: Inter/Plus Jakarta Sans + JetBrains Mono for telemetry & tags.

3. **Complete Section Components:**
   - `Navbar.tsx`: Sticky blurred navbar, brand mark `PRIZ TECH`, active status badge ("SYSTEMS OPERATIONAL 🟢"), anchor links, and inquiry CTA.
   - `Hero.tsx`: High-impact headline ("Engineering Distributed Systems, Mission-Critical Logistics & High-Performance Engines"), value proposition, CTAs ("Explore Production Systems", "Inspect Architecture"), live telemetry pills.
   - `MetricsStrip.tsx`: 5 quantifiable engineering metrics:
     - 5+ Production-grade Systems Deployed
     - <50ms Real-Time Dispatch & Matchmaking
     - 100% Double-Entry Ledger Equilibrium
     - 2-Opt OSRM Multi-Stop Route Optimization
     - 0 MB Server Idle Memory Footprint
   - `ProjectsShowcase.tsx`: The Top 5 Real Flagship Projects from founder's GitHub (`friza13`):
     1. **AnjemID**: Smart Campus Mobility & Micro-Logistics Platform (Flutter, Go/Node.js, PostgreSQL, Redis Geospatial, WebSockets).
     2. **Armada DMS**: Enterprise Distribution Management & Fleet Route Optimization (Go Modular Monolith, OSRM Routing, 2-Opt TSP, PostgreSQL, Redis, Docker).
     3. **Litera**: Next-Gen Digital Reading & Cloud Literature Platform (Next.js/React, TypeScript, Service-Worker Offline Caching, Node.js API, PostgreSQL).
     4. **CatatUang**: Automated Financial Accounting & Double-Entry Ledger Engine (Strict ledger equilibrium, Telegram Bot API, SQLite/PostgreSQL, PM2).
     5. **TokoPOS**: Modern Retail Cashier & Hardware Terminal (Flutter Desktop/Mobile, SQLite/Drift offline-first, ESC/POS thermal printing, barcode burst detection).
     * Include clean tabs or cards with architecture highlights, problem solved, stack pills, and GitHub source links (`https://github.com/friza13/...`).
   - `CapabilitiesMatrix.tsx`: 4 core technical pillars (Distributed Systems & Concurrency, Real-Time Logistics & Routing, Offline-First Client Architecture, Financial Ledger Precision).
   - `InfrastructureDiagram.tsx`: Visual SVG/CSS architecture blueprint showing request flow: Client -> Cloudflare Global Edge -> Zero-Trust Cloudflare Tunnel -> VPS1 Nginx -> Immutable Static Ingress.
   - `ContactSection.tsx`: Official contact card with one-click copy button for `priz@prizftm.my.id`, interactive mailto template generator ("Startup Grant / Partnership", "Engineering Consultation", "Technical Due Diligence"), and GitHub profile link.
   - `Footer.tsx`: Copyright © 2026 Priz Tech, domain `prizftm.my.id`, commit SHA badge, and status indicator.

4. **SEO Optimization (Search Engine Discovery):**
   - In `index.html`:
     - `<title>Priz Tech — Systems Lab & Software Engineering Studio</title>`
     - Meta description, keywords, robots (`index, follow`), canonical URL (`https://prizftm.my.id/`).
     - Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:image`).
     - Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`).
     - Schema.org JSON-LD structured data (`Organization` with name Priz Tech, url https://prizftm.my.id, founder friza13, contactPoint priz@prizftm.my.id; `SoftwareApplication` for featured systems; `WebSite`).
   - In `public/robots.txt`:
     - Allow all crawlers: `User-agent: *\nAllow: /\nSitemap: https://prizftm.my.id/sitemap.xml`.
   - In `public/sitemap.xml`:
     - Valid XML sitemap indexing `https://prizftm.my.id/` with high priority.

5. **Testing & Quality Assurance:**
   - Write comprehensive tests in `tests/` verifying theme configuration, Navbar rendering, Hero headline, all 5 projects rendering in showcase, capabilities matrix, and contact actions.
   - Run tests: `npm run test` (or `npx vitest run`) -> 100% green pass.
   - Verify build: `npm run build` -> compiles cleanly to `dist/` with zero TypeScript or syntax errors.

6. **Git Commits & Push:**
   - Commit atomic phases with conventional commit messages.
   - Push to `origin main` (`https://github.com/friza13/priz-tech`).
