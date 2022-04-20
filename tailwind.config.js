module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        text: "move 5s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        move:{
          "0%": {
            top: "0px"
          },
          "20%": {
            top: "-50px",
          },
          "40%": {
            top: "-100px",
          },
          "60%": {
            top: "-150px",
          },
          "80%": {
            top: "-200px",
          },
          "100%": {
            top: "-250px",
          },

          
        }
      },
    },
  },
  plugins: [],
}