/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
    '../twine-ui/src/**/*.{js,ts,jsx,tsx,mdx}', // <-- remove this before pushing!!!!
  ],
  theme: {
    extend: {
      colors: {
        border: '#e5e7eb',
        ring: '#3b82f6',
      },
    },
  },
  plugins: [],
};
