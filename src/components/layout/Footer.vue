<template>
  <footer class="footer">
    <div class="f-wrapper">
      {{ timestamp + ' | ' + date }}
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getUTCFullYear(),
      timestamp: ''
    }
  },
  created() {
    setInterval(this.getNow, 1000)
  },
  methods: {
    getNow() {
      const today = new Date()
      this.timestamp = today.toLocaleTimeString()
    }
  }
}
</script>

<style></style>
