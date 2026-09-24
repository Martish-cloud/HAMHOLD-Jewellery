/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0B0C',
          light: '#131315',
          card: '#111012',
          surface: '#151417',
        },
        espresso: {
          DEFAULT: '#1A1412',
          dark: '#120E0D',
          light: '#241D1A',
        },
        ivory: {
          DEFAULT: '#F4F0E8',
          soft: '#EAE4D8',
          muted: '#C8C2B5',
        },
        champagne: {
          DEFAULT: '#D6C29A',
          light: '#E5D6B6',
          dark: '#B89F70',
          subtle: 'rgba(214, 194, 154, 0.15)',
        },
        bronze: {
          DEFAULT: '#A8875B',
          light: '#BF9E73',
          dark: '#8C6C42',
        },
        taupe: {
          DEFAULT: '#A59B8D',
          light: '#BCB3A7',
          dark: '#877D70',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.2em',
        widest: '0.25em',
        ultra: '0.35em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px rgba(214, 194, 154, 0.05)',
        'luxury-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 35px rgba(214, 194, 154, 0.12)',
        'glow': '0 0 30px rgba(214, 194, 154, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
