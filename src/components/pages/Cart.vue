<template>
  <article class="cart">
    
  </article>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      productName: '',
      productPrice: 0,
      productQty: 0,
      cart: []
    }
  },
  methods: {
    addCart(productName, productQty, productPrice) {
      this.cart.push({
        id: this.id++,
        productName: productName,
        productQty: productQty,
        productPrice: productPrice
      })
    },
    deleteCart(id) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === id) {
          this.cart.splice(this.cart[i], 1)
        } else {
          throw new Error('Unexpected Error!')
        }
      }
    }
  }
}
</script>

<style>
</style>
