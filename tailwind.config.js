/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ← Very important!
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'Admission': "url('/images/ad_lower.jpeg')",
        'Facilities': "url('/images/ray.JPG')",
      },
      colors: {
        footers: {
          default: "#2f2629",
        },
        footerend: {
          default: "#7c2f4f",
        },
      },
    },
  },
  plugins: [],
};
