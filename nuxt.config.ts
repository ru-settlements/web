// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
      '@ru-settlements/ui-components/dist/lib.css',
      '~/assets/styles/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/colors.scss";'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:3000/'
    }
  },
})
