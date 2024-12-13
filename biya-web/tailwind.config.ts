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
        'white-linen': {
          '50': '#f8f6f4',
          '100': '#efe9e4',
          '200': '#dfd2c9',
          '300': '#cab5a7',
          '400': '#b49383',
          '500': '#a57b6a',
          '600': '#976b5f',
          '700': '#7e5850',
          '800': '#674945',
          '900': '#553d39',
          '950': '#2d1f1d',
      },
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
