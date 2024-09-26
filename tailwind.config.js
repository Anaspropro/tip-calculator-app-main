/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      letterSpacing: {
        'extra-tight': '-0.1em',
        'extra-wide': '0.3em',
      },
    },
  },
  plugins: [],
}

