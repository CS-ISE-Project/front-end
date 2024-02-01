/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "280px",
      md: "720px",
      lg: "1280px",
      xl: "1920px",
    },
    colors: {
      white: "#FFFFFF",
      Blue100: "#2F5ACB",
      Blue66: "#5690E8",
      Blue33: "#7DAFF6",
      Purple100: "#8D92C9",
      Purple66: "#C7C6EE",
      Purple33: "#E2E2FA",
      Rose100: "#F28393",
      Rose66: "#F59FAC",
      Rose33: "#FDDEE3",
      Typo: "#515151",
      Spbtn: "#5DB5AF",
    },
    fontFamily: {
      Gilroy: ["Gilroy-Regular", "sans-serif"],
      Natasha: ["Alchadera", "sans-serif"],
    },
    dropShadow: {
      special: [
        "0 160px 100px rgba(0, 0, 0, 0.01)",
        "0 70px 60px rgba(0, 0, 0, 0.05)",
        "0 38px 30px rgba(0, 0, 0, 0.09)",
        "0 13px 10px rgba(0, 0, 0, 0.1)",
      ],
    },
    backgroundImage :{
      'About-image' : "url('../public/image1.png')" ,
    },
    extend: {},
  },
  plugins: [],
};