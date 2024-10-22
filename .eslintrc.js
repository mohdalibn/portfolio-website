// .eslintrc.js
module.exports = {
    extends: 'next/core-web-vitals',  // Use Next.js recommended settings
    parserOptions: {
      ecmaVersion: 2021,  // Enable modern JavaScript
      sourceType: 'module',  // Enable import/export statements
    },
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  };
  