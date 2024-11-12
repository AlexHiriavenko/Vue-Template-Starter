import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import HomeView from '../views/HomeView.vue'
import BookingEvents from '@/views/BookingEvents.vue'
import AdminPanel from '@/views/AdminPanel.vue'
import FavoriteEvents from '@/views/FavoriteEvents.vue'
import NotFound from '@/views/NotFound.vue'
import NestedRoute_1 from '@/components/nested-routes/NestedRoute_1.vue'
import NestedRoute_2 from '@/components/nested-routes/NestedRoute_2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home', showInTabs: true }
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoriteEvents,
    meta: { title: 'Favorites', requiresAuth: false, showInTabs: true }
  },
  {
    path: '/booking',
    name: 'booking',
    component: BookingEvents,
    meta: { title: 'Booking', requiresAuth: true, showInTabs: true }
  },
  {
    path: '/admin-panel',
    name: 'admin-panel',
    component: AdminPanel,
    meta: {
      title: 'Admin',
      requiresAuth: true,
      requiresAdmin: true,
      showInTabs: false
    },
    children: [
      {
        path: 'nested-route-1',
        name: 'nested-route-1',
        component: NestedRoute_1,
        meta: {
          title: 'Nested Route 1',
          requiresAuth: true,
          requiresAdmin: true
        }
      },
      {
        path: 'nested-route-2',
        name: 'nested-route-2',
        component: NestedRoute_2,
        meta: {
          title: 'Nested Route 2',
          requiresAuth: true,
          requiresAdmin: true
        }
      }
    ]
  },
  {
    path: '/auth-required',
    name: 'auth-required',
    component: NotFound,
    meta: { title: 'Authorization Required', showInTabs: false }
  },
  {
    path: '/admin-required',
    name: 'admin-required',
    component: NotFound,
    meta: { title: 'Authorization Required', showInTabs: false }
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound,
    meta: { title: '404', showInTabs: false }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth) {
    if (!userStore.isLoggedIn) {
      next({ name: 'auth-required', query: { redirect: to.fullPath } })
      return
    }

    if (to.meta.requiresAdmin && userStore.currentUser.role !== 'admin') {
      next({ name: 'admin-required', query: { redirect: to.fullPath } })
      return
    }
  }

  next()
})

export default router
