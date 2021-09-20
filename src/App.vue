<template>
  <Header/>

  <main id='main-content'>
    <div class="container">
      <router-view/>
    </div>
  </main>

  <Footer />
</template>

<script>
import '@/assets/styles/_reset.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
//#region APP Styles
html,
body {
  height: 100%;
}

#app {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  min-height: 100%;
  max-width: 1920px;
  margin: 0 auto;
  color: $primary-color;
  font-size: $font-size-base;
  font-weight: 400;
  font-family: $font-family-sans-serif;
  line-height: 1.25em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

#main-content {
  position: relative;
  flex: 1 0 auto;
  padding-top: 1.875rem;
}

#footer {
  flex-shrink: 0;
}
//#endregion APP Styles

//#region Media queries
@media (min-width: 768px) {
  .container {
    width: 744px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 964px;
  }
}

@media (min-width: 1224px) {
  .container {
    width: 1200px;
  }
}

@media (min-width: 1620px) {
  .container {
    width: 1596px;
  }
}
//#endregion Media queries
</style>
