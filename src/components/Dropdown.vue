<template>
  <div class="menu-item menu-item-dynamic" @click="isOpen = !isOpen">
      <a href="javascript:void(0)" >{{ title }}</a>       
      <transition name='fade' appear>
        <div class="sub-menu" v-if='isOpen' >
            <div v-for="(item, i) in items" :key='i' class="menu-item">
                <router-link :to="item.link" :title="item.title">{{ item.title }}</router-link>
            </div>
        </div>
      </transition>
  </div>
</template>

<script>
export default {
    name: 'Dropdown',
    props: [
        'title',
        'items'
    ],
    data() {
        return {
            isOpen: false,
        }
    }
}
</script>

<style lang='scss' scoped>
.sub-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    background-color: $base-color-dark-opaque;
}

.menu-item-dynamic > a {
    position: relative;
}

.menu-item-dynamic > a::before {
    position: absolute;
    content: "";
    top: 50%;
    right: 0.25rem;
    display: block;
    width: 0;
    height: 0;
    margin-top: -2px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fff;
    z-index: 2;
    color: #fff;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}

.menu-item-dynamic > a:hover::before {
    border-top: 5px solid $base-color-1;
}

.fade-enter-active,
.fade-leave-active {
    transition: all  0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>