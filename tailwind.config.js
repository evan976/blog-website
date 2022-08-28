/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          quaternary: 'var(--bg-quaternary)',
          quinary: 'var(--bg-quinary)'
        },
        font: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          quaternary: 'var(--text-quaterna)',
          quinary: 'var(--text-quinary)'
        },
        filter: 'var(--rotate-color)'
      }
    },
  },
  plugins: [],
}
