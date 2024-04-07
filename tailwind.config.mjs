/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      md: "875px",
      lg: "1024px",
      xl: "1100px",
    },
    fontFamily: {
      "thunder-bold-lc": "Thunder-BoldLC",
      "thunder-hc": "Thunder-HC",
      "thunder-lc": "Thunder-LC",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      pink: "#F2896F",
      gray: "#828282",
      white: "#FFF7E8",
    },
  },
  plugins: [],
};
