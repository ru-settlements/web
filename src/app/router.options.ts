import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/home/home.vue')
    },
    {
      name: 'news',
      path: '/news',
      component: () => import('~/pages/news/news.vue'),
      children: [
        {
          name: 'news-id',
          path: '/news/:id',
          component: () => import('~/pages/news-id/news-id.vue')
        }
      ]
    },
    {
      name: 'sign-in',
      path: '/sign-in',
      component: () => import('~/pages/signin/signin.vue')
    },
    {
      name: 'sign-up',
      path: '/sign-up',
      component: () => import('~/pages/signup/signup.vue')
    },
  ]
}
