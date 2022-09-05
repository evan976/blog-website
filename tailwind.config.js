/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: 'rgb(var(--color-blue))',
        green: 'rgb(var(--color-green))',
        orange: 'rgb(var(--color-orange))',
        red: 'rgb(var(--color-red))',
        purple: 'rgb(var(--color-purple))',
        lime: 'rgb(var(--color-lime))',
        yellow: 'rgb(var(--color-yellow))',
        pinkpuple: 'rgb(var(--color-pinkpuple))',
        gold: 'rgb(var(--color-gold))',
        orangered: 'rgb(var(--color-orangered))',
        grey: 'rgb(var(--color-grey))',
        bg: {
          100: 'rgb(var(--color-bg-1))',
          200: 'rgb(var(--color-bg-2))',
          300: 'rgb(var(--color-bg-3))',
          400: 'rgb(var(--color-bg-4))',
          500: 'rgb(var(--color-bg-5))',
        },
        font: {
          100: 'hsl(var(--color-font-1), 0.9)',
          200: 'hsl(var(--color-font-2), 0.7)',
          300: 'hsl(var(--color-font-3), 0.5)',
          400: 'hsl(var(--color-font-4), 0.3)',
        },
        border: 'rgba(var(--color-border))',
        code: 'rgba(var(--color-code-bg), 0.12)',
      },
    },
  },
  plugins: [],
}
