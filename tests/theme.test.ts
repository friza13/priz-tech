import { describe, it, expect } from 'vitest';
import tailwindConfig from '../tailwind.config.js';

describe('Design Tokens Configuration', () => {
  it('contains custom brand color tokens', () => {
    const colors = tailwindConfig.theme?.extend?.colors as Record<string, string>;
    expect(colors['tech-black']).toBe('#08090d');
    expect(colors['tech-surface']).toBe('#0f1118');
    expect(colors['tech-surface-elevated']).toBe('#161924');
    expect(colors['tech-cyan']).toBe('#06b6d4');
    expect(colors['tech-indigo']).toBe('#6366f1');
    expect(colors['tech-emerald']).toBe('#10b981');
  });

  it('contains custom font families including monospace for telemetry', () => {
    const fontFamily = tailwindConfig.theme?.extend?.fontFamily as Record<string, string[]>;
    expect(fontFamily['sans']).toBeDefined();
    expect(fontFamily['mono']).toBeDefined();
  });
});
