<template>
  <article class="cart">
    <ul>
      <li v-for="(product, i) in products">
        <div :id="product.id">
          <img :src="product.productImageURL" :alt="product.productName" />
          <h3>{{ product.productName }}</h3>
          <span>{{ product.productPrice }}</span>
          <input type="text" v-model="product.productPrice" :value="product.productPrice" />
          <button type="button">Add to cart</button>
        </div>
      </li>
    </ul>
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
      products: [
        {
          id: 0,
          productName: 'Carrot',
          productQty: 0,
          productPrice: 1.99,
          productImageURL: 'https://imageURL'
        },
        {
          id: 1,
          productName: 'Tomato',
          productQty: 0,
          productPrice: 2.99,
          productImageURL: 'https://imageURL'
        },
        {
          id: 2,
          productName: 'Potato',
          productQty: 0,
          productPrice: 0.99,
          productImageURL: 'https://imageURL'
        }
      ],
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
