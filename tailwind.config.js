/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          "50%": { width: "12ch" }, // Adjust this value based on the number of characters
          // "100%": { width: "0ch" }, // Go back to 0ch for deleting effect
        },
        blink: {
          "50%": { "border-color": "transparent" },
        },
      },
      animation: {
        typing: "typing 4s steps(12) infinite", // Repeat the typing-deleting effect infinitely
        blink: "blink .7s step-end infinite",
      },
    },
  },

  plugins: [],
};
