// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:3000/'
    }
  }
})
