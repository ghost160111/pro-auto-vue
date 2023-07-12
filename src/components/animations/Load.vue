<template>
  <div v-bind="loading()" id="load" class="load">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  components: {},
  methods: {
    loading() {
      try {
        document.addEventListener('DOMContentLoaded', () => {
          let load = document.getElementById('load')
          let appLayout = document.getElementById('app')
          window.addEventListener('load', () => {
            setTimeout(() => {
              load.style.transform = 'translateX(-100%)'
              load.style.transition = 'all 0.5s ease'
            }, 1500)
            setTimeout(() => {
              appLayout.style.animation = 'html-load-anim 1s ease'
            }, 1500)
          })
        })
      } catch (error) {
        console.log(`${error.name}: ${error.message}`)
      }
    }
  }
}
</script>

<style>
.load {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  background-color: var(--white);
  color: var(--black);
  min-height: 100%;
  min-width: 100%;
  z-index: 10000;
}

.dot {
  background: var(--black);
  color: var(--black);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  animation: loading-animation linear 1s infinite;
}

.dot:nth-child(1) {
  animation-delay: 0.1s;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
}
.dot:nth-child(3) {
  animation-delay: 0.3s;
}
.dot:nth-child(4) {
  animation-delay: 0.4s;
}
.dot:nth-child(5) {
  animation-delay: 0.5s;
}

@keyframes loading-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes loading-finished {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}

.load2 {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  background: var(--black);
  color: var(--white);
  min-height: 100%;
  min-width: 100%;
  z-index: 10000;
}

.stick {
  min-height: 25rem;
  min-width: 5px;
  border-radius: 20px;
  background: linear-gradient(45deg, cyan, var(--red));
  animation: load-animation 2500ms infinite linear;
}

.stick:nth-child(2) {
  animation-delay: 200ms;
}

.stick:nth-child(3) {
  animation-delay: 300ms;
}

.stick:nth-child(4) {
  animation-delay: 400ms;
}

.stick:nth-child(5) {
  animation-delay: 500ms;
}

.stick:nth-child(6) {
  animation-delay: 600ms;
}

.stick:nth-child(7) {
  animation-delay: 700ms;
}

.stick:nth-child(8) {
  animation-delay: 800ms;
}

.stick:nth-child(9) {
  animation-delay: 900ms;
}

.stick:nth-child(10) {
  animation-delay: 1000ms;
}

.stick:nth-child(11) {
  animation-delay: 1100ms;
}

.stick:nth-child(12) {
  animation-delay: 1200ms;
}

.stick:nth-child(13) {
  animation-delay: 1300ms;
}

.stick:nth-child(14) {
  animation-delay: 1400ms;
}

.stick:nth-child(15) {
  animation-delay: 1500ms;
}

.stick:nth-child(16) {
  animation-delay: 1600ms;
}

.stick:nth-child(17) {
  animation-delay: 1700ms;
}

.stick:nth-child(18) {
  animation-delay: 1800ms;
}

.stick:nth-child(19) {
  animation-delay: 1900ms;
}

.stick:nth-child(20) {
  animation-delay: 2000ms;
}

@keyframes load-animation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.01);
  }

  100% {
    transform: scale(1);
  }
}
</style>
