/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0A2540 0%, #0D3060 40%, #0A2540 70%, #061828 100%)',
        'teal-gradient': 'linear-gradient(135deg, #00C6A7 0%, #00E5C4 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      },
      animation: {
        'radar-ping': 'radarPing 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'orbit': 'orbitRotate 20s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float': 'floating 6s ease-in-out infinite',
        'fade-in-down': 'fadeInDown 0.3s cubic-bezier(0.2, 1, 0.3, 1) forwards',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(10, 37, 64, 0.08)',
        'card-hover': '0 24px 48px rgba(10, 37, 64, 0.14)',
        'glow': '0 0 24px rgba(0, 198, 167, 0.3)',
        'glow-lg': '0 0 48px rgba(0, 198, 167, 0.2)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};