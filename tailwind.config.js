/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { screens: {
    'sm': '376px',
    'md': '960px',
    'lg': '1440px',
  },
    extend: {},
  },
  plugins: [require("daisyui"),],
  daisyui: {
    styled: true,
    themes: [
      "light", // first one will be the default theme
    ],
    darkTheme: "light",
  },
}