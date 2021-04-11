const webpack = require('webpack')

export default {
    server: {
        port: 8000, // default: 3000
        host: '0.0.0.0', // default: localhost,
        timing: false
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'MonicaCentri',
        htmlAttrs: {
            lang: 'it'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        script: [{
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
                //src: 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js',
                //src: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js',

            },

        ],

        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.svg'
            },
            {
                rel: 'stylesheet',
                // href: 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css'
                //href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.4.0/mdb.rtl.min.css'

            },



        ],

    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // Load a Node.js module directly (here it's a Sass file)
        // 'bulma',
        // CSS file in the project
        '~/assets/css/main.css',
        '~/assets/font/Montserrat.css',


    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        /*Plugin media query */
        {
            src: '~/plugins/vueMq'
        }

    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        //GSAP
        'nuxt-gsap', ['nuxt-gsap-module'],
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        //Libreria per la gestione delle lingue
        ['nuxt-i18n', {
            lazy: true,
            locales: [{
                    name: 'Italiano',
                    code: 'it',
                    iso: 'it-IT',
                    file: 'it-IT.js'
                },
                {
                    name: 'Inglese',
                    code: 'en',
                    iso: 'en-US',
                    file: 'en-US.js'
                },
                {
                    name: 'Spagnolo',
                    code: 'es',
                    iso: 'es-ES',
                    file: 'es-ES.js'
                },
            ],
            langDir: 'lang/',
            defaultLocale: 'it',
        }],

        'mdbvue/nuxt',

    ],

    mdbvue: {
        // icons: false, // FA5
        roboto: false, // font Roboto
        // css: false, // MDB CSS
        bootstrap: false // Bootstrap CSS
    },

    //Import Script
    script: [

    ],

    //Gsap Options
    gsap: {
        /* module options */
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        //*Jquery  */
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    }, //build 
}