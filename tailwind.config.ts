import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#071a2e",
          800: "#0b2840",
          700: "#103352",
          600: "#16456b",
        },
        surface: { DEFAULT: "#102f4c", light: "#143a5c" },
        brand: {
          blue: "#2e8fe0",
          bright: "#49a4f0",
          cta: "#2276c2",
          ctaHover: "#1f6fb8",
          green: "#34b45a",
          silver: "#c9cdd2",
        },
        ink: { DEFAULT: "#eef4fa", muted: "#9fb2c6", faint: "#8095aa" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: { content: "1140px" },
      borderRadius: { xl2: "14px" },
    },
  },
  plugins: [],
};
export default config;
