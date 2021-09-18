<template>
  <footer class="footer">
    <div class="container">
      <div class="ft-flex">        
        <div id='ft-logo'>
          <router-link to="/" id='logo'><img src='../assets/ft-logo.svg' alt="Footer logo"/></router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
      msg: String
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    @include gradient-vertical($base-color, $base-color-dark, 0, 100%);
    flex-shrink: 0;
  }
</style>
