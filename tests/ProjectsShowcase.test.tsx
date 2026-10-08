import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsShowcase from '../src/components/ProjectsShowcase';
import { projectsData } from '../src/data/projectsData';

describe('ProjectsShowcase Component', () => {
  it('contains exactly the 5 founder flagship projects', () => {
    expect(projectsData).toHaveLength(5);
    const names = projectsData.map((p) => p.name);
    expect(names).toContain('AnjemID');
    expect(names).toContain('Armada DMS');
    expect(names).toContain('Litera');
    expect(names).toContain('CatatUang');
    expect(names).toContain('TokoPOS');
  });

  it('renders all 5 flagship projects in the UI', () => {
    render(<ProjectsShowcase />);
    expect(screen.getByText(/AnjemID/i)).toBeInTheDocument();
    expect(screen.getByText(/Armada DMS/i)).toBeInTheDocument();
    expect(screen.getByText(/Litera/i)).toBeInTheDocument();
    expect(screen.getByText(/CatatUang/i)).toBeInTheDocument();
    expect(screen.getByText(/TokoPOS/i)).toBeInTheDocument();
  });

  it('displays deep architectural highlights for the flagship systems', () => {
    render(<ProjectsShowcase />);
    expect(screen.getByText(/Redis geospatial/i)).toBeInTheDocument();
    expect(screen.getByText(/2-Opt TSP/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Double-entry ledger/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ESC\/POS/i).length).toBeGreaterThan(0);
  });
});
