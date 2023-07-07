<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="f-right">
        <ul class="f-right-list">
          <li>
            <a href="/">
              <img
                id="logo"
                class="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                alt="logo"
              />
            </a>
          </li>
          <div class="f-right-developed-by" id="intro">
            <span>Developed by vuejs.org.</span>
            <span>All rights reserved. {{ date }}</span>
            <span>{{ timestamp }}</span>
          </div>
        </ul>
      </div>
      <div class="f-left">
        <ul class="f-left-list">
          <li><router-link to="/" class="f-link">Home</router-link></li>
          <li><router-link to="/about" class="f-link">About</router-link></li>
          <li><router-link to="/shop" class="f-link">Shop</router-link></li>
          <li><router-link to="/todo" class="f-link">Todo</router-link></li>
          <li><router-link to="/signin" class="f-link">Sign in</router-link></li>
          <li><router-link to="/signup" class="f-link">Sign up</router-link></li>
        </ul>
        <ul class="f-left-list">
          <li><router-link to="/" class="f-link">Home</router-link></li>
          <li><router-link to="/about" class="f-link">About</router-link></li>
          <li><router-link to="/shop" class="f-link">Shop</router-link></li>
          <li><router-link to="/todo" class="f-link">Todo</router-link></li>
          <li><router-link to="/signin" class="f-link">Sign in</router-link></li>
          <li><router-link to="/signup" class="f-link">Sign up</router-link></li>
        </ul>
      </div>
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
