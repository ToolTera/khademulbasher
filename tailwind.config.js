/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mac-bg': '#000000',
        'mac-dock': 'rgba(255, 255, 255, 0.1)',
        'mac-border': 'rgba(255, 255, 255, 0.15)',
        'mac-text': '#f5f5f7'
      }
    },
  },
  plugins: [],
}
