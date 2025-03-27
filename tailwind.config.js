// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Asegúrate de incluir todos los archivos JSX/JS
    ],
    theme: {
      extend: {
        colors: {
          primary: '#D4AF37',
          secondary: '#ff4b4b',
          accent: '#1cb0f6',
          neutral: '#777',
          'light-gray': '#f7f7f7',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };