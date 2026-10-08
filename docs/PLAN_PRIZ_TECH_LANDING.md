# Priz Tech Official Company Landing Page Implementation Plan & Architectural Spec

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an official, modern, high-credibility company landing page for **Priz Tech** (`prizftm.my.id`) showcasing its software engineering capabilities, distributed systems architecture, and top 5 flagship production projects to qualify for startup accelerator programs (Claude for Startups, AWS Activate), investor due diligence, and enterprise client inquiries.

**Architecture:** Ultra-lightweight static single-page application built with React, Vite, and Tailwind CSS. The interface adopts a high-density dark tech aesthetic (inspired by Linear, Vercel, and Stripe) with crisp typography, subtle grid borders, interactive architectural cards, metric counters, and zero-runtime overhead.

**Tech Stack:** React 19 / TypeScript, Vite, Tailwind CSS v3/v4, Lucide React icons, Vitest + React Testing Library (for unit/component verification), Nginx on Ubuntu 24.04 (VPS1) via Cloudflare Tunnel.

**Spec:** Defined inline within sections 1 through 4 below.

---

## 1. Executive Summary & Brand Identity Spec

### 1.1 Brand Positioning & Objectives
- **Company Name:** Priz Tech
- **Core Positioning:** Software Engineering Lab & High-Throughput Product Studio
- **Founder & Principal Engineer:** friza13 (`github.com/friza13`)
- **Primary Domain:** `prizftm.my.id`
- **Official Inquiries & Contact:** `priz@prizftm.my.id`
- **Strategic Purpose:** Official digital face for startup grant & accelerator programs (Claude for Startups, AWS Activate, Google for Startups), venture scout reviews, and high-stakes client software engineering contracts.
- **Brand Voice:** Technically precise, zero buzzword fluff, architecture-first, mathematically and operationally rigorous. Speaks in terms of throughput, latency, concurrency, fault isolation, and verifiable code.

### 1.2 Target Audience Evaluation Criteria
1. **Startup Program Reviewers (Claude for Startups, AWS Activate):** Need immediate proof of real engineering capabilities, distributed systems literacy, production deployments, and domain legitimacy.
2. **Technical Clients & Partners:** Need to evaluate software engineering standards, system architecture patterns, UI/UX polish, and delivery velocity.
3. **Engineers & Collaborators:** Need to see clean codebases, thoughtful system design, and genuine engineering passion.

---

## 2. Information Architecture (IA)

