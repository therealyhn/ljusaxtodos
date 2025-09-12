/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0f",
        primary: {
          blue: "#3b82f6",
          pink: "#ec4899",
          purple: "#8b5cf6",
        },
        text: {
          primary: "#ffffff",
          secondary: "#9ca3af",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #3b82f6 0%, #ec4899 100%)",
      },
    },
  },
  plugins: [],
}
