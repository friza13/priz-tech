export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  tagline: string;
  problem: string;
  architectureHighlights: string[];
  coreImpact: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  metrics: {
    label: string;
    value: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: 'anjem-id',
    name: 'AnjemID',
    category: 'Mobility & Micro-Logistics',
    badge: 'Real-Time Telemetry',
    tagline: 'Smart Campus Mobility & Hyper-Local Delivery Platform',
    problem: 'University campus ecosystems suffer from uncoordinated informal transport, lack of driver location visibility, and inefficient manual dispatching.',
    architectureHighlights: [
      'Redis geospatial driver matchmaking with radius filtering and haversine sorting',
      'Dual-zone passenger and driver state isolation with role-based WebSocket channels',
      'Sub-50ms dispatch latency for instantaneous ride assignment and route tracking',
      'Integrated cashless transaction ledger with automated fare calculation',
    ],
    coreImpact: 'Eliminated manual coordination overhead with sub-50ms automated driver-passenger matchmaking across university campuses.',
    stack: ['Flutter', 'Go', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets'],
    githubUrl: 'https://github.com/friza13/anjem-backend',
    metrics: {
      label: 'Dispatch Latency',
      value: '<50ms',
    },
  },
  {
    id: 'armada-dms',
    name: 'Armada DMS',
    category: 'Supply Chain & Fleet Ops',
    badge: 'Routing & Optimization',
    tagline: 'Enterprise Distribution Management & Multi-Stop Delivery Optimization',
    problem: 'Regional FMCG and logistics distributors face exponential routing costs when planning dozens of daily delivery waypoints manually across constrained urban sectors.',
    architectureHighlights: [
      '2-Opt TSP route optimization engine integrated with Open Source Routing Machine (OSRM)',
      'Automated Proof of Delivery (POD) pipeline with image normalization and EXIF geovalidation',
      'Regional multi-zone warehouse isolation ensuring independent regional route matrices',
      'Go modular monolith architecture handling concurrent waypoint recalculations',
    ],
    coreImpact: 'Reduced multi-stop route distances by up to 28% while generating optimal delivery sequences for dozens of stops in sub-second compute times.',
    stack: ['Go', 'OSRM Engine', 'PostgreSQL', 'Redis', 'Docker', 'REST API'],
    githubUrl: 'https://github.com/friza13/armada-dms',
    metrics: {
      label: 'TSP Optimization',
      value: '2-Opt OSRM',
    },
  },
  {
    id: 'litera',
    name: 'Litera',
    category: 'Cloud Publishing & Content',
    badge: 'Offline-First Web',
    tagline: 'Next-Generation Digital Reading & Publication Platform',
    problem: 'Traditional digital reading platforms suffer from sluggish rendering, intrusive DRM layers, and total unavailability under intermittent cellular connections.',
    architectureHighlights: [
      'Modular reader architecture providing distraction-free customizable typography and layout engines',
      'Offline Service-Worker caching layer allowing whole-manuscript caching on first load',
      'Cryptographic asset protection preventing unauthorized content scraping without sacrificing rendering speed',
      'High-performance server-rendered catalog and chapter indexing pipeline',
    ],
    coreImpact: 'Delivers instantaneous page flips, zero layout shifts, and full offline-first reading resilience regardless of network quality.',
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/friza13/litera',
    metrics: {
      label: 'Offline Availability',
      value: '100% Caching',
    },
  },
  {
    id: 'catatuang',
    name: 'CatatUang',
    category: 'Fintech & Event Processing',
    badge: 'Financial Equilibrium',
    tagline: 'Automated Financial Accounting & Double-Entry Ledger Engine',
    problem: 'SMEs and micro-businesses lose financial clarity due to tedious accounting software and error-prone single-entry bookkeeping spreadsheets.',
    architectureHighlights: [
      'Strict double-entry ledger equilibrium guaranteeing mathematical balance (Debits == Credits)',
      'Automated natural language transaction parser processing conversational Telegram messages',
      'Idempotent event processing preventing duplicate debit/credit journal entries',
      'Multi-currency and multi-account ledger segmentation with comprehensive audit trail',
    ],
    coreImpact: 'Enables zero-friction bookkeeping via conversational Telegram bots with mathematically verified double-entry balance sheets.',
    stack: ['Node.js', 'TypeScript', 'Telegram Bot API', 'PostgreSQL', 'SQLite', 'PM2'],
    githubUrl: 'https://github.com/friza13/catatuang',
    metrics: {
      label: 'Balance Accuracy',
      value: '100% Equilibrium',
    },
  },
  {
    id: 'tokopos',
    name: 'TokoPOS',
    category: 'Retail & Hardware Systems',
    badge: 'Hardware & Offline-First',
    tagline: 'Modern Retail Cashier & Peripheral Inventory Terminal',
    problem: 'Retail cashier counters face revenue loss during internet blackouts and struggle with fragile peripheral integrations (thermal printers and barcode scanners).',
    architectureHighlights: [
      'ESC/POS thermal printer engine supporting raw byte rasterization and cash drawer kicking',
      'High-speed hardware barcode scanner burst detection with debounced keystroke capture',
      'Offline-first local relational database (SQLite/Drift) with conflict-free background synchronization',
      'Multi-store inventory reconciliation with atomic inventory decrement guards',
    ],
    coreImpact: 'Provides sub-second checkout speeds and full operational continuity with zero dependency on active internet connectivity.',
    stack: ['Flutter', 'SQLite', 'Drift', 'ESC/POS Protocol', 'REST API'],
    githubUrl: 'https://github.com/friza13/tokopos',
    metrics: {
      label: 'Local Latency',
      value: 'Sub-second',
    },
  },
];
