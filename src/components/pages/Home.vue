<template>
  <article class="home">
    <Intro />
    <div class="home-info">
      <ul class="home-info-list">
        <li v-for="(card, i) in home['list']" :key="i">
          <div class="list-block">
            <div class="list-top">
              <img class="list-img"
                   :src="`src/assets/other/images/icons/${card['image-link']}`"
                   :alt="card['label']"
              />
            </div>
            <div class="list-bottom">
              <label class="list-label">{{ card['label'] }}</label>
              <div class="list-arrow">
                <img v-if="card['arrow'] !== undefined"
                     :src="`src/assets/other/images/icons/${card['arrow']}`"
                />
                <img v-else />
              </div>
            </div>
            <a class="list-link" href="#"></a>
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import home from '../../assets/data/pages/home.json'
import Intro from '../sub-comps/Intro.vue'

export default {
  name: 'Home',
  components: {
    Intro
  },
  data() {
    return {
      home,
      test_inputText: 'default input text',
    }
  }
}
</script>

<style></style>
