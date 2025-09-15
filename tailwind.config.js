module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
  base: process.env.VITE_BASE_PATH || "/Netflix-Clone/tree/main"
}
