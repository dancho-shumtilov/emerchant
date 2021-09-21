<template>
  <div class="container">    
    <h2>{{ title }}</h2>
     
    <div class="search-bar">
      <label for="search-product" class="form-label">Search product</label>
      <input v-model="search" type="text" placeholder="Search product" class="form-control" id="search-product" aria-describedby="searchHelp"  >
      <div id="searchHelp" class="form-text"><small>Products in the list: {{filteredProducts.length}}</small></div>
    </div>
  </div>
    
  <div class='grid-wrap'>
    <div
        v-for="item in filteredProducts"
        class='grid-item'
        :key="item.id"
    >
      <div class='item-image'>        
          <img :src='item.image' alt='' class='img-responsive' />
      </div>
      <span class='item-title'>{{ item.title }}</span>
      <span class='item-price'>${{ Number.parseFloat(item.price).toFixed(2) }}</span>
      <router-link :to="'/products/' + item.id" class='item-details'>See details</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductsPage',
  data() {
      return {
          title: 'Products we offer',
          products: [],
          search: "",
      }
  },
  async created() {
      const result = await axios.get('https://fakestoreapi.com/products/');    
      const product = result.data;
      this.products = product;
      console.log(product);
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter( item => {
        return (item.title.toLowerCase()).match(String(this.search).toLowerCase())
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  //#region Search bar
  .search-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 70vw;
    margin-bottom: 1.25rem;

    .form-label {
      display: block;
      margin-bottom: 0.75rem;
      color: $primary-color;
      font-size: $font-size-large;
      font-weight: bold;
    }

    .form-control {
      min-width: 70%;
      padding: 0.75rem 0.5rem 0.75rem 1rem;
    }

    .form-text {
      display: block;
      color: $secondary-color;
      font-size: $font-size-base;
    }
  }
  //#endregion Search bar

  //#region Products grid
  .grid-wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 16px;
    
    .grid-item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 2rem;
      padding: 2.5rem 0.75rem;
      border-radius: 8px;
      box-shadow: 0px 2px 5px #888;
      box-sizing: border-box;
      align-items: center;
    }
    
    .item-image {
      position: relative;
      height: 200px;
      width: 200px;
      margin-bottom: 1.25rem;
        
      .img-responsive {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
      }
    }

    .item-title {
      display: block;
      margin-bottom: 1.25rem;
      font-size: 1.125rem;
      font-weight: bold;
    }

    .item-price {
      display: block;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .item-details {
      display: block;
      padding: 0.75rem 1.25rem;
      border-radius: 0.5rem;
      background-color: $base-color;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 1;
      text-transform: capitalize;
      transition: all 0.3s ease-in-out;
    }

  .item-details:hover {
      background-color: $base-color-dark;
      color: #fff;
      text-decoration: none;
    }
  }
//#endregion Products grid

@media (min-width: 768px) {
  .grid-wrap {
    flex-direction: row;

    .grid-item {
      width: 31%;
    }
  }
}
</style>
