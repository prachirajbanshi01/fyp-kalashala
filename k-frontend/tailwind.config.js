export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Helvetica"', "sans-serif"], 
        //sans: ['"Poppins"', "sans-serif"],  // replace default sans
      },
    },
  },
  plugins: [],
}