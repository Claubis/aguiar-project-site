import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        orelega: ['FonteOrelega', 'sans-serif'],
        sen: ['FonteSen', 'sans-serif'],
        manrope: ['FonteManrope', 'sans-serif'],
      },
      backgroundColor: {
        primeira: "#FFFFFF",
        segunda: "#E7F1F3",
        terceira: "#CFE3E7",
        quarta: "#B7D4DA",
        quinta: "#9FC6CE",
      },
      colors: {
        'menu-hover': 'rgba(54, 190, 200, 0.996)',
      },
    },
  },
  plugins: [],
};
export default config;
