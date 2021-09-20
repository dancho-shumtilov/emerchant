<template>
    <h2>{{ title }}</h2>
    
  <div class='grid-wrap'>
    <div
        v-for="item in products"
        class='grid-item'
        :key="item.id"
    >
      <div class='item-image'>        
          <img :src='item.image' alt='' class='img-responsive' />
      </div>
      <span class='item-title'>{{ item.title }}</span>
      <span class='item-rating'>{{ item.rating.rate }} rate from {{ item.rating.count }} users</span>
      <span class='item-price'>${{ item.price }}</span>
      <div><button >See details</button></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Products',
  components: {
  },
  data() {
      return {
          title: 'Products',
          products: []
      }
  },
  async created() {
      const result = await axios.get('https://fakestoreapi.com/products');
      const product = result.data;
      this.products = product;
      console.table(product[0]); 
  }

}
</script>

<style lang="scss" scoped>
  .grid-wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
    
    .grid-item {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 2.5rem;
      padding: 0.75rem;
      border-radius: 8px;
      box-shadow: 0px 2px 5px #888;
      box-sizing: border-box;
      align-items: center;
    }
    
    .item-image {
      position: relative;
      height: 200px;
      width: 200px;
        
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

    .product-name {
      margin-bottom: 0;
    }
  }

@media (min-width: 768px) {
  .grid-wrap {
    flex-direction: row;

    .grid-item {
      width: 31%;
    }
  }
}

</style>
