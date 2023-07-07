<template>
  <Load />
  <div class="v-application" v-cloak>
    <div class="v-application-wrap">
      <Navigation />
      <main class="main">
        <div class="main-wrapper">
          <router-view></router-view>
          <button @click="scroll_top()" class="scroll-top add-task" type="button">Top</button>
        </div>
      </main>
      <FooterComp />
    </div>
  </div>
</template>

<script>
import Load from './components/animations/Load.vue'
import Navigation from './components/layout/Header.vue'
import FooterComp from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    FooterComp,
    Load
  },
  methods: {
    scroll_top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
article {
  min-width: 100% !important;
}

article button,
input {
  font-size: 1em;
}
</style>
