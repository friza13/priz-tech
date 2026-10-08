import React from 'react';
import { Layers, Zap, Scale, Navigation, Cpu } from 'lucide-react';

export interface MetricItem {
  icon: React.ElementType;
  value: string;
  label: string;
  detail: string;
}

export const metricsData: MetricItem[] = [
  {
    icon: Layers,
    value: '5+',
    label: 'Production Architectures',
    detail: 'Distributed, logistics & accounting systems deployed',
  },
  {
    icon: Zap,
    value: '<50ms',
    label: 'Dispatch Latency',
    detail: 'Redis geospatial indexing & low-latency WebSocket push',
  },
  {
    icon: Scale,
    value: '100%',
    label: 'Ledger Equilibrium',
    detail: 'Strict double-entry balance with mathematical consistency',
  },
  {
    icon: Navigation,
    value: '2-Opt',
    label: 'OSRM Route Optimization',
    detail: 'Multi-stop delivery TSP solver with zone-bounded matrix',
  },
  {
    icon: Cpu,
    value: '0 MB',
    label: 'Server Idle Footprint',
    detail: 'Static edge architecture running on Nginx & Cloudflare Tunnel',
  },
];

export default function MetricsStrip() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-[#0c0e15]/90 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {metricsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-xl border border-white/5 bg-[#0f1118]/80 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#141722] hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-400 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-2.5">
                  <div className="text-xs font-semibold text-slate-200">
                    {item.label}
                  </div>
                  <div className="mt-1 text-[11px] leading-relaxed text-slate-400">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
