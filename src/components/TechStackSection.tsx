import { Layers, Server, Smartphone, Wrench } from 'lucide-react';

export default function TechStackSection() {
  const stackCategories = [
    {
      title: 'Backend & Distributed Systems',
      icon: Server,
      accent: 'border-cyan-500/30 text-cyan-400',
      skills: [
        { name: 'Go (Golang)', role: 'Modular monoliths, route solvers, concurrency' },
        { name: 'Node.js & TypeScript', role: 'Event pipelines, bot engines, typed APIs' },
        { name: 'PostgreSQL & PostGIS', role: 'Relational data integrity, geospatial matrices' },
        { name: 'Redis', role: 'Geospatial indexing, pub/sub, in-memory caching' },
        { name: 'WebSockets & gRPC', role: 'Low-latency bidirectional streaming' },
        { name: 'OSRM Engine', role: 'Street-network routing & matrix calculations' },
      ],
    },
    {
      title: 'Client, Mobile & Web',
      icon: Smartphone,
      accent: 'border-indigo-500/30 text-indigo-400',
      skills: [
        { name: 'Flutter (Dart)', role: 'Cross-platform mobile & desktop (iOS, Android, Linux)' },
        { name: 'React 19 & Next.js', role: 'High-performance interactive web portals' },
        { name: 'Tailwind CSS', role: 'Zero-runtime utility design systems' },
        { name: 'SQLite & Drift', role: 'Offline-first embedded relational storage' },
        { name: 'Hardware Protocols', role: 'ESC/POS thermal printing, barcode scanners' },
        { name: 'Service Workers', role: 'Offline manuscript caching & PWA resilience' },
      ],
    },
    {
      title: 'DevOps, Edge & Reliability',
      icon: Wrench,
      accent: 'border-emerald-500/30 text-emerald-400',
      skills: [
        { name: 'Cloudflare Zero-Trust', role: 'Encrypted tunnel ingress, edge SSL, DDoS protection' },
        { name: 'Ubuntu 24.04 LTS (VPS1)', role: 'Lean container and system runtime' },
        { name: 'Docker & Compose', role: 'Reproducible micro-environments & services' },
        { name: 'Nginx', role: 'High-speed immutable static asset delivery' },
        { name: 'PM2 & systemd', role: 'Zero-downtime daemon lifecycle supervision' },
        { name: 'GitHub Actions', role: 'Continuous integration, testing & deployment' },
      ],
    },
  ];

  return (
    <section id="stack" className="relative py-20 lg:py-28 bg-[#090b11] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-3 py-1 text-xs font-mono text-slate-300 mb-3">
            <Layers className="h-3 w-3 text-cyan-400" />
            <span>TECHNOLOGY PROFILE</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Battle-Tested Tooling Matrix
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Selected for mathematical reliability, high concurrency, and low compute footprints. No speculative abstractions.
          </p>
        </div>

        {/* Stack Columns */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0f1118] p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg border bg-black/40 ${cat.accent}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-mono text-base font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                        <div className="font-mono text-xs font-semibold text-slate-200">
                          {skill.name}
                        </div>
                        <div className="mt-0.5 text-[11px] text-slate-400">
                          {skill.role}
                        </div>
                      </div>
                    ))}
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
