/** @type {import('tailwindcss').Config} */


const plugin = require('tailwindcss/plugin')
module.exports =  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
    
    require('tw-elements/dist/plugin')
  ],
}
