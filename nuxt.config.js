const webpack = require('webpack')

export default {
    server: {
        port: 8000, // default: 3000
        host: '0.0.0.0', // default: localhost,
        timing: false
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Monica Centri',
        htmlAttrs: {
            lang: 'it'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no'

            },
            {
                name: "keywords",
                content: 'centro, estetico, monica, lentella, vasto, bellezza, beauty, monica centri, centro estetico, crema, laser, epilazione, biolifting, depilazione, mai+xl, pulizia evoluition, monica sciscia,'

            },
            {
                property: "og:description",
                content: 'Non il solito centro estetico.'

            },
            {
                property: "og:title",
                content: 'Monica Centri'

            },
            {
                name: "description",
                content: 'Non il solito centro estetico.'

            },
            {
                name: "title",
                content: 'Monica Centri'

            },
            {
                name: "google-site-verification",
                content: "q9GpriJR7UqD9iv7GtaJmFxC5wK1k0-kvwDTYWT0Y5c"
            },

        ],
        script: [{
                // src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
                //src: 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js',
                //src: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js',
                src:   '~/plugins/pixel.js',
            },

        ],

        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.svg'
            },
            {
                rel: 'apple-touch-icon',
                href: '/logo.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: "76x76",
                href: '/logo.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: "120x120",
                href: '/logo.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: "152x152",
                href: '/logo.png'
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

        //'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
        // 'vue-slick-carousel/dist/vue-slick-carousel.css',


    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        /*Plugin media query */
        {
            src: '~/plugins/vueMq'
        },

        '~/plugins/vue-slick-carousel.js',

    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        //GSAP
        //  'nuxt-gsap', ['nuxt-gsap-module'],
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        //Anime js
        ['nuxt-animejs'],

        //nuxt compressor
        'nuxt-compress',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        //Libreria per la gestione delle lingue
        ['nuxt-i18n', {
            lazy: true,
            locales: [{
                    name: 'Italiano',
                    code: 'it',
                    iso: 'it-IT',
                    file: 'it-IT.js'
                },
                /*{
                    name: 'English',
                    code: 'en',
                    iso: 'en-US',
                    file: 'en-US.js'
                },*/
                {
                    name: 'English',
                    code: 'en',
                    iso: 'it-IT',
                    file: 'it-IT.js'
                },

            ],
            langDir: 'lang/',
            defaultLocale: 'it',
        }],

        '@nuxtjs/google-gtag',



    ],

    //Nuxt Compress
    brotli: {
        threshold: 8192,
    },

    /*Amp Modules Options */
    amp: {
        // Options
    },

    'google-gtag': {
        id: 'G-V34VSD554J', // required
        config: {
            // this are the config options for `gtag
            // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
            anonymize_ip: true, // anonymize IP 
            send_page_view: false, // might be necessary to avoid duplicated page track on page reload
            linker: {
                domains: ['monicacentri.com', 'www.monicacentri.com']
            }
        },
        debug: true, // enable to track in dev mode
        disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
        // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
        additionalAccounts: [{
            id: 'AW-XXXX-XX', // required if you are adding additional IDs
            config: {
                send_page_view: false // optional configurations
            }
        }]
    },

    //*Impostazioni Auth */
    auth: {
        strategies: {
            local: {
                //scheme: 'refresh',
                token: {
                    property: 'data.token',
                    maxAge: 5,
                    // type: 'Bearer'
                },

                /* refreshToken: {
                     property: 'access_token',
                     data: 'refresh_token',
                     maxAge: 60 * 60 * 24 * 30
                 },*/
                user: {
                    property: 'data',
                    //         autoFetch: false,

                },
                endpoints: {
                    login: {
                        url: '/auth/login',
                        method: 'post',
                        //property: "data.token"
                    },
                    refresh: {
                        url: '/auth/refresh',
                        method: 'post'
                    },
                    logout: {
                        url: '/auth/logout',
                        method: 'post'
                    },
                    user: {
                        url: '/auth/me',
                        method: 'get',
                        //property: "data"
                    }
                },
                redirect: {
                    login: '/login',
                    logout: '/',
                    callback: '/login',
                    home: '/dashboard'
                },
                // rewriteRedirects: true,
            }
        },

    },

    axios: {
        baseURL: 'https://www.monicacentri.com/BackEnd/BackEndMonicaCentri/public/api',
        //production confing https://www.monicacentri.com/BackEnd/BackEndMonicaCentri/public/api/auth/me
        //local confing http://127.0.0.1:8000/api

    },
    mdbvue: {
        // icons: false, // FA5
        roboto: false, // font Roboto
        // css: false, // MDB CSS
        bootstrap: false // Bootstrap CSS
    },

    //**Barra Loading tra pagine */
    loading: {
        color: '#af384f',
        height: '5px'
    },


    // Add global page transition
    pageTransition: {
        name: 'page',
        mode: 'out-in',
        css: false,

        beforeEnter(el) {
            this.$anime.set(el, {
                opacity: 0
            })
        },

        enter(el, done) {
            this.$anime({
                targets: el,
                opacity: [0, 1],
                duration: 500,
                easing: 'easeInOutSine',
                complete: done
            })
        },

        leave(el, done) {
            this.$anime({
                targets: el,
                opacity: [1, 0],
                duration: 500,
                easing: 'easeInOutSine',
                complete: done
            })
        }
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