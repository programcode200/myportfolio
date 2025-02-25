/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#2563EB", // Adjust the shade as needed
          600: "#1E40AF",
          700: "#1E3A8A",
        },
      },
    },
  },
  plugins: [],
}




