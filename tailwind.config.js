/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F3566",
        secondary: "#FFFFFF",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/About_images/Banner/Banner.png')",
        vid: "url('/src/assets/images/Home_images/videobg.png')",
      },
    },
  },
  plugins: [],
};
