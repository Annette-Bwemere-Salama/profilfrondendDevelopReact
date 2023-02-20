/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
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
    colors: {
      "yellowShocol": "#f3bf99",
      "red": "#fca5a5",
      "gray": "#94a3b8",
      "rose": "#fda4af",
      "rosePink": "#fca5a5"
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {},
  },
  plugins: [],
}
