import { createRouter, createWebHistory } from 'vue-router'

// components
import PageMain from '@/pages/PageMain.vue'
import PageProperties from '@/pages/PageProperties.vue'
import PageFavourites from '@/pages/PageFavourites.vue'
import PageProductView from '@/pages/PageProductView.vue'
import PageMyProperties from '@/pages/PageMyProperties.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: PageMain },
    { path: '/properties', component: PageProperties },
    { path: '/myproperties', component: PageMyProperties },
    { path: '/favourites/:id', component: PageFavourites },
    {
      path: '/product/:id',
      name: 'product',
      component: PageProductView
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
