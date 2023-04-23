import { ofetch } from 'ofetch';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  globalThis.$apiFetch = ofetch.create({
    baseURL: nuxtApp.$config.public.baseUrl
  })
});
