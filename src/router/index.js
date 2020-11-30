import Vue from 'vue';
import VueRouter from 'vue-router';
//import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import SignIn from '../views/auth/SignIn.vue';
import Notifications from '../views/Notifications.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }, 
  {
    path: '/auth-signin',
    name: 'auth-signin',
    component: SignIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
