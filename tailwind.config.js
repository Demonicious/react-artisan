module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'artisan-dark': '#2b2d36',
                'artisan-light': '#424552'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}