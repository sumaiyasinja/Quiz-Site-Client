/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violate': '#4A154B',
        'olive': '#CDC500',
        'blue1': '#5942B7',
        'light-olive': '#B6F404',
        'dark-blue': '#32246D',
        'green': '#47F638',
        'dark-purple': '#063B6D',
        'purple-shadow': '#052F57',
        'light-green': '#54C999',
        'semilight-green': '#4EBB8E',
        'my-gray': '#ECECEC',
        'my-red': '#FF0000',
        
      },
    },
  },
  plugins: [
    require('daisyui'),

  ],
}

