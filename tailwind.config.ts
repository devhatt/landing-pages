/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          white: "#fff",
          gray: "#cbc4cf",
          purple: "#eaddff",
          red: "#ffdad6",
        },
        secondary: {
          white: "#fdf8fd",
          gray: "#7a757f",
          purple: "#7033e0",
          red: "#c00016",
        },
        tertiary: {
          white: "#ece6eb",
          gray: "#49454e",
          purple: "#5800c8",
          red: "#FFF1E6",
        },
        baseColor: "#6750a4",
        hovering: "#6750a414",
        pressing: "#6750a41f",
      },
      fontFamily: {
        Roboto: ["var(--font-Roboto)"],
      },
    },
  },
};
