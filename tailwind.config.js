/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'aurah-orange': '#D85A00',
        'aurah-orange-bright': '#FF7A1A',
        'aurah-orange-light': '#FF9A4D',
        'aurah-orange-tint': '#FFF0E6',
        'aurah-black': '#0A0A0A',
        'aurah-dark': '#1A1A1A',
        'aurah-surface': '#2A2A2A',
        'aurah-white': '#FFFFFF',
        'aurah-warm-white': '#F5F0EB',
        'aurah-brown': '#2C1A00',
        'aurah-water-light': '#C8E8F5',
        'aurah-water-mid': '#89CCE8',
        'aurah-water-deep': '#3A8CB5',
        'aurah-mint': '#E8F5F0',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.04em',
      },
    },
  },
  plugins: [],
}
