<template>
  <svg class="search-svg" @click="openSearchBar()" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
    viewBox="0 0 40 40" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM22.8941 26.7226C21.4474 27.536 19.7779 28 18 28C12.4772 28 8 23.5228 8 18C8 12.4772 12.4772 8 18 8C23.5228 8 28 12.4772 28 18C28 20.2954 27.2266 22.4101 25.9263 24.0979L33.4142 31.5858L30.5858 34.4142L22.8941 26.7226Z"
      fill="white" />
  </svg>
  <div :class="searchComponent.searchCompClass">
    <input @keyup.enter="searchInGoogle" :class="searchComponent.searchBtnClass" type="search" name="search button"
      id="search" v-model="searchValue" />
    <button @click="searchInGoogle" class="search-btn" type="button">Найти</button>
    <button @click="openSearchBar" class="close-btn" type="button">
      <svg class="nav-off" viewBox="-65 -65 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g id="_x37_12-_close__x2C__cross__x2C__cancel__x2C_">
            <g>
              <line x1="350.21" x2="26.739" y1="26.814" y2="350.139"
                style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 13.4167; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 2.6131;">
              </line>
              <line x1="350.21" x2="26.739" y1="350.139" y2="26.814"
                style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 13.4167; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 2.6131;">
              </line>
            </g>
          </g>
          <g id="Layer_1"></g>
        </g>
      </svg>
    </button>
    <div :class="searchComponent.hiddenDialogClass">
      <span>Input field is empty</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchComponent: {
        searchValue: '',
        searchBtnClass: 'g-input search',
        searchCompClass: 'search-component',
        hiddenDialogClass: 'notification-dialog error'
      }
    }
  },
  methods: {
    openSearchBar() {
      if (this.searchBtnClass !== 'g-input search') {
        this.searchBtnClass = 'g-input search'
        this.hiddenDialogClass = 'notification-dialog error'
      } else {
        this.searchBtnClass = 'g-input search active'
      }
    },
    searchInGoogle() {
      if (this.searchValue !== '') {
        this.hiddenDialogClass = 'notification-dialog error'
        window.open(`https://www.google.com/search?q=${this.searchValue}`)
      } else {
        if (this.searchValue !== '') {
          this.hiddenDialogClass = 'notification-dialog error'
        } else {
          this.hiddenDialogClass = 'notification-dialog error popup'
        }
      }
      console.log(this.hiddenDialogClass)
    }
  }
}
</script>