```
[ Navigation Bar ]
  ├── Brand Mark: PRIZ TECH [Sys: Active 🟢]
  ├── Quick Anchors: [ #projects, #capabilities, #architecture, #stack, #contact ]
  └── Primary CTA: "Initiate Inquiry" (mailto:priz@prizftm.my.id)

[ Section 1: Hero Section ]
  ├── Operational Badge: "SYSTEMS LAB & PRODUCT STUDIO // JAKARTA & GLOBAL"
  ├── Main Headline: "Engineering Distributed Systems, Mission-Critical Logistics & High-Performance Engines"
  ├── Sub-copy: High-density engineering statement on scalable backends, real-time dispatch, and offline-first client architectures.
  ├── CTAs: "Explore Production Systems" (anchor to #projects) & "Inspect Architecture" (anchor to #architecture)
  └── Live Telemetry Banner: Quick status indicators (Ledger Integrity: 100%, Dispatch Latency: <50ms, Memory Footprint: Minimal)

[ Section 2: Quantitative Metrics & Proof Strip ]
  ├── 5+ Production-grade Architectures Engineered
  ├── Sub-50ms Geospatial Driver Matchmaking & Dispatch
  ├── 100% Strict Double-Entry Ledger Equilibrium
  ├── Zero-Downtime Offline-First Local Storage Engine
  └── 2-Opt OSRM Multi-Stop Delivery Route Optimization

[ Section 3: Flagship Production Systems (Top 5 Projects) ]
  ├── 1. AnjemID (Smart Campus Mobility & Micro-Logistics Platform)
  ├── 2. Armada DMS (Enterprise Distribution Management & Fleet Route Optimization)
  ├── 3. Litera (Next-Generation Cloud-Native Literature Platform)
  ├── 4. CatatUang (Automated Financial Accounting & Double-Entry Ledger Engine)
  └── 5. TokoPOS (Modern Retail Cashier & Inventory Management System)
  * Each card includes: Architecture Diagram snippet, Core Problem, Technical Highlights, Real-world Impact, Tech Stack Pills, and Source/Artifact links.

[ Section 4: Engineering Capabilities Matrix ]
  ├── Distributed Systems & Concurrency (Go, Redis, WebSockets, Pub/Sub, Zone Isolation)
  ├── Real-Time Logistics & Geospatial Routing (OSRM, 2-Opt TSP, Geo-indexing, Fleet Telemetry)
  ├── Resilient Offline-First Client Architecture (Drift/SQLite, Service Workers, Multi-stage Sync)
  └── Financial Accounting & Ledger Engines (Double-entry balance, Idempotent event streams, Auditability)

[ Section 5: Architecture & Infrastructure Blueprint ]
  ├── Interactive Visual Flow: Client Request → Cloudflare Edge → Zero-Trust Tunnel → VPS1 Nginx → Static Ingress
  ├── Security & Resilience Principles: Zero public listening ports, automated SSL, immutable builds, 0% server CPU overhead at idle.

[ Section 6: Technology Stack & Tooling Breakdown ]
  ├── Backend & Systems: Go, Node.js / TypeScript, PostgreSQL, Redis, OSRM, Docker
  ├── Client & Applications: Flutter (iOS/Android/Desktop), React, Next.js, Tailwind CSS
  └── DevOps & Infra: Ubuntu Linux, Cloudflare Tunnels, PM2, Nginx, GitHub Actions

[ Section 7: Contact & Engagement Terminal ]
  ├── Frictionless Inquiry Card: Copy email button (`priz@prizftm.my.id`), Mailto trigger, Startup/Client inquiry template selector
  ├── Verified Channels: GitHub (`github.com/friza13`), Telegram, Discord
  └── SLA & Availability: "Technical responses within 24 hours. Open for grant partnerships and selected engineering contracts."

[ Footer ]
  ├── Copyright © 2026 Priz Tech. All rights reserved.
  ├── Domain: prizftm.my.id // Engineering Headquarters
  └── Git Version Stamp & Commit SHA indicator
```

---

## 3. UI/UX Design System Specification

### 3.1 Design Principles
- **Dark Tech Aesthetic:** Inspired by Linear, Vercel, and Stripe Developer pages.
- **High Visual Contrast & Hierarchy:** Deep blacks (`#08090d`), subtle dark slate surfaces (`#10121a`), and crisp white typography (`#f8fafc`).
- **Precision Bordering & Grid Lines:** 1px borders using `border-white/10` and `border-cyan-500/20` with subtle glow highlights on hover.
- **Monospace Accents:** JetBrains Mono / Space Mono for badges, metric counters, architectural parameters, and technical parameters.

### 3.2 Color Tokens
| Token | Hex / Value | Purpose |
|---|---|---|
| `bg-primary` | `#08090d` | Deep base canvas |
| `bg-surface` | `#0f1118` | Elevated card & panel background |
| `bg-surface-elevated` | `#161924` | Hover states, active dropdowns, modal layers |
| `border-subtle` | `rgba(255, 255, 255, 0.08)` | Grid dividers, card borders |
| `border-active` | `rgba(6, 182, 212, 0.4)` | Cyan focus / hover highlight |
| `accent-cyan` | `#06b6d4` (`cyan-500`) | Primary engineering brand accent |
| `accent-indigo` | `#6366f1` (`indigo-500`) | Secondary systems accent |
| `accent-emerald` | `#10b981` (`emerald-500`)| Operational status, health checks |
| `text-primary` | `#f8fafc` (`slate-50`) | Primary titles and body |
| `text-secondary` | `#94a3b8` (`slate-400`) | Technical explanations and descriptions |
| `text-muted` | `#64748b` (`slate-500`) | Badges, timestamps, footer links |

### 3.3 Typography
- **Sans Font:** `Inter`, `system-ui`, `-apple-system`, `sans-serif` (Optimal readability, tight letter spacing `-0.02em` on headers).
- **Monospace Font:** `JetBrains Mono`, `ui-monospace`, `monospace` (For tags, telemetry, code snippets, metrics, and architecture specs).

---

## 4. Technical Stack & Lightweight Architecture Justification

