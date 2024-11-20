/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary:"#C70D3A",
        dark:{
          20:"#222233",
          50:"#1A1A27",
          100:"#13141F",
          200:'#12131f'
        }
      },
      fontFamily :{
        'poppins':['Poppins','sans serif'],
        'saira':['Saira Condensed','sans serif'],
        'neue':['Bebas Neue','sans serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

