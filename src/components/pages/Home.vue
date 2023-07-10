<template>
  <article class="home">
    <section class="home-intro">
      <button class="g-btn">Hello</button>
      <input class="g-input" type="text" v-model="inputText" :placeholder="inputText" />
      <p>{{ inputText }}</p>
    </section>
    <div class="home-info">
      <ul class="home-info-list">
        <!--<li v-for="(card, i) in home.list" :key="i">
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
            <a class="list-link" href="#"></a>
          </div>
        </li>-->
        <li v-for="(card, i) in list"
            :key="i">
          <div class="list-block">
            <div class="list-top">
              <img class="list-img" :src="card['image-link']" :alt="card['label']" />
            </div>
            <div class="list-bottom">
              <label class="list-label">{{ card['label'] }}</label>
              <div class="list-arrow">
                <img :src="card['arrow']" />
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


export default {
  data() {
    return {
      inputText: 'default input text',
      list: [
        {
          "image-link": "https://pro-auto-vue-zjjb.vercel.app/src/assets/other/images/icons/ico.svg",
          "label": "Наличный и безналичный расчет"
        },
        {
          "image-link": "https://pro-auto-vue-zjjb.vercel.app/src/assets/other/images/icons/ico2.svg",
          "label": "Техническая помощь и консультация"
        },
        {
          "image-link": "https://pro-auto-vue-zjjb.vercel.app/src/assets/other/images/icons/ico3.svg",
          "label": "Только качественная и проверенная продукция",
          "arrow": "https://pro-auto-vue-zjjb.vercel.app/src/assets/other/images/icons/Union.svg"
        },
        {
          "image-link": "https://pro-auto-vue-zjjb.vercel.app/src/assets/other/images/icons/ico4.svg",
          "label": "Мы всегда на связи с 9:00 до 18:00!",
          "arrow": "https://pro-auto-vue-zjjb.vercel.app/src/assets/other/images/icons/Union.svg"
        }
      ]
    }
  }
}
</script>

<style></style>
