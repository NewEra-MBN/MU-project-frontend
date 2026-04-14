import animate from 'tailwindcss-animate'
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [animate],
  theme: {
    extend: {
      colors: {
        primary: "#003847",
        secondary: "#546E7A",
        tertiary: "#4D2A0C",
        neutral: "#F5F7F8",
      },
    },
  },
}
