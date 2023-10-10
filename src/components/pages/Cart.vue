<template>
  <article class="cart">
    <Intro />
    <ul class="cart-list">
      <li v-for="(product, i) in products" :key="i">
        <div class="actual-cart" :id="product.id">
          <img class="cart-image" :src="product.productImageURL" :alt="product.productName" />
          <h3 class="cart-type">{{ product.productName }}</h3>
          <span class="cart-price">{{ product.productPrice }}</span>
          <input class="cart-qty" type="number" v-model="product.productQty" />
          <button class="cart-add"
                  @click="addToCart(product.id, product.productName, product.productPrice, product.productQty, i)"
                  type="button"
            >Add to cart</button>
        </div>
      </li>
    </ul>
    <div class="user-cart">
      <ul class="user-cart-list">
        <li v-for="(products, i) in cart" :key="i">
          <div class="user-actual-cart">
            <h3>{{ products.productName }}</h3>
            <span>{{ products.productPrice }}</span>
            <span>{{ products.productQty }}</span>
            <span>{{ products.overallPrice }}</span>
            <button class="user-cart-delete" type="button" @click="deleteCart(i)">Delete</button>
          </div>
        </li>
      </ul>
      <span class="overall-price">Overall price: {{ overallPrice }}</span>
      <button class="purchase-btn" type="button">Purchase</button>
    </div>
  </article>
  <hr>
</template>

<script>
import Intro from '../sub-comps/Intro.vue'

export default {
  name: 'Cart',
  components: {
    Intro
  },
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
          productImageURL: 'https://www.svgrepo.com/show/23337/carrot.svg'
        },
        {
          id: 1,
          productName: 'Tomato',
          productQty: 0,
          productPrice: 2.99,
          productImageURL: 'https://www.svgrepo.com/download/110043/tomato.svg'
        },
        {
          id: 2,
          productName: 'Potato',
          productQty: 0,
          productPrice: 0.99,
          productImageURL: 'https://www.svgrepo.com/download/227276/potato.svg'
        },
        {
          id: 3,
          productName: 'Apple',
          productQty: 0,
          productPrice: 1.99,
          productImageURL: 'https://www.svgrepo.com/show/66299/apple.svg'
        }
      ],
      cart: [],
      overallPrice: 0
    }
  },
  methods: {
    addToCart(id, productName, productPrice, productQty, index) {
      try {
        if (index > - 1 && productQty >= 1) {
          this.cart.push({
            id,
            productName,
            productPrice,
            productQty,
            overallPrice: (productPrice * productQty).toFixed(2)
          })
        }
        else if (this.cart[index].id === id && productQty >= 1) {
          this.cart.splice(index, 1, {
            id,
            productName,
            productPrice,
            productQty,
            overallPrice: (productPrice * productQty).toFixed(2)
          })
        } else {
          throw new Error('Unexpected Error')
        }
      } catch (error) {
        console.log(`${error.name}: ${error.message}`)
      }
      console.log(this.cart)
    },
    deleteCart(index) {
      try {
        if (index > -1) {
          this.cart.splice(index, 1)
          console.log('Deleted element with index of ' + index)
        } else {
          throw new Error('There is no element with index: ' + index)
        }
      } catch (error) {
        console.log(`${error.name}: ${error.message}`)
      }
    }
  },
  computed: {
  }
}
</script>

<style >
.cart {
  width: 100%;
  background-color: var(--white);
}

.cart-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 1rem;
  width: 100%;
}

.actual-cart {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black);
  min-width: 20rem;
  min-height: 15rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--black);
}

.cart-image {
  max-width: 5rem;
  max-height: 5rem;
}

.cart-type {
  color: var(--black);
}

.cart-add {
  background-color: var(--black);
  color: var(--white);
  margin-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: var(--global-animation);
}

.cart-add:hover {
  filter: opacity(0.75);
}

.user-cart {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  width: 100%;
  height: 100%;
  padding: 2rem;
}

.user-actual-cart {
  display: flex;
  align-items: center;
  justify-content: space-around;
  column-gap: 3rem;
  width: 100%;
}

.user-cart-list {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.user-cart-list li {
  width: 100%;
}

.user-cart-update,
.user-cart-delete {
  background-color: var(--white);
  color: var(--black);
}
</style>
