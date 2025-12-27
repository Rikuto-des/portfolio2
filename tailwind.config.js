/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'minimal-bg': '#fafafa',
        'minimal-text': '#1a1a1a',
        'minimal-accent': '#3b82f6',
        'minimal-gray': '#6b7280',
        'minimal-light': '#f3f4f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tech: ['Space Grotesk', 'sans-serif'],
        display: ['Syncopate', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
