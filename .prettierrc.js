/** @type {import('prettier').Options} */
const config = {
   printWidth: 130,
   tabWidth: 3,
   singleQuote: true,
   bracketSameLine: true,
   singleAttributePerLine: false,
   plugins: [
      'prettier-plugin-organize-imports',
      'prettier-plugin-packagejson',
      '@ianvs/prettier-plugin-sort-imports',
      'prettier-plugin-jsdoc',
      'prettier-plugin-tailwindcss',
   ],
   importOrder: ['^@angular/(.*)$', '^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
};

module.exports = config;
