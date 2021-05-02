module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        12: "3rem",
        14: "3.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
