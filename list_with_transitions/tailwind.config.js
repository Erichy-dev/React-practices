/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //make sure there are no whitespaces otherwise tailwind won't work
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
