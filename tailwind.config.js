/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)'], // uses the CSS variable from global.css
            },
        },
    },
    plugins: [],
};
