/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      fontFamily : {
        'sans' : ['sans','sans-serif'],
        'head' : ['Montserrat Alternates','sans-serif'],
        'mont' : ['Montserrat','sans-serif'],
        'pro' : ['Protest Riot','sans-serif']
      }
    },
  },
  plugins: [],
}

