/** @type {import('tailwindcss').Config} */

module.exports = {
   content: [
      './src/**/*.{html,ts}',

      // Library styles hack https://stackoverflow.com/a/70862767/4986557
      './node_modules/ngx-lib/**/*.{html,ts,js}',
   ],
   theme: {
      extend: {},
   },
   plugins: [],
};
