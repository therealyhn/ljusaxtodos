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
          blue: "#2563eb",   // Blue 600
          cyan: "#06b6d4",   // Cyan 400
          indigo: "#4338ca", // Indigo 800 za dublje tonove
        },
        text: {
          primary: "#ffffff",
          secondary: "#9ca3af",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)",
      },
    },
  },
  plugins: [],
}
