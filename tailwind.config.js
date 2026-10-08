/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'tech-black': '#08090d',
        'tech-surface': '#0f1118',
        'tech-surface-elevated': '#161924',
        'tech-cyan': '#06b6d4',
        'tech-indigo': '#6366f1',
        'tech-emerald': '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
        'cyber-gradient': "radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.12) 0%, rgba(99, 102, 241, 0.05) 45%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
