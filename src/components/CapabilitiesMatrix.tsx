import { Cpu, MapPin, HardDrive, Calculator, CheckCircle } from 'lucide-react';

interface Pillar {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  tag: string;
  points: string[];
  techStack: string[];
}

export const capabilities: Pillar[] = [
  {
    title: 'Distributed Systems & Concurrency',
    subtitle: 'High-throughput microservices and modular monoliths designed for zero state corruption.',
    icon: Cpu,
    tag: 'Core Systems',
    points: [
      'Low-latency WebSocket & gRPC bi-directional messaging pipelines',
      'Geospatial indexing & pub/sub streaming via in-memory Redis clusters',
      'Dual-zone tenant & actor state isolation preventing unauthorized boundary crossing',
      'Idempotent request execution guarantees with distributed deduplication locks',
    ],
    techStack: ['Go', 'Node.js / TS', 'Redis', 'PostgreSQL', 'WebSockets', 'Docker'],
  },
  {
    title: 'Real-Time Logistics & Geospatial',
    subtitle: 'Dynamic routing, dispatch matchmaking, and automated supply chain workflows.',
    icon: MapPin,
    tag: 'Algorithms & Fleet',
    points: [
      '2-Opt Traveling Salesperson (TSP) heuristic multi-stop route optimization',
      'Open Source Routing Machine (OSRM) integration for street-network matrix computations',
      'Automated Proof of Delivery (POD) image normalization and EXIF geovalidation',
      'Telemetry ingestion and driver-passenger proximity matching under 50ms',
    ],
    techStack: ['OSRM', '2-Opt TSP', 'Go', 'Redis Geospatial', 'Docker', 'PostGIS'],
  },
  {
    title: 'Offline-First Architectures',
    subtitle: 'Resilient client-side applications that maintain 100% functionality without network availability.',
    icon: HardDrive,
    tag: 'Client Resilience',
    points: [
      'Local relational database sync engines using SQLite, Drift, and IndexedDB',
      'Service-Worker caching strategies for instant application rendering and media access',
      'Hardware peripheral protocols (ESC/POS thermal printers, USB/Bluetooth barcode scanners)',
      'Deterministic conflict resolution and background reconciliation queues',
    ],
    techStack: ['Flutter (Desktop/Mobile)', 'React', 'SQLite / Drift', 'Service Workers', 'ESC/POS'],
  },
  {
    title: 'Financial Ledger Engines',
    subtitle: 'Mathematically rigorous double-entry accounting with audit trails.',
    icon: Calculator,
    tag: 'Fintech Precision',
    points: [
      'Strict double-entry ledger balance constraints ensuring Debits identically equal Credits',
      'Multi-currency and multi-entity account ledger segmentation with immutable journals',
      'Conversational transaction ingestion via bot interfaces with natural language parsing',
      'Zero-downtime event processing with point-in-time financial audit recovery',
    ],
    techStack: ['TypeScript', 'PostgreSQL', 'SQLite', 'Telegram Bot API', 'PM2', 'Node.js'],
  },
];

export default function CapabilitiesMatrix() {
  return (
    <section id="capabilities" className="relative py-20 lg:py-28 bg-[#0b0d14] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/30 px-3 py-1 text-xs font-mono text-indigo-300 mb-3">
            <Cpu className="h-3 w-3 text-indigo-400" />
            <span>ENGINEERING PILLARS</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Core Technical Capabilities
          </h2>
          <p className="mt-3 text-base text-slate-400">
            We specialize in four primary software engineering domains, delivering predictable performance, mathematical precision, and zero-downtime client experiences.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {capabilities.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0f1118] p-6 sm:p-8 transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#141724] hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-950/40 text-indigo-400 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] font-semibold text-slate-300">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {pillar.subtitle}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs text-slate-300">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-cyan-400" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded border border-white/5 bg-black/40 px-2 py-0.5 font-mono text-[10px] text-slate-400"
                      >
                        {tech}
                      </span>
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
