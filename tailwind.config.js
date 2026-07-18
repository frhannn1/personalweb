/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%) skewX(12deg)' },
        }
      },
      colors: {
        'surface': '#0B0914',
        'on-surface': '#ffffff',
        'primary': '#a855f7',
        'on-surface-variant': '#9ca3af',
        'outline-variant': '#374151',
      },
      // Tambahkan konfigurasi yang kurang dari Header.jsx di bawah ini
      fontFamily: {
        'display-lg': ['Geist Variable', 'sans-serif'], // Sesuaikan font-mu
        'body-md': ['Geist Variable', 'sans-serif'],
      },
      spacing: {
        'margin-mobile': '1.5rem',
        'margin-desktop': '2rem',
      },
      maxWidth: {
        'container-max': '1200px',
      }
    },
  },
  plugins: [],
}