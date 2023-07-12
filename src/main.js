// main .css file
import './assets/style.css'

// vue imports
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'

// add icons to library
library.add(faUserSecret)

// pages for router
import App from './App.vue'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Cart from './components/pages/Cart.vue'
import Error from './components/pages/Error.vue'

// App initialization
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { title: 'Home' } },
    { path: '/about', name: 'About', component: About, meta: { title: 'About' } },
    { path: '/cart', name: 'Cart', component: Cart, meta: { title: 'Cart' } },
    { path: '/:catchAll(.*)', name: 'Error', component: Error, meta: { title: 'Error' } }
  ]
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title

  if (title) {
    document.title = 'Vue.js - ' + title
  }

  next()
})

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
