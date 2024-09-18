/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-light': '#333', // Dark text for light theme
        'text-dark': '#f5f5f5', // Light text for dark theme
        'text-emerald': '#004d40', // Text color for emerald theme
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "emerald"], // Define the themes you are using
  },
};
