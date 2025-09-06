/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          brick: "#E07A5F",
        },
        gray: {
          borders: "#E6E6EA",
        },
        blue: {
          navy: "#3D405B",
        },
        yellow: {
          cream: "#F4F1DE",
          caramel: "#F2CC8F",
        },
        green: {
          sage: "#81B29A",
        },
        white: {
          lightcream: "#FFFEF8",
        },
      },
    },
  },
  plugins: [],
};
