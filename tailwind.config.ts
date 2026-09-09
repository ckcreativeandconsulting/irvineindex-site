import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17211b",
        sage: "#5f7662",
        citrus: "#e7a21b",
        coast: "#2d7f8f",
        clay: "#a6573f",
        paper: "#fbfaf5"
      },
      boxShadow: {
        soft: "0 14px 40px rgba(23, 33, 27, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