### 4.1 Framework Decision: React + Vite vs. Next.js Static
| Dimension | React + Vite + Tailwind | Next.js (Node / SSR) | Next.js (SSG Export) |
|---|---|---|---|
| **Server Memory (RAM)** | **0 MB (Pure static files on Nginx)** | 120MB - 250MB active Node process | 0 MB (Nginx) |
| **Build Speed** | **< 2.5 seconds** | 15 - 35 seconds | 12 - 25 seconds |
| **Bundle Size** | **~140 KB gzipped** | ~350 KB+ framework overhead | ~260 KB framework overhead |
| **Complexity** | **Zero runtime dependencies** | Requires Node runtime, PM2/Docker | Requires next export configuration |
| **Verdict** | **SELECTED (Ideal for VPS1 zero-RAM footprint)** | Rejected (Unnecessary server overhead) | Rejected (Unnecessary Next.js complexity) |

**Conclusion:** Priz Tech's production server (VPS1) requires lean, zero-waste system management. Serving static assets compiled via Vite directly through Nginx and routed over Cloudflare Tunnel provides near-zero server CPU/RAM usage, infinite edge caching, and instantaneous page load speeds (<50ms TTFB).

---

## 5. Global Constraints & Requirements

- Exact Domain: `prizftm.my.id`
- Exact Contact Email: `priz@prizftm.my.id`
- Exact Founder GitHub: `https://github.com/friza13`
- Top 5 Featured Projects:
  1. `AnjemID` (Smart Campus Mobility & Micro-Logistics Platform)
  2. `Armada DMS` (Enterprise Distribution Management & Fleet Route Optimization)
  3. `Litera` (Next-Generation Digital Reading & Publication Platform)
  4. `CatatUang` (Automated Financial Accounting & Double-Entry Ledger Engine)
  5. `TokoPOS` (Modern Retail Cashier & Inventory Management System)
- Zero generic placeholder text (no "Lorem Ipsum", no fake project placeholders).
- Responsive layout across standard screen sizes: Mobile (<640px), Tablet (768px), Desktop (1024px+).
- Accessible contrast ratios (WCAG AA compliant) across all dark surfaces.
- SEO & Meta Tags: Valid OpenGraph, Twitter Cards, and `application/ld+json` Organization schema for startup program validation.

---

## 6. Review Focus

1. **Email Copy & Mailto Handling:** When the user clicks "Copy Email" or "Send Inquiry", clipboard copy must succeed with fallback toast notification, and `mailto:priz@prizftm.my.id` must contain prefilled subject lines.
2. **Project Showcase Modals / Detail Toggles:** The project technical deep-dive details (architecture, stack, highlights) must render seamlessly without page stutter or layout shifts.
3. **Responsive Navigation on Mobile Devices:** Navigation menu on viewports < 768px must collapse into a clean hamburger/sheet menu without breaking viewport width or causing horizontal scrollbars.
4. **Static Assets & SVGs:** All system architecture diagrams and icons must be SVG / CSS based to avoid 404 image errors and external CDN latency.
5. **SEO & Structured Data Verification:** The `index.html` file must contain valid JSON-LD metadata identifying Priz Tech as a Software Development Organization.

---

## 7. Step-by-Step Implementation Roadmap

### Phase 1: Project Scaffolding, Tooling & Design Tokens

#### Task 1.1: Initialize React + Vite + TypeScript Project
**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `index.html`
- Test: `tests/setup.test.ts`

**Interfaces:**
- Produces: Project root configuration, scripts (`dev`, `build`, `test`, `preview`).

- [ ] **Step 1: Write test to verify environment and test harness**
```typescript
import { describe, it, expect } from 'vitest';

describe('Environment Harness', () => {
  it('confirms vitest runner operates correctly', () => {
    expect(true).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails (before setup)**
Run: `npm test`
Expected: FAIL / command not found before installation.

- [ ] **Step 3: Setup project configuration, dependencies, and vitest config**
Install: React 19, Lucide React, Tailwind CSS, PostCSS, Autoprefixer, Vitest, @testing-library/react, @testing-library/jest-dom, jsdom.

- [ ] **Step 4: Run test to verify it passes**
Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add package.json vite.config.ts tsconfig.json index.html tests/
git commit -m "chore: scaffold react vite typescript project with testing harness"
```

---

#### Task 1.2: Configure Tailwind CSS & Design Token System
**Files:**
- Create: `tailwind.config.js`, `postcss.config.js`, `src/index.css`
- Test: `tests/theme.test.ts`

**Interfaces:**
- Produces: Dark tech design tokens (`bg-primary`, `bg-surface`, `accent-cyan`, monospace font family).

