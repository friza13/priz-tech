import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('SEO & Metadata Verification', () => {
  const indexHtmlPath = path.resolve(__dirname, '../index.html');
  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  it('contains proper SEO title and description', () => {
    expect(indexHtml).toContain('<title>Priz Tech — Systems Lab &amp; Software Engineering Studio</title>');
    expect(indexHtml).toContain('name="description"');
    expect(indexHtml).toContain('prizftm.my.id');
  });

  it('contains canonical URL and robots directive', () => {
    expect(indexHtml).toContain('<link rel="canonical" href="https://prizftm.my.id/"');
    expect(indexHtml).toContain('<meta name="robots" content="index, follow"');
  });

  it('contains Open Graph and Twitter card meta tags', () => {
    expect(indexHtml).toContain('property="og:title"');
    expect(indexHtml).toContain('property="og:url" content="https://prizftm.my.id/"');
    expect(indexHtml).toContain('name="twitter:card"');
    expect(indexHtml).toContain('name="twitter:title"');
  });

  it('contains valid JSON-LD Organization schema', () => {
    expect(indexHtml).toContain('"@type": "Organization"');
    expect(indexHtml).toContain('"name": "Priz Tech"');
    expect(indexHtml).toContain('"email": "priz@prizftm.my.id"');
    expect(indexHtml).toContain('"name": "friza13"');
  });

  it('verifies public/robots.txt allows indexing and references sitemap', () => {
    const robotsPath = path.resolve(__dirname, '../public/robots.txt');
    expect(fs.existsSync(robotsPath)).toBe(true);
    const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
    expect(robotsContent).toContain('User-agent: *');
    expect(robotsContent).toContain('Allow: /');
    expect(robotsContent).toContain('Sitemap: https://prizftm.my.id/sitemap.xml');
  });

  it('verifies public/sitemap.xml is valid XML and contains canonical domain', () => {
    const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBe(true);
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    expect(sitemapContent).toContain('https://prizftm.my.id/');
    expect(sitemapContent).toContain('https://prizftm.my.id/#projects');
    expect(sitemapContent).toContain('https://prizftm.my.id/#contact');
  });

  it('renders the complete App component tree with all sections', () => {
    render(<App />);
    expect(screen.getAllByText(/PRIZ TECH/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { level: 1, name: /Engineering Distributed Systems/i })).toBeInTheDocument();
    expect(screen.getByText(/Battle-Tested Tooling Matrix/i)).toBeInTheDocument();
    expect(screen.getByText(/Edge Ingress & Zero-Trust Topology/i)).toBeInTheDocument();
    expect(screen.getByText(/Initiate Engineering Dialogue/i)).toBeInTheDocument();
    expect(screen.getByText(/2026 Priz Tech/i)).toBeInTheDocument();
  });
});
