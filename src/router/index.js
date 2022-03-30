import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpPage from '../views/SignUpPage.vue';
import UsersPage from '../views/UsersPage.vue';
// import { Auth } from 'aws-amplify';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/signup",
    name: "SignUpPage",
    component: SignUpPage
  },
  {
    path: "/users",
    name: "AlbumsPage",
    component: UsersPage,
    meta: { requiresAuth: true }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
