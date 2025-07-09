/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // pour Next.js
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
plugins: [
  function ({ addComponents }) {
    addComponents({
      ".blur-card": {
        "@apply isolate aspect-video w-96 rounded-xl bg-white/0 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl": {},
      },
    });
  },
],
};
