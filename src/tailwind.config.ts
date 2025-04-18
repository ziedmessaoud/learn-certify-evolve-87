import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6366f1", // Indigo-500
          light: "#e0e7ff", // Indigo-100
          dark: "#4f46e5", // Indigo-600
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#f1f5f9", // Slate-100
          dark: "#94a3b8", // Slate-400
          foreground: "#1e293b", // Slate-800
        },
        accent: {
          DEFAULT: "#8b5cf6", // Violet-500
          light: "#f3e8ff", // Violet-100
          dark: "#7c3aed", // Violet-600
        },
        success: {
          DEFAULT: "#22c55e", // Green-500
          light: "#dcfce7", // Green-100
          dark: "#16a34a", // Green-600
        },
        warning: {
          DEFAULT: "#f59e0b", // Amber-500
          light: "#fef3c7", // Amber-100
          dark: "#d97706", // Amber-600
        },
        destructive: {
          DEFAULT: "#ef4444", // Red-500
          light: "#fee2e2", // Red-100
          dark: "#dc2626", // Red-600
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
