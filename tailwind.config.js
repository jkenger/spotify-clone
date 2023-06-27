/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg: '1020px',
      xl: '1440px'
    },
    extend: {
      fontFamily:{
        sans: ['Gotham-Black', 'Helvetica','Arial', 'sans-serif']
      },
      colors:{
        lightGreen: '#19e68c',
        darkGreeh: '#1db954'
      },
      fontSize:{
        xs:'.7rem'
    }
    },
    
  },
  plugins: [],
}

