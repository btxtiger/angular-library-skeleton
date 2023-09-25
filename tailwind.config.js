/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ['./src/**/*.{html,ts}', './projects/ngx-lib/src/**/*.{html,ts}'],
   darkMode: 'class',
   theme: {
      extend: {},
   },
   plugins: [],
   experimental: {
      optimizeUniversalDefaults: true,
   },
};
