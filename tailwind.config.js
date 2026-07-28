/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scrapbook: {
          pink: '#fde2e4',
          pinkHover: '#ffcad4',
          rose: '#f4acb7',
          darkRose: '#d87080',
          beige: '#faf7f2',
          cream: '#f3eee7',
          sand: '#ede5d8',
          paper: '#fffdfa',
          tape: 'rgba(255, 255, 255, 0.75)',
          folder: '#fed7aa',
          folderPink: '#fbcfe8',
          macBlue: '#007aff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        caveat: ['"Caveat"', 'cursive'],
        serifAccent: ['"Instrument Serif"', 'serif'],
      },
      boxShadow: {
        'paper': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'paper-lg': '0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.08)',
        'skeuo': 'inset 0 1px 0 rgba(255,255,255,0.6), 0 4px 12px rgba(0,0,0,0.12)',
        'skeuo-down': 'inset 0 2px 4px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.05)',
        'folder': '0 15px 35px rgba(232, 141, 157, 0.3), 0 5px 15px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
