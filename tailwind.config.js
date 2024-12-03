/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Deep blue
        secondary: "#60A5FA", // Light blue
        accent: "#FBBF24", // Yellow
      },
    },
  },
  plugins: [],
}

