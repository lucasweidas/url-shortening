/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        md: ['1.125rem'],
      },
      colors: {
        cyan: {
          500: 'hsl(180, 66%, 49%)',
        },
        violet: {
          400: 'hsl(257, 7%, 63%)',
          700: 'hsl(257, 27%, 26%)',
          800: 'hsl(255, 11%, 22%)',
          900: 'hsl(260, 8%, 14%)',
        },
        red: {
          300: 'hsl(0, 87%, 67%)',
        },
        gray: {
          300: 'hsl(0, 0%, 75%)',
        },
      },
    },
  },
  plugins: [],
};
