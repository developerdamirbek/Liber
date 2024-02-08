/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': "#3F51B5",
        "primary-soft": "#EEF4FF",
        "secondary": "#FF7F4D",
        "grey": "#AAAAAA",
        "dark-purple": "#11142D",
        "text-color": "#242424"
      },
      container: {
        center:true,
        screens: {
          lg: "1330px"
        }
      }
    },
  },
  plugins: [],
}