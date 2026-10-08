import React, { useState } from 'react';
import { Layers, Terminal } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Mobility & Micro-Logistics', 'Supply Chain & Fleet Ops', 'Cloud Publishing & Content', 'Fintech & Event Processing', 'Retail & Hardware Systems'];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#08090d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-mono text-cyan-300 mb-3">
              <Layers className="h-3 w-3 text-cyan-400" />
              <span>FLAGSHIP PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Proven Architecture in Production
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-400">
              Battle-tested systems drawn directly from real engineering challenges. Built with distributed conciseness, mathematical equilibrium, and zero unnecessary dependencies.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <Terminal className="h-4 w-4 text-cyan-400" />
            <span>Repository: <a href="https://github.com/friza13" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-cyan-400 underline decoration-slate-700">github.com/friza13</a></span>
          </div>
        </div>

        {/* Category Filter Pills (Desktop & Mobile) */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-white/5 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'border border-cyan-500/60 bg-cyan-500/15 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                  : 'border border-white/5 bg-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200'
              }`}
            >
              {cat === 'all' ? 'All 5 Systems' : cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featuredIndex={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
