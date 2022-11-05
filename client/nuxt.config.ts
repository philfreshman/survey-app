// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    sourcemap: undefined,
    imports: undefined,
    app: {
        baseURL: "/surveyapp",
        head: {
            title: 'SurveyApp',
            titleTemplate: '%s - Awesome Voting',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/surveyapp/favicon.ico' }],
            meta: [
                { charset: "UTF-8"},
                { name: "author", content: "Philip Swiezak"},
                { name: "keywords", content: "HTML, CSS, TypeScript, Go, Vue" },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
        },

    },

    css: ["@/assets/scss/main.scss"],
    ssr: false,
    nitro: {
        serveStatic: false
    },
    modules: ['@formkit/nuxt']
})
