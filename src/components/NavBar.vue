<template>
  <nav class="navbar">
    <div class="menu-item"><a href="/" title='Home page'>Home</a></div>
    <Dropdown title="Products" />
    <div class="menu-item"><a href="/about-us" title='About us page'>About us</a></div>
    <div class="menu-item"><a href="/users" title='Users Page'>Users</a></div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown.vue'
import CartPage from '../views/CartPage.vue'
import ProductsPage from '../views/ProductsPage.vue'

export default { 
    name: 'NavBar',
    components: {
        Dropdown
    },
    data() {
        return {
            dropdown: [
                {
                    title: 'Products',
                    link: '/products',
                    component: ProductsPage
                },                
                {
                    title: 'Cart',
                    link: '/cart',
                    component: CartPage
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .navbar {
        display: flex;
        align-items: center;
        justify-content: center;

        .menu-item {
            position: relative;
            display: flex;
            color: $primary-color-light;
            transition: all 0.3s ease-in-out;

            a {
                display: inline-block;
                padding: 0.75rem 1.125rem;
                color: inherit;
                font-size: 1.125rem;
                font-weight: bold;
                font-family: $font-family-sans-serif;
                text-decoration: none;
                transition: all 0.3s ease-in-out;
            }

            a:hover,
            a.active {
                color: $base-color-1;
                text-decoration: none;

            }
        }
    }
</style>