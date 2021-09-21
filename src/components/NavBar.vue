<template>
  <nav class="navbar">
    <div class="menu-item"><router-link to="/">Home</router-link></div>    
    <Dropdown title="Shop" :items="dropdown"/>
    <Dropdown title="Random content" :items="dropdownTwo"/>
    <div class="menu-item"><router-link to="/about-us" title='About us page'>About us</router-link></div>
    <div class="menu-item"><router-link to="/users" title='Users Page'>Users</router-link></div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown.vue'
import DataForm from '../views/DataForm.vue'
import ProductsPage from '../views/ProductsPage.vue'
import Info from '@/views/dropdown/Info.vue'
import Videos from '@/views/dropdown/Videos.vue'

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
                    title: 'Update Data',
                    link: '/data-form',
                    component: DataForm
                }
            ],
            dropdownTwo: [
                {
                    title: 'Info',
                    link: '/info',
                    component: Info
                },                
                {
                    title: 'Videos',
                    link: '/videos',
                    component: Videos
                }
            ],
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
                font-size: 1rem;
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