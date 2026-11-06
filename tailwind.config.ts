import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        // Loqui's own pages, /loqui
        "loqui-sans": ["var(--font-loqui-sans)", "system-ui", "sans-serif"],
        "loqui-mono": ["var(--font-loqui-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        night: "#0D1B24",
        mist: "#EEF4F7",
        harbor: "#5BA4C9",
        deep: "#1D4E6B",
        gold: "#F2C14E",
        // Spec Sheet ink and rules on the light ground
        "ink-muted": "#3E5260",
        "ink-subtle": "#4A5B66",
        "line-strong": "#C3D2DC",
        line: "#D5E0E7",
        "line-soft": "#E3EBF0",
        "night-raised": "#10222D",
        live: "#2E9E6B",
        soon: "#D9A21E",
        // Loqui's Spectrum palette and its dark ground, from the Loqui repo's docs/brand
        loqui: {
          ground: "#0F1419",
          raised: "#161D24",
          line: "#222B34",
          text: "#E8EDF2",
          muted: "#9AA6B2",
          subtle: "#7D8994",
          coral: "#FF6B5B",
          amber: "#FFB547",
          mint: "#3DDC97",
          sky: "#5AC8FA",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1D4E6B", // deep harbor
          secondary: "#F2C14E", // gold
          accent: "#0D1B24", // night, the text color
          neutral: "#5BA4C9", // harbor blue
          "base-100": "#EEF4F7", // mist
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
