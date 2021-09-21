<template>
  <div class="about">
    <h2>About us</h2>
    <p>In hendrerit semper tellus eget dictum. Cras imperdiet, velit nec tincidunt dictum, dolor nisi ultricies tellus, vel tincidunt justo nisi id mauris. Quisque volutpat, augue in ullamcorper accumsan, risus diam ullamcorper dolor, a aliquam erat velit sodales libero. Mauris efficitur nisl ut metus blandit dapibus. Aenean finibus porttitor nulla, vel porta ipsum commodo a. Pellentesque tristique libero in enim maximus, commodo lobortis arcu condimentum. Cras neque neque, iaculis ut aliquet eget, porta et leo. Donec pellentesque felis eu elit ultrices, ac porta nibh rhoncus. Phasellus venenatis sagittis ex, vitae consectetur leo facilisis quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam a nisl sed arcu feugiat tincidunt. Etiam eget mattis est. Ut sed lobortis nibh. Duis convallis augue nibh.</p>
    <transition name="fade" apear>
      <div class="sub-menu" v-if="isOpen">
        <div class="menu-item">
          <router-link to="/services/web">Web</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/services/design">Design</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/services/videos">Videos</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AboutUsPage',
  data () {
    return {
      isOpen: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  nav .menu-item .sub-menu {
    position: absolute;
    background-color: #222;
    top: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0px 0px 16px 16px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .sub-menu {
    cursor: pointer;
  }
</style>