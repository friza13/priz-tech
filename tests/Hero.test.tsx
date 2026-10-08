import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../src/components/Hero';
import MetricsStrip from '../src/components/MetricsStrip';

describe('Hero Component', () => {
  it('renders engineering lab headline and action triggers', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1, name: /Engineering Distributed Systems/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /explore production systems/i })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: /inspect architecture/i })).toHaveAttribute('href', '#architecture');
  });

  it('renders founder github and domain references', () => {
    render(<Hero />);
    expect(screen.getByText(/friza13/i)).toBeInTheDocument();
    expect(screen.getByText(/prizftm.my.id/i)).toBeInTheDocument();
  });
});

describe('MetricsStrip Component', () => {
  it('renders the 5 core quantitative engineering metrics', () => {
    render(<MetricsStrip />);
    expect(screen.getByText(/5\+/i)).toBeInTheDocument();
    expect(screen.getByText(/Production Architectures/i)).toBeInTheDocument();
    expect(screen.getByText(/<50ms/i)).toBeInTheDocument();
    expect(screen.getByText(/100%/i)).toBeInTheDocument();
    expect(screen.getByText(/2-Opt/i)).toBeInTheDocument();
    expect(screen.getByText(/0 MB/i)).toBeInTheDocument();
  });
});
