module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        'rubik-mono-one': ['"Rubik Mono One"', 'sans-serif'],
      },
    },
  },
};
