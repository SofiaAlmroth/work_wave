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
        light: {
          primary: "#31493C", // Brunswick green – för knappar/huvudfärg
          secondary: "#8B9EB7", // Cadet gray – alternativ knapp, highlights
          accent: "#FE5F55", // Bittersweet – för viktiga CTA:er, hover
          neutral: "#261C15", // Licorice – mörk bakgrund eller text
          "base-100": "#F5F5F4", // Ljus bakgrund (kan bytas mot #C5D86D om du vågar!)
          info: "#8B9EB7", // Samma som secondary
          success: "#C5D86D", // Mindaro – lyckad färg
          warning: "#FE5F55", // Dubbel som accent (kan bytas)
          error: "#FE5F55", // Samma som accent (eller välj rödare ton)
        },
        dark: {
          primary: "#C5D86D",
          secondary: "#8B9EB7",
          accent: "#FE5F55",
          neutral: "#f5f5f4",
          "base-100": "#261C15",
          info: "#8B9EB7",
          success: "#31493C",
          warning: "#FE5F55",
          error: "#FE5F55",
        },
      },
    ],
    darkTheme: "dark",
  },

  plugins: [require("daisyui")],
  //...
};
