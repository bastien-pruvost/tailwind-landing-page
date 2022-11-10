/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue,html}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gradient: {
          100: '#4458B6',
          200: '#6242D1',
          h100: '#33438A',
          h200: '#4F36A8',
        },
      },
      boxShadow: {
        sides: '1px 1px 20px -8px rgba(0, 0, 0, 0.2)',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
};
