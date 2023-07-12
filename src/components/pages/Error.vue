<template>
  <article class="error">
    <h2 class="error-status">404</h2>
    <p class="error-description">The page you are requesting doesn't exist!</p>
  </article>
</template>

<script>
export default {
  name: 'Error-Page',
  components: {},
  data() {
    return {}
  }
}
</script>

<style>
.error {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.error-status {
  font-size: 18rem;
  line-height: 25rem;
  margin-bottom: 3rem;
  border-bottom: 1rem solid var(--red);
  animation: anim-404 3200ms infinite linear;
}

.error-description {
  font-size: 1.5rem;
}

@keyframes anim-404 {
  0% {
    filter: opacity(0.5);
    color: var(--red);
    border-color: var(--black);
    transform: translateX(0) rotateX(0deg) scale(0.25);
  }

  25% {
    filter: opacity(0.8);
    color: var(--black);
    border-color: var(--red);
    transform: translateX(5rem) rotateX(90deg) scale(0.5);
  }

  50% {
    filter: opacity(1);
    color: var(--red);
    border-color: var(--black);
    transform: translateX(0) rotateY(180deg) scale(1);
  }

  75% {
    filter: opacity(0.8);
    color: var(--black);
    border-color: var(--red);
    transform: translateX(-5rem) rotateY(270deg) scale(0.5);
  }

  100% {
    filter: opacity(0.5);
    color: var(--red);
    border-color: var(--black);
    transform: translateX(0) rotateX(360deg) scale(0.25);
  }
}
</style>
