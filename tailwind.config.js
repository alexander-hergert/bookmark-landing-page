/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "soft-blue": "hsl(231, 69%, 60%)",
          "soft-red": "hsl(0, 94%, 66%)",
        },
        neutral: {
          "grayish-blue": "hsl(229, 8%, 60%)",
          "very-dark-blue": "hsl(229, 31%, 21%)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
};
