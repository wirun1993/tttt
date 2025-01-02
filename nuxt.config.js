export default {
    // Global page headers: https://go.nuxtjs.dev/config-head

    target: 'static', // ตั้งค่าให้โปรเจกต์เป็น static site
    router: {
        base: '/deploymovie/' // เปลี่ยนเป็นชื่อ repository ของคุณ เช่น /movie/
    },
    generate: {
      dir: 'dist' // โฟลเดอร์ที่ใช้เก็บไฟล์ที่ build เสร็จ
    },
    
    head: {
        title: 'movie',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                rel: "stylesheet",
                integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
                crossorigin: "anonymous",
            },
            {
                rel: 'stylesheet',
                href: 'https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Kanit',
            },
        ],
        script: [{
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
                integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
                crossorigin: "anonymous",
            },
            {
                src: 'https://code.jquery.com/jquery-3.7.0.js',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/css.css',
        '~assets/resposive.css',
        '~assets/font.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}