import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        foreground: "#0f172a",
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#eff6ff"
        },
        secondary: {
          DEFAULT: "#dbeafe",
          foreground: "#1e3a8a"
        },
        muted: {
          DEFAULT: "#e2e8f0",
          foreground: "#475569"
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
