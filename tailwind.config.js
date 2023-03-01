/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      // ## Colors
      colors: {
        // ### Primary
        cl_gradientLeft: "hsl(6, 100%, 80%)",
        cl_gradientRight: "hsl(335, 100%, 65%)",
        // ### Neutral
        cl_PaleBlue: "hsl(243, 100%, 93%)",
        cl_GrayishBlue: "hsl(229, 7%, 55%)",
        cl_DarkBlue: "hsl(228, 56%, 26%)",
        cl_VeryDarkBlue: "hsl(229, 57%, 11%)",
      },
    },
  },
  plugins: [],
}
