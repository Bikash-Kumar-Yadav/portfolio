/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#0f172a',
        'snd-bg-color': '#1e293b',
        'text-color': '#f8fafc',
        'main-color': '#3b82f6',
        'accent-color': '#8b5cf6',
        'gradient-start': '#3b82f6',
        'gradient-end': '#8b5cf6',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      fontSize: {
        '1.5rem': '1.8rem',
        '1.6rem': '2rem',
        '2rem': '2.4rem',
        '2.4rem': '2.8rem',
        '2.5rem': '3rem',
        '2.6rem': '3.2rem',
        '3rem': '3.6rem',
        '3.2rem': '4rem',
        '3.6rem': '4.4rem',
        '4.5rem': '5.5rem',
        '5rem': '6rem',
        '5.6rem': '6.8rem',
        '6rem': '7.5rem',
        '6.8rem': '8.5rem',
        '7rem': '8rem',
        '8rem': '9.5rem',
        '9rem': '11rem',
      },
      spacing: {
        '9%': '9%',
        '3%': '3%',
      },
      padding: {
        '11': '2.8rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
      },
    },
  },
  plugins: [],
}

