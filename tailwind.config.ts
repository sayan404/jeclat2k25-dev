const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "class"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)"],
        heading: ["Outfit", "Inter", "system-ui", "sans-serif"],
        title: ["Cabinet Grotesk", "Inter", "system-ui", "sans-serif"],
        astral: ["astral-studio", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
        arial: ["Arial", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        doto: ["Doto", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        retro: ["'Press Start 2P'", "cursive"],
        cal: ["Cal Sans", "Inter", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        orbitron: ["var(--font-orbitron)"],
        rajdhani: ["var(--font-rajdhani)"],
        audiowide: ["var(--font-audiowide)"],
        sugarPeachy: ["Sugar-Peachy", "sans-serif"],
        amazingQuirky: ["AmazingQuirky", "sans-serif"],
        astralSisters: ["Astal Sisters", "sans-serif"],
        comicaBoom: ["Comica-Boom", "sans-serif"],
        highbright: ["Highbright", "sans-serif"],
        lightningScript: ["Lightning Script", "sans-serif"],
        witchMystery: ["Witch Mystery", "sans-serif"],
      },
      fontSize: {
        // Custom font sizes for better typography
        "display-2xl": ["4.5rem", { lineHeight: "5.625rem" }],
        "display-xl": ["3.75rem", { lineHeight: "4.5rem" }],
        "display-lg": ["3rem", { lineHeight: "3.75rem" }],
        "display-md": ["2.25rem", { lineHeight: "2.75rem" }],
        "display-sm": ["1.875rem", { lineHeight: "2.375rem" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "body-base": ["1rem", { lineHeight: "1.5rem" }],
        "body-sm": ["0.875rem", { lineHeight: "1.25rem" }],
      },
      letterSpacing: {
        "ultra-tight": "-0.1em",
        "super-tight": "-0.05em",
        "ultra-wide": "0.1em",
        "super-wide": "0.15em",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        rotateShake: "rotateShake 0.5s ease-in-out",
        "animate-border": "borderAnimation 3s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pop-in": "popIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "gradient-xy": "gradient-xy 15s ease infinite",
        // "spin-slow": "spin 10s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "gradient-sky": "linear-gradient(to bottom, #2D1E5F, #FFA500)",
      },
      keyframes: {
        "gradient-xy": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        borderAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        rotateShake: {
          "0%": { transform: "rotate(0deg) translateX(0)" },
          "50%": { transform: "rotate(-45deg) translateX(-5px)" },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        popIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      textShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.5)",
        neon: "0 0 5px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)",
        sharp: "2px 2px 0px rgba(0, 0, 0, 0.3)",
      },
      transitionDuration: {
        "2000": "2000ms",
        "2500": "2500ms",
        "3000": "3000ms",
      },
      lineHeight: {
        relaxed: "1.75",
        loose: "2",
        "ultra-loose": "2.5",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "dark-purple": "#2D1E5F",
        "orange-yellow": "#FFA500",
        "dark-shadow": "#1A0D3A",
        beige: "#D9B38C",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        purple: {
          900: "#2c003e",
        },
        cyan: {
          400: "#00ffd8",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      screens: {
        cust: { max: "900px" },
      },
    },
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