- [ ] **Step 1: Write test for theme color values and utility availability**
```typescript
import { describe, it, expect } from 'vitest';
import tailwindConfig from '../tailwind.config.js';

describe('Design Tokens Configuration', () => {
  it('contains custom brand color tokens', () => {
    const colors = tailwindConfig.theme.extend.colors;
    expect(colors['tech-black']).toBe('#08090d');
    expect(colors['tech-surface']).toBe('#0f1118');
    expect(colors['tech-cyan']).toBe('#06b6d4');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/theme.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement `tailwind.config.js` and `src/index.css` with token definitions**
Define dark theme tokens, subtle radial gradients, and custom scrollbar rules.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/theme.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add tailwind.config.js postcss.config.js src/index.css tests/theme.test.ts
git commit -m "style: configure tailwind tokens and dark tech aesthetic styling"
```

---

### Phase 2: Navigation, Hero Section & Real-Time Telemetry

#### Task 2.1: Navigation Bar & Operational Status Indicator
**Files:**
- Create: `src/components/Navbar.tsx`
- Test: `tests/Navbar.test.tsx`

**Interfaces:**
- Consumes: Nav links (`#projects`, `#capabilities`, `#architecture`, `#contact`), official email.
- Produces: `<Navbar />` component with mobile drawer and live operational pulse indicator.

- [ ] **Step 1: Write test for Navbar brand rendering and navigation anchors**
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '../src/components/Navbar';

