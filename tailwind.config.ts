import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5BA4C9", // harbor blue
          secondary: "#F2C14E", // gold
          accent: "#EEF4F7", // mist
          neutral: "#1D4E6B", // deep harbor
          "base-100": "#0D1B24", // night
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
