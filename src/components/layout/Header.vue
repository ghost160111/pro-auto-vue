<template>
  <h1 class="hidden">{{ title }}</h1>
  <header @load="on_data_load()" class="header">
    <div class="header-wrapper">
      <nav class="nav">
        <div class="nav-left">
          <a href="/">
            <img
              v-bind:on-loadeddata="on_data_load"
              id="logo"
              class="logo"
              src="../../assets/other/images/logos/logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div class="nav-right">
          <button @click="toggleMenu" v-bind:class="showMenuClass" type="button">
            <svg class="nav-on" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Menu / Hamburger_LG">
                  <path
                    id="Vector"
                    d="M3 17H21M3 12H21M3 7H21"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
            <svg
              class="nav-off"
              viewBox="-65 -65 512 512"
              version="1.1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#fff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="_x37_12-_close__x2C__cross__x2C__cancel__x2C_">
                  <g>
                    <line
                      style="
                        fill: none;
                        stroke: #fff;
                        stroke-width: 13.4167;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 2.6131;
                      "
                      x1="350.21"
                      x2="26.739"
                      y1="26.814"
                      y2="350.139"
                    ></line>
                    <line
                      style="
                        fill: none;
                        stroke: #fff;
                        stroke-width: 13.4167;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 2.6131;
                      "
                      x1="350.21"
                      x2="26.739"
                      y1="350.139"
                      y2="26.814"
                    ></line>
                  </g>
                </g>
                <g id="Layer_1"></g>
              </g>
            </svg>
          </button>
          <ul class="nav-list">
            <li><router-link @click="toggleMenu" to="/" class="nav-link">Компания</router-link></li>
            <li>
              <router-link @click="toggleMenu" to="/about" class="nav-link">Каталог</router-link>
            </li>
            <li>
              <router-link @click="toggleMenu" to="/service" class="nav-link">Услуги</router-link>
            </li>
            <li>
              <router-link @click="toggleMenu" to="/about" class="nav-link">Информация</router-link>
            </li>
            <li>
              <router-link @click="toggleMenu" to="/company" class="nav-link">Контакты</router-link>
            </li>
            <li>
              <router-link @click="toggleMenu" to="/order-call" class="nav-link order-call"
                >Заказать звонок</router-link
              >
            </li>
            <li><input type="search" name="search button" id="search" /></li>
            <li>
              <router-link @click="toggleMenu" to="/cart" class="nav-link cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path d="M14 11H33.3599L29.9849 23H14V11Z" stroke="white" stroke-width="4" />
                  <path d="M14 4L14 24.5" stroke="white" stroke-width="4" />
                  <path d="M14 6H4" stroke="white" stroke-width="4" />
                  <circle cx="17" cy="31" r="3" stroke="white" stroke-width="4" />
                  <circle cx="28" cy="31" r="3" stroke="white" stroke-width="4" />
                </svg>
                <span class="cart-qty">{{ cardQty }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'Pro-auto - Надежные аккумуляторы',
      cardQty: 0,
      showMenu: false,
      showMenuClass: 'nav-list-on',
      btn: document.querySelector('.nav-list-on'),
      list: document.querySelector('.nav-list'),
      links: document.querySelectorAll('.nav-link')
    }
  },
  methods: {
    toggleMenu() {
      try {
        if ((this.showMenu = !this.showMenu)) {
          this.showMenuClass += ' active'
        } else {
          this.showMenuClass = 'nav-list-on'
        }
      } catch (error) {
        console.log(`${error.name}: ${error.message}`)
      }
    },
    on_data_load() {
      window.addEventListener('load', () => {
        const logo = document.querySelector('#logo')
        logo.style.animation = 'anim-opacity 3s ease-in-out'
      })
    }
  }
}
</script>

<style></style>
