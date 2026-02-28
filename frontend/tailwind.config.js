import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes:[
    "light","dark","cupcake","bumblebee","emerald","corporate","retro",
    "cyberpunk","valentine","garden","lofi","pastel","fantasy","wireframe",
    "cmyk","autumn","acid","lemonade","winter","night","coffee","dracula",
    "business","dim","sunset","synthwave","halloween","forest","aqua",
    "luxury","black","nord"
  ],
  },
};