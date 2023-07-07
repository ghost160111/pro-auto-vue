import './assets/style.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Error from './components/pages/Error.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { title: 'Home' } },
    { path: '/about', name: 'About', component: About, meta: { title: 'About' } },
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

app.mount('#app')
