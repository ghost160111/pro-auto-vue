<template>
  <Load />
  <div class="v-application" v-cloak>
    <div class="v-application-wrap">
      <Navigation />
      <main class="main">
        <div class="main-wrapper">
          <router-view></router-view>
          <button class="scroll-top add-task" @scroll="scrollingEvent()" @click="scroll_top()" type="button">Top</button>
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
  data() {
    return {
      hiddenClass: false
    }
  },
  methods: {
    scroll_top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    scrollingEvent() {
      window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
          this.hiddenClass = true
          console.log('Scroll hidden')
        } else {
          this.hiddenClass = false
          console.log('Scroll is not hidden')
        }
      })
    }
  },
  computed: {

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
