import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "15px"
      },
      colors: {
        magenta:{ 500: '#FF00FF',},
        accent: "#14223D",
      },
    },
  },
  plugins: [],
};
export default config;