describe('Navbar Component', () => {
  it('renders Priz Tech brand mark and active system status', () => {
    render(<Navbar />);
    expect(screen.getByText(/PRIZ TECH/i)).toBeInTheDocument();
    expect(screen.getByText(/SYSTEMS ACTIVE/i)).toBeInTheDocument();
  });

  it('contains link to project showcase and contact trigger', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/Navbar.test.tsx`
Expected: FAIL.

- [ ] **Step 3: Implement `Navbar.tsx`**
Build sticky blurred header (`backdrop-blur-md bg-tech-black/80 border-b border-white/10`), active status badge, desktop menu, mobile hamburger toggle, and direct CTA.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/Navbar.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add src/components/Navbar.tsx tests/Navbar.test.tsx
git commit -m "feat: implement high-contrast navigation bar with live status indicator"
```

---

#### Task 2.2: Hero Section & Engineering Metrics Strip
**Files:**
- Create: `src/components/Hero.tsx`, `src/components/MetricsStrip.tsx`
- Test: `tests/Hero.test.tsx`

**Interfaces:**
- Consumes: Metrics data array (`productionArchitectures`, `dispatchLatency`, `ledgerEquilibrium`, `offlineFirst`).
- Produces: `<Hero />` and `<MetricsStrip />` components.

- [ ] **Step 1: Write test for Hero headline, CTA buttons, and metric counters**
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../src/components/Hero';

describe('Hero Component', () => {
  it('renders engineering lab headline and action triggers', () => {
    render(<Hero />);
    expect(screen.getByText(/Engineering Distributed Systems/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /explore production systems/i })).toHaveAttribute('href', '#projects');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/Hero.test.tsx`
Expected: FAIL.

- [ ] **Step 3: Implement `Hero.tsx` and `MetricsStrip.tsx`**
Create the dark gradient grid hero, terminal accent pill ("SYSTEMS LAB // VERIFIABLE PRODUCTION CODE"), call-to-action buttons, and the 5-point quantitative metrics strip.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/Hero.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add src/components/Hero.tsx src/components/MetricsStrip.tsx tests/Hero.test.tsx
git commit -m "feat: implement hero section and quantitative engineering metrics strip"
```

---

### Phase 3: Flagship Project Showcase (Top 5 Projects)

#### Task 3.1: Project Data Model & Flagship Showcase Cards
**Files:**
- Create: `src/data/projectsData.ts`, `src/components/ProjectCard.tsx`, `src/components/ProjectsShowcase.tsx`
- Test: `tests/ProjectsShowcase.test.tsx`

**Interfaces:**
- Consumes: Strict data array of 5 projects: `AnjemID`, `Armada DMS`, `Litera`, `CatatUang`, `TokoPOS`.
- Produces: Project showcase with expandable architecture details, stack pills, and GitHub links.

- [ ] **Step 1: Write test verifying all 5 flagship projects are rendered with required architectural details**
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsShowcase from '../src/components/ProjectsShowcase';
import { projectsData } from '../src/data/projectsData';

describe('ProjectsShowcase Component', () => {
  it('renders all 5 founder flagship projects', () => {
    render(<ProjectsShowcase />);
    expect(projectsData).toHaveLength(5);
    expect(screen.getByText(/AnjemID/i)).toBeInTheDocument();
    expect(screen.getByText(/Armada DMS/i)).toBeInTheDocument();
    expect(screen.getByText(/Litera/i)).toBeInTheDocument();
    expect(screen.getByText(/CatatUang/i)).toBeInTheDocument();
    expect(screen.getByText(/TokoPOS/i)).toBeInTheDocument();
  });

  it('displays architectural highlights for each system', () => {
    render(<ProjectsShowcase />);
    expect(screen.getByText(/Redis geospatial/i)).toBeInTheDocument();
    expect(screen.getByText(/2-Opt TSP/i)).toBeInTheDocument();
    expect(screen.getByText(/Double-entry ledger/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/ProjectsShowcase.test.tsx`
Expected: FAIL.

- [ ] **Step 3: Implement `projectsData.ts`, `ProjectCard.tsx`, and `ProjectsShowcase.tsx`**
Fill with exact, deep architectural specs for each project:
1. **AnjemID:** Smart Campus Mobility & Micro-Logistics Platform (Flutter, Go/Node.js, Redis, PostgreSQL, WebSockets).
2. **Armada DMS:** Enterprise Distribution Management & Fleet Route Optimization (Go Modular Monolith, OSRM Routing, 2-Opt TSP, PostgreSQL, Redis, Docker).
3. **Litera:** Next-Gen Cloud-Native Literature Platform (Next.js/React, TypeScript, Service-Worker Offline Caching, Node.js API, PostgreSQL).
4. **CatatUang:** Automated Financial Accounting Engine (Strict double-entry equilibrium, Telegram Bot API, SQLite/PostgreSQL, PM2).
5. **TokoPOS:** Modern Retail Cashier & Hardware Terminal (Flutter Desktop/Mobile, SQLite/Drift offline-first, ESC/POS thermal printing, barcode burst detection).

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/ProjectsShowcase.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add src/data/projectsData.ts src/components/ProjectCard.tsx src/components/ProjectsShowcase.tsx tests/ProjectsShowcase.test.tsx
git commit -m "feat: implement top 5 flagship production projects showcase with architectural deep-dives"
```

---

### Phase 4: Capabilities, Infrastructure Blueprint & Contact Terminal

#### Task 4.1: Capabilities Matrix & Infrastructure Blueprint
**Files:**
- Create: `src/components/CapabilitiesMatrix.tsx`, `src/components/InfrastructureDiagram.tsx`
- Test: `tests/Capabilities.test.tsx`

**Interfaces:**
- Produces: Engineering capability breakdown (Distributed Systems, Real-Time Logistics, Offline-First, Financial Accounting) and VPS1/Cloudflare Tunnel architecture flow diagram.

- [ ] **Step 1: Write test for Capabilities and Infrastructure sections**
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CapabilitiesMatrix from '../src/components/CapabilitiesMatrix';
import InfrastructureDiagram from '../src/components/InfrastructureDiagram';

describe('Capabilities & Infrastructure', () => {
  it('renders 4 core engineering domains', () => {
    render(<CapabilitiesMatrix />);
    expect(screen.getByText(/Distributed Systems & Concurrency/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-Time Logistics & Geospatial/i)).toBeInTheDocument();
    expect(screen.getByText(/Offline-First Architectures/i)).toBeInTheDocument();
    expect(screen.getByText(/Financial Ledger Engines/i)).toBeInTheDocument();
  });

  it('renders edge-to-server zero-trust infrastructure diagram', () => {
    render(<InfrastructureDiagram />);
    expect(screen.getByText(/Cloudflare Tunnel Ingress/i)).toBeInTheDocument();
    expect(screen.getByText(/Zero Public Ports/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/Capabilities.test.tsx`
Expected: FAIL.

- [ ] **Step 3: Implement `CapabilitiesMatrix.tsx` and `InfrastructureDiagram.tsx`**
Build interactive capability grid cards and clean SVG/CSS flow diagrams showing request ingress from Cloudflare Edge through Cloudflare Tunnel into VPS1 Nginx.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/Capabilities.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add src/components/CapabilitiesMatrix.tsx src/components/InfrastructureDiagram.tsx tests/Capabilities.test.tsx
git commit -m "feat: implement core engineering capabilities matrix and edge infrastructure blueprint"
```

---

#### Task 4.2: Contact & Inquiry Terminal, Footer, and Metadata Schema
**Files:**
- Create: `src/components/ContactSection.tsx`, `src/components/Footer.tsx`, `src/App.tsx`
- Modify: `index.html`
- Test: `tests/ContactAndFooter.test.tsx`

**Interfaces:**
- Consumes: Official email `priz@prizftm.my.id`, founder GitHub `https://github.com/friza13`.
- Produces: High-credibility inquiry terminal with copy email action, template mailto triggers, footer credentials, and SEO JSON-LD schema.

- [ ] **Step 1: Write test for contact details, copy functionality, and footer links**
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';

describe('Contact & Footer Components', () => {
  it('renders official contact email and copy action', () => {
    render(<ContactSection />);
    expect(screen.getByText('priz@prizftm.my.id')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /copy email/i })).toBeInTheDocument();
  });

  it('renders footer with domain and founder github link', () => {
    render(<Footer />);
    expect(screen.getByText(/prizftm.my.id/i)).toBeInTheDocument();
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/friza13');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/ContactAndFooter.test.tsx`
Expected: FAIL.

- [ ] **Step 3: Implement `ContactSection.tsx`, `Footer.tsx`, assemble in `App.tsx`, and add JSON-LD to `index.html`**
Include clipboard copy toast, pre-formatted mailto templates ("Startup Program Inquiry", "Engineering Consulting", "Technical Due Diligence"), copyright 2026, and Organization schema.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/ContactAndFooter.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add src/components/ContactSection.tsx src/components/Footer.tsx src/App.tsx index.html tests/ContactAndFooter.test.tsx
git commit -m "feat: implement contact inquiry terminal, footer, and organization metadata schema"
```

---

## 8. VPS1 Deployment & Cloudflare Tunnel Ingress Strategy

### 8.1 Deployment Architecture (Zero-RAM Static Hosting)
```
[ Global Client Request ]
           │
           ▼
[ Cloudflare Global Edge (SSL Termination, DDoS Mitigation, Caching) ]
           │
           ▼ (Encrypted Cloudflare Tunnel / QUIC Protocol)
[ VPS1 Ubuntu 24.04: cloudflared daemon (< 15MB RAM) ]
           │
           ▼ (Local Unix Socket or localhost:8080)
[ Nginx Static Server (< 2MB RAM worker) ]
           │
           ▼
[ /var/www/priz-tech/dist (Immutable static assets: HTML, CSS, JS) ]
```

### 8.2 Production Nginx Configuration Snippet (`/etc/nginx/sites-available/priz-tech`)
```nginx
server {
    listen 127.0.0.1:8080;
    server_name prizftm.my.id;

    root /var/www/priz-tech/dist;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css text/xml application/json application/javascript application/xml+rss application/atom+xml image/svg+xml;

    # Security Headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; script-src 'self'; connect-src 'self';" always;

    # Static Asset Caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA Fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 8.3 Cloudflare Tunnel Ingress (`~/.cloudflared/config.yml`)
```yaml
tunnel: <TUNNEL_ID>
credentials-file: /etc/cloudflared/<TUNNEL_ID>.json

ingress:
  - hostname: prizftm.my.id
    service: http://127.0.0.1:8080
  - service: http_status:404
```

---

## 9. Quality & Verification Gates

1. **Unit & Component Testing:**
   - Command: `npm run test`
   - Requirement: 100% pass across all component suites (Navbar, Hero, ProjectsShowcase, Capabilities, ContactSection, Footer).
2. **Production Build Validation:**
   - Command: `npm run build`
   - Requirement: Zero TypeScript errors, zero lint warnings, bundle output < 200KB gzipped.
3. **Visual & Responsive Testing:**
   - Viewports: Mobile 375px (iPhone SE), Mobile 390px (iPhone 14), Tablet 768px (iPad Mini), Desktop 1280px (MacBook Air), Large Desktop 1920px.
   - Requirement: Zero horizontal scrollbar overflow, all cards responsive and readable.
4. **Link & Email Verification:**
   - Requirement: `priz@prizftm.my.id` copy trigger functional; `https://github.com/friza13` leads directly to founder profile; all internal anchor tags scroll smoothly to target sections.
5. **Lighthouse Performance Target:**
   - Performance: ≥ 98
   - Accessibility: 100
   - Best Practices: 100
   - SEO: 100
