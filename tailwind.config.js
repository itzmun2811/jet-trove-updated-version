/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#060506',
        background: '#f7f2f6',
        primary: '#b75da1',
        secondary: '#dd94cb',
        accent: '#dd5fbe',
      },
    },
  },
  plugins: [],
};
