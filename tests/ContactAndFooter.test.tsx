import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';

describe('ContactSection Component', () => {
  it('renders official contact email and copy action button', () => {
    render(<ContactSection />);
    expect(screen.getByText('priz@prizftm.my.id')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /copy email/i })).toBeInTheDocument();
  });

  it('renders inquiry templates for startup programs and engineering contracts', () => {
    render(<ContactSection />);
    expect(screen.getByRole('button', { name: /Startup Grant \/ Program/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Engineering Consultation/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Technical Due Diligence/i })).toBeInTheDocument();
  });

  it('copies email to clipboard when copy button is clicked', async () => {
    // Mock navigator.clipboard
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(<ContactSection />);
    const copyBtn = screen.getByRole('button', { name: /copy email/i });
    await act(async () => {
      fireEvent.click(copyBtn);
    });
    expect(writeTextMock).toHaveBeenCalledWith('priz@prizftm.my.id');
  });
});

describe('Footer Component', () => {
  it('renders footer with domain, copyright 2026, and founder github link', () => {
    render(<Footer />);
    expect(screen.getByText(/prizftm.my.id/i)).toBeInTheDocument();
    expect(screen.getByText(/2026 Priz Tech/i)).toBeInTheDocument();
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/friza13');
  });
});
