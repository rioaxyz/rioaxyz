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
