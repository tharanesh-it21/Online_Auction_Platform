/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
       primary:"#40513B",
      },
    },
  },
  plugins: [],
  corePlugins:{
   preflight: false,
  }
}