import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import NProgress from 'nprogress';
import AddItem from '../components/AddItem.vue'
import EditItem from '../components/EditItem.vue'
import Rankings from '../components/Rankings.vue'
import Activity from '../components/Activity.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import RecordActivity from '../components/RecordActivity.vue'

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Add',
      path: '/add',
      component: AddItem
    },
    {
      name: 'Edit',
      path: '/edit/:id',
      component: EditItem
    },
    {
      name: 'Rankings',
      path: '/rankings',
      component: Rankings,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'Activity',
      path: '/activity',
      component: Activity,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name: 'Record',
      path: '/record',
      component: RecordActivity,
      meta: {
        requiresAuth: true
      }
    }
  ],
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('Login')
  else if (!requiresAuth && currentUser) next()
  else next()
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router