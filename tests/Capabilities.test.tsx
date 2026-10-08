import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CapabilitiesMatrix from '../src/components/CapabilitiesMatrix';
import InfrastructureDiagram from '../src/components/InfrastructureDiagram';

describe('Capabilities & Infrastructure', () => {
  it('renders 4 core engineering domains', () => {
    render(<CapabilitiesMatrix />);
    expect(screen.getByText(/Distributed Systems & Concurrency/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-Time Logistics & Geospatial/i)).toBeInTheDocument();
    expect(screen.getByText(/Offline-First Architectures/i)).toBeInTheDocument();
    expect(screen.getByText(/Financial Ledger Engines/i)).toBeInTheDocument();
  });

  it('renders edge-to-server zero-trust infrastructure diagram', () => {
    render(<InfrastructureDiagram />);
    expect(screen.getByText(/Cloudflare Tunnel Ingress/i)).toBeInTheDocument();
    expect(screen.getByText(/Zero Public Ports/i)).toBeInTheDocument();
    expect(screen.getByText(/Nginx Static Server/i)).toBeInTheDocument();
  });
});
