/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5',
        'primary-dark': '#3730A3',
        'secondary': '#10B981',
        'accent': '#F59E0B',
        'danger': '#EF4444',
        'dark': '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [
    // Les plugins ont été commentés car ils ne sont pas installés
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}
