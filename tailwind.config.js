module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1FC157",
        secondary: "#057D3A",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        header: ["Dosis", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      spacing: {
        100: "30rem",
        68: "17rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
