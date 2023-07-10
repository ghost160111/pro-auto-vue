<template>
  <section class="home-intro">
    <h2 class="home-intro-title">{{ toUpperTitle }}</h2>
    <router-link class="g-btn" to="/catalog">{{ toUpperLink }}</router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Надежные, качественные аккумуляторы',
      catalog: {
        label: 'Перейти в каталог',
        link: '/catalog'
      }
    }
  },
  methods: {
    ToUpper(text) {
      text.toUpperCase();
    }
  },
  computed: {
    toUpperTitle() {
      return this.title.toUpperCase()
    },
    toUpperLink() {
      return this.catalog['label'].toUpperCase()
    }
  }
}
</script>

<style></style>

