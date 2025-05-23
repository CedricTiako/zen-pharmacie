/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      xs: '9.5px',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        'blue': {

              //       50: '#e1f2e0',
    // 100: '#b3dfb3',
    // 200: '#81ca80',
    // 300: '#4eb44d',
    // 400: '#28a426',
    // 500: '#029400',
    // 600: '#028c00',
    // 700: '#018100',
    // 800: '#017700',
    // 900: '#016500',
          10:'#878787',
        50: '#eef9ed',
    100: '#d4f0d2',
    200: '#b7e6b4',
    300: '#9adb96',
    400: '#84d480',
    500: '#6ecc69',
    600: '#66c761',
    700: '#5bc056',
    800: '#51b94c',
     900: '#016500',



    //       50: '#e1f2e0',
    // 100: '#b3dfb3',
    // 200: '#81ca80',
    // 300: '#4eb44d',
    // 400: '#28a426',
    // 500: '#029400',
    // 600: '#028c00',
    // 700: '#018100',
    // 800: '#017700',
    // 900: '#016500',
        },
        'yellow': {
          10:'#878787',
          50:  '#fff9e0',
          100: '#ffedb0',
          200: '#ffe27d',
          300: '#ffd844',
          400: '#ffcd05',
          500: '#ffc400',
          600: '#ffb600',
          700: '#ffa200',
          800: '#ff9000',
          900: '#ff6f00',
        },
        'Green': {
          10:'C1C1C1',
          50:  '#fff9e0',
          100: '#ffedb0',
          200: '#ffe27d',
          300: '#ffd844',
          400: '#ffcd05',
          500: '#ffc400',
          600: '#ffb600',
          700: '#ffa200',
          800: '#',
          900: '#ff6f00',
        },
      },
    },
  },
  plugins: [],
}
