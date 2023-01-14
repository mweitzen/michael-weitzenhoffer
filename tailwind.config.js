const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-family-sans)", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        default: "var(--color-dark-purple)",
        element: "var(--color-dark-purple)",
      },
      colors: {
        // primary: {
        //   main: "var(--color-primary-main)",
        //   shadow: "var(--color-primary-shadow)",
        //   light: "var(--color-primary-light)",
        // },
        "dark-purple": "var(--color-dark-purple)",
        "neutral-light": "var(--color-neutral-light)",
      },
      textColor: {
        main: "var(--color-text-default)",
        muted: "var(--color-text-muted)",
        light: "var(--color-text-light)",
        inverted: "var(--color-text-inverted)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        "background-movement": {
          "0%, 100%": {
            backgroundPosition: "0% 100%",
          },
          "25%": {
            backgroundPosition: "0% 0%",
          },
          "50%": {
            backgroundPosition: "100% 0%",
          },
          "75%": {
            backgroundPosition: "100% 100%",
          },
        },
      },
      animation: {
        "background-movement": "background-movement 13s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
