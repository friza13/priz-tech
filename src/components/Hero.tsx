import { ArrowRight, Terminal, ShieldCheck, Database, GitBranch } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-cyber-gradient pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px] pointer-events-none opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Engineering Lab Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-8">
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>SYSTEMS LAB &amp; PRODUCT STUDIO // JAKARTA &amp; GLOBAL</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-6xl text-balance">
            Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
              Distributed Systems
            </span>
            , Mission-Critical Logistics &amp; High-Performance Engines
          </h1>

          {/* Technical Sub-copy */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
            Priz Tech designs, builds, and deploys high-throughput backend services, real-time dispatch algorithms, resilient offline-first client applications, and strict financial accounting engines with zero-waste architecture.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg border border-cyan-500 bg-cyan-500/10 px-6 py-3 font-mono text-sm font-semibold text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all hover:bg-cyan-500 hover:text-black"
            >
              <span>Explore Production Systems</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#architecture"
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/80 px-6 py-3 font-mono text-sm font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white"
            >
              <span>Inspect Architecture</span>
            </a>
          </div>

          {/* Developer Verification Strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs font-mono text-slate-400 border-t border-white/5 pt-6">
            <div className="flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-cyan-400" />
              <span>Domain: <strong className="text-slate-200">prizftm.my.id</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitBranch className="h-3.5 w-3.5 text-indigo-400" />
              <span>Founder: <a href="https://github.com/friza13" target="_blank" rel="noopener noreferrer" className="text-slate-200 underline decoration-slate-600 hover:text-cyan-300">friza13</a></span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Edge: <strong className="text-slate-200">Cloudflare Zero-Trust Ingress</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 text-amber-400" />
              <span>Runtime: <strong className="text-slate-200">Ubuntu 24.04 (VPS1)</strong></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
