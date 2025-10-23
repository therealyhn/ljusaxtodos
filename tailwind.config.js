/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        keyframes: {
          "pulse-glow": {
            "0%, 100%": { boxShadow: "0 0 25px rgba(6,182,212,0.5)" },
            "50%": { boxShadow: "0 0 45px rgba(6,182,212,0.8)" },
          },
        },
        animation: {
          "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        },
      },
      animation: {
        fadeInScale: "fadeInScale 0.5s ease-out",
      },
      colors: {
        background: "#0d0d0f",
        background2: "#141418ff",
        background3: "#1f1f23",
        primary: {
          blue: "#2563eb",   // Blue 600
          cyan: "#06b6d4",   // Cyan 400
          indigo: "#4338ca", // Indigo 800 za dublje tonove
          gradient: "linear-gradient(to right, #4338ca, #06b6d4)",
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
