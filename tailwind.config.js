/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f3f6f4',       // light silver-white
          100: '#e9efec',
          500: '#1e3a2f',       // deep green
          700: '#14261e',       // deeper green for headings
        },
        neutralbg: '#f7f7f7',   // clean silver-white
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
