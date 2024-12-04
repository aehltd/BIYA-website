import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,css}"  
  ],
  theme: {
    extend: {
      colors: {
        'biya-red': '#F33535',
        'biya-blue': '#34B3F1',
        'biya-gray': '#EDF2F6',
      },
      fontFamily: {
        dmSerif: ['"DM Serif Text"', 'serif'],
        kanit: ['Kanit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;
