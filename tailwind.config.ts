import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hrm: {
          orange: "#E88222",
          "orange-dark": "#C6650E",
          "orange-light": "#FFF7EE",
          charcoal: "#11161B",
          dark: "#1A202C",
          slate: "#4A5568",
          muted: "#718096",
          light: "#F8FAFC",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
        hover: "0 20px 40px -10px rgba(232, 130, 34, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
