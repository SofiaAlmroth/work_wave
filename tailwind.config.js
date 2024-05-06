/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a5b4fc",
          secondary: "#f472b6",
          accent: "#f472b6",
          neutral: "#292524",
          "base-100": "#f5f5f4",
          info: "#312e81",
          success: "#059669",
          warning: "#eab308",
          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};
