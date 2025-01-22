const { tailwindcssPlugin } = require('@pantheon-systems/wordpress-kit');


/** @type {import('@pantheon-systems/wordpress-kit').TailwindcssConfig} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'grad-black-to-blue': 'linear-gradient(0deg, rgba(0,18,77,1) 8%, rgba(0,0,0,1) 100%)',
                'grad-second-black-to-blue': 'linear-gradient(180deg, #000 0%, #00124D 100%);',
                'grad-third-black-to-blue': 'Linear-gradient(180deg, #000 15%, #00124D 97%);',
            },
            screens: {
                'xxl': { 'max': '1600px' },
                // => @media (max-width: 1600px) { ... }

                'xxl-mid-up': { 'min': '1901px', 'max': '2499px' },
                // => @media (min-width: 1901px and max-width: 2499px) { ... }

                'xxl-mid': { 'min': '1601px', 'max': '1900px' },
                 // => @media (min-width: 1601px and max-width: 1900px) { ... }
                'small-desktop': { 'min': '1281px', 'max': '1500px' },
                // => @media (min-width: 1601px and max-width: 1280px) { ... }
                'large-desktop': { 'min': '1280px', 'max': '1601px' },
                // => @media (min-width: 1601px and max-width: 1280px) { ... }

                'xl': { 'max': '1279px' },
                // => @media (max-width: 1279px) { ... }

                'laptop-down': { 'max': '1200px' },
                // => @media (max-width: 1200px) { ... }

                'laptop-landscape': { 'raw': '(min-width: 1200px) and (max-height: 950px)' },
                // for short height

                'desktop-laptop': { 'min': '992px', 'max': '1599px' },
                // => @media (min-width: 992px and max-width: 1599px) { ... } 

                'laptop-mid': { 'min': '1200px', 'max': '1280px' },
                // => @media (min-width: 1200px and max-width: 1280px) { ... } 

                'laptop': { 'min': '1280px', 'max': '1599px' },
                // => @media (min-width: 1280px and max-width: 1599px) { ... }
                'small-laptop': { 'min': '1281px', 'max': '1366px' },
                // => @media (min-width: 1280px and max-width: 1366px) { ... } 

                'desktop': { 'min': '992px', 'max': '1279px' },
                // => @media (min-width: 992px and max-width: 1279px) { ... }

                'desktop-mid': { 'min': '992px', 'max': '1024px' },
                // => @media (min-width: 992px and max-width: 1279px) { ... }

                'laptop-small': {'min': '1025px', 'max': '1199px'},
                // => @media (min-width: 1025px and max-width: 1199px) { ... }

                'lg': { 'max': '991px' },
                // => @media (max-width: 991px) { ... }

                'tablet-mid': { 'min': '992px', 'max': '1199px' },
                // => @media (min-width: 992px and max-width: 1199px) { ... }

                'tablet': { 'min': '768px', 'max': '991px' },
                'tablet-landscape': { 'raw': '(min-width: 767px) and (max-width: 991px) and (orientation: landscape)' },
                // => @media (min-width: 768px and max-width: 991px) { ... }

                'md': { 'max': '767px' },
                // => @media (max-width: 767px) { ... }

                'phablet': { 'min': '596px', 'max': '767px' },
                // => @media (min-width: 596px and max-width: 767px) { ... }

                'sm': { 'max': '595px' },
                // => @media (max-width: 595px) { ... }

                'xs': { 'max': '480px' },
                // => @media (max-width: 480px) { ... }
                
                'iPhone-se': { 'max': '320px' },
                // => @media (max-width: 320px) { ... }

                //up widths 
                'sm-up': { 'min': '596px' },
                // => @media (min-width: 596px) { ... }

                'md-up': { 'min': '768px' },
                // => @media (min-width: 768px) { ... }

                'lg-up': { 'min': '992px' },
                // => @media (min-width: 992px) { ... }

                'xl-up': { 'min': '1280px' },
                // => @media (min-width: 1280px) { ... }

                'xxl-up': { 'min': '1601px' },
                // => @media (min-width: 1280px) { ... }

                'mid-wide-screen': { 'min': '1800px' },
                // wide screen 
                'wide-screen': { 'min': '2499px' },
                // wide screen 

                'wide-nav-screen': { 'min': '3052px' },
                // wide screen 
            },
            width: {
                'mainContent': 'calc(100% + 550px)',
                'threeCardWrap': 'calc(100% + 20px)',
                'threeCard': 'calc(33.33% - 20px)',
                'halfWidth': 'calc(50% - 20px)'
            },
            colors: {
                'purple': '#5F60FF',
                "grey": "#666666",
                "green": "#186801",
                "brown": "#946c48",
                "skyblue": "#EAF0FF",
                "blue": '#2E69FF',
                'black': '#000000',
                'white': '#ffffff',
                'oceanGreen': '#79F7C6',
                'darkGray': '#1E293B',
                'lightGray': '#F5F3F5',
                'pink': '#FF3B84',
                'yello': '#FFCA36',
                'darkBlue': '#00124D',
                'lowerBlue': '#2E69FFE6',
                'lightBlue':'rgba(46, 105, 255, 0.05)'
            },
            boxShadow: {
                'pink-shadow': '0px 4px 40px 0px rgba(255, 59, 132, 0.40)',
                'white-shadow': '0px 0px 32px 2px rgba(255, 255, 255, 0.24)',
                'light-white-shadow': '0px 0px 10px 2px rgba(255, 255, 255, 0.24)',
                'sticky-shadow': '0px 4px 8px 0px rgba(0, 0, 0, 0.16)',
                'filter-shadow': '0px 4px 8px 0px rgba(0, 0, 0, 0.24)',
                'black-shadow': '0px 2px 32px 2px rgba(0, 0, 0, 0.24)',
                'light-black-shadow': '0px 2px 10px 2px rgba(0, 0, 0, 0.24)',
                'bottom-white-shadow': '0px 4px 8px 0px rgba(0, 0, 0, 0.16)',
                'nav-shadow': '0px 5px 20px 0px rgba(0, 0, 0, 0.08)',
                'btn': '0 0 0 3px inset #FF3B84',
                'eventCards-shadow': '0px 8px 32px 2px rgba(0, 0, 0, 0.24)'
            },
            keyframes: {
                slideScroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-162px * 5))' },
                }
            },
        },

    },
    plugins: [require('@tailwindcss/typography'), tailwindcssPlugin],
};