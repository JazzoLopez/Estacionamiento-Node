/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/views/**/*.ejs',],
  theme: {
    extend: {colors: {

      Fondo: '#e4f4fd',
      Titulos: '#003785',
      Texto: '1465bb',
      Botones: '#A1C9F1'

      
     },
     fontFamily:{
      'Custom':['Roboto', 'Arial', 'sans-serif']
     }
    },
  },
  plugins: [],
}