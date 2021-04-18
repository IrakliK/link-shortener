module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    backgroundColor: ["responsive", "hover", "focus", "active", "disabled"],
    textColor: ["responsive", "hover", "focus", "active", "disabled"],
  },
  plugins: [],
};
