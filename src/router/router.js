import { createRouter, createWebHistory } from 'vue-router'

// components
import PageMain from '@/pages/PageMain.vue'
import PageProperties from '@/pages/PageProperties.vue'
import PageFavourites from '@/pages/PageFavourites.vue'
import PageProductView from '@/pages/PageProductView.vue'
import PageMyProperties from '@/pages/PageMyProperties.vue'
import PageUserProfile from '@/pages/PageUserProfile.vue'
import PageSignIn from '@/pages/PageSignIn.vue'
import PageRegister from '@/pages/PageRegister.vue'
import PageAddPropertie from '@/pages/PageAddPropertie.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: PageMain },
    { path: '/sign-in', component: PageSignIn },
    { path: '/register', component: PageRegister },
    { path: '/profile', component: PageUserProfile },
    { path: '/properties', component: PageProperties },
    { path: '/my-properties', component: PageMyProperties },
    { path: '/add-propertie', component: PageAddPropertie },
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
