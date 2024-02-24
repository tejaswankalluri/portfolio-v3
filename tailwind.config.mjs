/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        tuatara: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#191919",
        },
      },
      container: {
        center: true,
        padding: "1rem", // You can adjust padding as needed
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1140px", // Customize your width for large screens
          xl: "1140px", // Customize your width for extra-large screens
        },
      },
    },
  },
  plugins: [],
};
