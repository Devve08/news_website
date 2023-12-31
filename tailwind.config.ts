import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'md': 'repeat(3, minmax(0, 360px))',
        'sm': 'repeat(2, minmax(0, 310px))',
        'no': 'repeat(1, minmax(0, 288px))'
      },
      colors: {
        primary: "#0D2436",
        secondary: "#959EAD",
        ternary: "#FC5A5A",
        text_primary: "#183B56",
        text_secondary: "#1565D8",
        background: "#F9FCFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
