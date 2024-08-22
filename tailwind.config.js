/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient: {
          lightfrom: '#FFEAE7',
          darkfrom: '#3F0F0C',
          lightto: '#FFFFFF',
          darkto: '#111111',
        },
        solidcomponents: '#FF3131',
        colorfont: '#FFF7F6',
        staticcomponents: {
          light: '#FFCBC3',
          dark: '#68090B',
        },
      },
    },
  },
  plugins: [],
}
