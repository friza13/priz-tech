import { Terminal, ArrowUpRight } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/10 bg-[#06070a] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Brand & Mission Statement */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
                <Terminal className="h-3.5 w-3.5" />
              </div>
              <span className="font-mono text-sm font-bold tracking-wider text-white">
                PRIZ TECH
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400 text-center sm:text-left max-w-sm">
              Software engineering lab &amp; high-throughput product studio. Specialized in distributed logistics, fintech engines, and offline-first client systems.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#capabilities" className="hover:text-cyan-400 transition-colors">Capabilities</a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#stack" className="hover:text-cyan-400 transition-colors">Stack</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Verified Founder & Operational Status */}
          <div className="flex flex-col items-center sm:items-end gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Founder:</span>
              <a
                href="https://github.com/friza13"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-1 text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>friza13</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <span>All systems active // {currentYear}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Infrastructure Stamp */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row text-[11px] font-mono text-slate-400">
          <div>
            © {currentYear} Priz Tech. All rights reserved. Registered domain: <strong className="text-slate-300">prizftm.my.id</strong>
          </div>

          <div className="flex items-center gap-3">
            <span>VPS1 Ingress: <strong className="text-slate-300">Cloudflare Tunnel</strong></span>
            <span>•</span>
            <span>Static Footprint: <strong className="text-slate-300">&lt;2MB</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
