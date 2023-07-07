<template>
  <article class="home">
    <section class="home-intro">
      <button class="g-btn">Hello</button>
      <input class="g-input" type="text" />
    </section>
    <div class="home-info">
      <ul class="home-info-list">
        <li v-for="(card, i) in home.list" :key="i">
          <div class="list-block">
            <div class="list-top">
              <img class="list-img" :src="card['image-link']" :alt="card.label" />
            </div>
            <div class="list-bottom">
              <label class="list-label">{{ card.label }}</label>
              <div class="list-arrow">
                <img :src="card.arrow" />
              </div>
            </div>
            <!--<a class="list-link" href="#"></a>-->
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import home from '../../assets/data/pages/home.json'

export default {
  data() {
    return {
      home
    }
  }
}
</script>

<style></style>
