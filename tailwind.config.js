/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bebas:'Bebas Neue',
        old:'Old Standard TT',
      },
      colors:{
        n:{
          1:'#091747',
          2:'#ff5d01',
          3: '#f5f5f5',
        }
      }
    },
  },
  plugins: [],
}