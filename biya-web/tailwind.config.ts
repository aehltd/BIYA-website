import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'biya-red': '#F33535',
        'biya-blue': '#34B3F1',
        'biya-gray': '#EDF2F6',
      },
    },
  },
  plugins: [],
};
export default config;
