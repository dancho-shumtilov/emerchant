<template>
   <div id="page-wrap">
        <div class="item-details" >
            <div class='item-image' >
                <img :src='productDetails.image' alt='' class='img-responsive' />
            </div>
            <span class='item-title'>{{ productDetails.title }}</span>
            <span class='item-price'>${{ Number.parseFloat(productDetails.price).toFixed(2) }}</span>
            
            <p class='item-description'>{{ productDetails.description }}</p>
        </div>
        <div class="link-back">
            <router-link :to="'/products'" title="Back to Products page">Back to Products page</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProductDetailPage',
    data() {
        return {
            productDetails: {}
        }
    },
    async created() {
      const result = await axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`);
      const product = result.data;
      this.productDetails = product;
    }
}
</script>

<style lang="scss" scoped>
    .item-details {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 2rem;
      padding: 2.5rem 0.75rem;
      border-radius: 8px;
      box-sizing: border-box;
      align-items: center;
    }

    .item-image {
      margin-bottom: 2.5rem;
        
      .img-responsive {
        display: block;
        max-width: 100%;
        width: 200px;
        height: auto;
        margin: 0 auto;
      }
    }

    .item-title {
      display: block;
      margin-bottom: 1.25rem;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .item-price {
      display: block;
      margin-bottom: 0.75rem;
      font-size: 1.25rem;
      font-weight: bold;
    }
    
    .link-back {
        margin-bottom: 1.25rem;

        a {
            color: $base-color;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
    
    @media (min-width: 768px) {
        .item-image .img-responsive {            
            width: 300px;
        }
    }
</style>