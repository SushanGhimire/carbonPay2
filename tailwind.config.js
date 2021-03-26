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
      },
      spacing: {
        100: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
