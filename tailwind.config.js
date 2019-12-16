/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'redy-gray': '#f8f2ee',
        'redy-gold': '#ffce07'
      },
      screens: {
        'xs': '520px',
        // => @media (min-width: 520px) { ... }
      }
    }
  },
  variants: {},
  plugins: [],
}
