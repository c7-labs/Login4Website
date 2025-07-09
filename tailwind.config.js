/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // All HTML files in root
    "./**/*.html",        // All HTML files in subfolders
    "./*.js",             // Any vanilla JS files
    "./**/*.js"           // JS in subfolders too
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#f0fdfa',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a'
        }
      }
    },
  },
  plugins: [],
};
