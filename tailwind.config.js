/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CF9D2F",
        "primary-dark": "#B8891A",
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          600: "#525252",
          900: "#111111",
        },
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        title: ["var(--font-sora)", "sans-serif"],
        text: ["var(--font-sora)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.06)",
        strong: "0 8px 30px rgba(0, 0, 0, 0.1)",
        gold: "0 0 32px rgba(207, 157, 47, 0.35)",
      },
    },
  },
  plugins: [],
};
