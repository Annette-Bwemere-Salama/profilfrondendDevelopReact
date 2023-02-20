/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {

    theme: {
      screens: {
        'mobile': '640px',
        // => @media (min-width: 640px) { ... }

        'tablette': '768px',
        // => @media (min-width: 768px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'large': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    extend: {},
  },
  plugins: [],
}
