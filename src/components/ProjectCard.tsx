import React from 'react';
import { ExternalLink, Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { ProjectItem } from '../data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
  featuredIndex?: number;
}

export default function ProjectCard({ project, featuredIndex }: ProjectCardProps) {
  return (
    <div
      id={project.id}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0f1118] p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#131622] hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
    >
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 -mr-4 -mt-4 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

      <div>
        {/* Card Header: Category & Metric Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              {project.category}
            </span>
            {featuredIndex !== undefined && (
              <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                0{featuredIndex + 1}
              </span>
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 font-mono text-xs font-medium text-cyan-300">
            <ShieldCheck className="h-3 w-3 text-cyan-400" />
            <span>{project.badge}</span>
          </div>
        </div>

        {/* Project Title & Tagline */}
        <div className="mt-4">
          <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-300">
            {project.tagline}
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mt-4 rounded-lg border border-white/5 bg-black/40 p-3.5 text-xs leading-relaxed text-slate-400">
          <strong className="text-slate-200">Core Problem: </strong>
          {project.problem}
        </div>

        {/* Architectural Highlights */}
        <div className="mt-5">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>Architectural Highlights</span>
          </div>
          <ul className="mt-3 space-y-2 text-xs text-slate-300">
            {project.architectureHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-emerald-400" />
                <span className="leading-normal">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack & Action Link */}
      <div className="mt-6 border-t border-white/10 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-md border border-white/5 bg-[#171a27] px-2.5 py-1 font-mono text-[11px] font-medium text-slate-300 transition-colors group-hover:border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono font-medium text-slate-200 transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
              aria-label={`View ${project.name} source on GitHub`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>Source</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
