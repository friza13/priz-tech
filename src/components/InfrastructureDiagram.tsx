import React from 'react';
import { Globe, Shield, Terminal, Server, Lock, ArrowRight, Zap, Check } from 'lucide-react';

export default function InfrastructureDiagram() {
  const flowSteps = [
    {
      step: '01',
      title: 'Global Client Request',
      subtitle: 'prizftm.my.id',
      detail: 'Worldwide HTTP/3 & QUIC ingress with DNS routing.',
      icon: Globe,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-950/20',
    },
    {
      step: '02',
      title: 'Cloudflare Global Edge',
      subtitle: 'SSL & DDoS Mitigation',
      detail: 'Edge SSL termination, bot protection, and immutable cache.',
      icon: Shield,
      color: 'text-indigo-400',
      border: 'border-indigo-500/30',
      bg: 'bg-indigo-950/20',
    },
    {
      step: '03',
      title: 'Cloudflare Tunnel Ingress',
      subtitle: 'Zero Public Ports',
      detail: 'Encrypted outbound tunnel. Zero inbound firewall open ports.',
      icon: Lock,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-950/20',
    },
    {
      step: '04',
      title: 'Nginx Static Server',
      subtitle: 'VPS1 Ubuntu 24.04',
      detail: 'Ultra-lightweight static asset server (<2MB memory footprint).',
      icon: Server,
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-950/20',
    },
  ];

  return (
    <section id="architecture" className="relative py-20 lg:py-28 bg-[#08090d] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-xs font-mono text-emerald-300 mb-3">
            <Lock className="h-3 w-3 text-emerald-400" />
            <span>INFRASTRUCTURE BLUEPRINT</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Edge Ingress &amp; Zero-Trust Topology
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Engineered with a zero-attack-surface topology. All traffic reaches our production server via encrypted Cloudflare Tunnels with zero publicly open listening ports.
          </p>
        </div>

        {/* Visual Architecture Flow */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {flowSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-xl border ${item.border} ${item.bg} p-6 backdrop-blur-sm transition-all hover:scale-[1.02] duration-200`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      STAGE {item.step}
                    </span>
                    <div className={`p-2 rounded-lg border border-white/10 ${item.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <div className={`mt-0.5 font-mono text-xs font-semibold ${item.color}`}>
                    {item.subtitle}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    {item.detail}
                  </p>
                </div>

                {idx < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Technical Specs Callout */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-[#0f1118] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <h4 className="font-mono text-base font-bold text-white flex items-center gap-2">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span>Zero Server Memory Footprint Architecture</span>
              </h4>
              <p className="text-xs text-slate-400 max-w-2xl">
                By compiling our user-facing frontends into pure static bundles served by Nginx behind Cloudflare QUIC edge tunnels, server memory overhead remains under 5MB total, ensuring 100% compute headroom for background services.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3.5 py-2">
                <Zap className="h-3.5 w-3.5 text-cyan-400" />
                <span className="text-slate-300">Edge TTFB: <strong className="text-white">&lt;25ms</strong></span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3.5 py-2">
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-slate-300">Public Ports Open: <strong className="text-white">0</strong></span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3.5 py-2">
                <Server className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-slate-300">RAM at Idle: <strong className="text-white">~0 MB</strong></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
