# PLAN MODE DIRECTIVE: PRIZ TECH OFFICIAL COMPANY LANDING PAGE

## Context & Objectives
You are the primary software engineer at Priz Tech.
The user needs an official, modern, high-credibility company landing page for "Priz Tech" (a software development company & tech product studio).
This website will serve as the official digital presence for startup program applications (such as Claude for Startups, AWS Activate, investor reviews, and client inquiries).
Official Domain: `prizftm.my.id`
Official Contact Email: `priz@prizftm.my.id`

## Strict Constraint: PLAN MODE ONLY
- DO NOT generate application code or run build steps yet.
- Focus 100% of this turn on formulating a comprehensive Architectural Specification, UI/UX Design System, and Detailed Implementation Plan.
- Output the plan into `docs/PLAN_PRIZ_TECH_LANDING.md`.

## Company Profile & Top 5 Real Featured Projects
The company profile must showcase Priz Tech as a serious software engineering lab specializing in distributed systems, real-time logistics, modern web/mobile applications, and financial accounting engines.
The Top 5 featured projects must be drawn from real GitHub projects of the founder (`friza13`), strictly excluding campus homework assignments:
1. **AnjemID (Smart Campus Mobility & Micro-Logistics Platform)**
   - Overview: On-demand ride-hailing and hyper-local parcel/food delivery platform for university ecosystems.
   - Core Architecture: Redis geospatial driver matchmaking, dual-zone passenger/driver isolation, low-latency WebSocket dispatch, and integrated cashless wallet.
   - Stack: Flutter (Mobile), Go/Node.js backend, PostgreSQL, Redis, WebSockets.
2. **Armada DMS (Enterprise Distribution Management & Fleet Route Optimization)**
   - Overview: High-throughput logistics management and multi-stop delivery route optimization system for supply chain distributors.
   - Core Architecture: 2-Opt TSP route optimization engine via OSRM, automated Proof of Delivery (POD) image normalization, and regional multi-zone isolation.
   - Stack: Go Modular Monolith, PostgreSQL, Redis, OSRM Routing Engine, Docker.
3. **Litera (Next-Generation Digital Reading & Publication Platform)**
   - Overview: Cloud-native literature platform and interactive web reader delivering seamless typography and distraction-free digital literature.
   - Core Architecture: Modular reader UX, offline service-worker caching, cryptographic asset protection, and high-performance server-rendered catalog.
   - Stack: Next.js / React, TypeScript, Node.js API, PostgreSQL.
4. **CatatUang (Automated Financial Accounting & Double-Entry Ledger Engine)**
   - Overview: Automated financial bookkeeping platform integrating conversational Telegram bots with real-time financial tracking.
   - Core Architecture: Strict double-entry ledger equilibrium, automated transaction parsing, multi-currency accounting, and zero-downtime event processing.
   - Stack: Node.js, SQLite/PostgreSQL, Telegram Bot API, PM2.
5. **TokoPOS (Modern Retail Cashier & Inventory Management System)**
   - Overview: High-speed retail point-of-sale terminal with offline-first local database and hardware peripherals integration.
   - Core Architecture: ESC/POS thermal printer engine, high-speed hardware barcode scanner burst detection, real-time stock sync, and multi-store reporting.
   - Stack: Flutter Desktop/Mobile, SQLite / Drift, REST API.

## Design Philosophy & Aesthetics
- Avoid generic AI-generated templates or repetitive placeholder text.
- Follow modern design standards inspired by Linear, Vercel, and Stripe (dark tech aesthetic, crisp typography, subtle grid borders, interactive cards, badge indicators, and high visual hierarchy).
- Framework choice: React + Vite + Tailwind CSS (Ultra-lightweight, fast static build, zero memory footprint on server).
- Deployment Target: VPS1 (Ubuntu 24.04, Nginx static serving on port 80 / Cloudflare Tunnel mapped to `prizftm.my.id`).

## What to Produce in `docs/PLAN_PRIZ_TECH_LANDING.md`:
1. Executive Summary & Brand Identity Spec
2. Information Architecture (Navbar, Hero, Metrics, 5 Project Showcases, Tech Capabilities, Architecture & Infrastructure, Contact & Inquiry Form, Footer)
3. UI/UX Design System Specification (Color tokens, Typography, Component hierarchy, Micro-interactions)
4. Technical Stack & Lightweight Architecture Justification (React + Vite + Tailwind CSS vs Next.js static)
5. Step-by-Step Implementation Roadmap (Phases 1 through 4)
6. VPS1 Deployment & Cloudflare Tunnel Ingress Strategy (Zero-RAM impact on VPS1)
7. Quality & Verification Gates (Lighthouse score, responsive test, zero broken links)
