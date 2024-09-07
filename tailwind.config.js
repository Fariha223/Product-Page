/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      'pt-serif': ['PT Serif', 'serif'],
      'playfair': ['"Playfair Display"', 'serif'],
      'dancing-script': ['"Dancing Script"', 'cursive'],
    },
  },
};
export const plugins = [];

