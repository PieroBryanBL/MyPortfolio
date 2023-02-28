/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        "75": "75%",
        "85": "85%",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}