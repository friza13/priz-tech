import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '../src/components/Navbar';

describe('Navbar Component', () => {
  it('renders Priz Tech brand mark and active system status', () => {
    render(<Navbar />);
    expect(screen.getByText(/PRIZ TECH/i)).toBeInTheDocument();
    expect(screen.getByText(/SYSTEMS OPERATIONAL/i)).toBeInTheDocument();
  });

  it('contains links to project showcase, capabilities, architecture, and contact trigger', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: /capabilities/i })).toHaveAttribute('href', '#capabilities');
    expect(screen.getByRole('link', { name: /architecture/i })).toHaveAttribute('href', '#architecture');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact');
  });

  it('renders inquiry button linking to email or contact section', () => {
    render(<Navbar />);
    const cta = screen.getAllByRole('link', { name: /inquire|contact/i });
    expect(cta.length).toBeGreaterThan(0);
  });

  it('toggles mobile menu on hamburger button click', () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText(/toggle navigation/i);
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(screen.getByTestId('mobile-menu')).toBeVisible();
  });
});
