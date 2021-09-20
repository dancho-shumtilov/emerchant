<template>
  <header class="header">
    <div class="container">
      <div class="hd-flex">
        <h1 class='hd-logo'>
          <router-link to="/" id='logo' title='Home Page'><img src='../assets/hd-logo.svg' alt="Header logo"/></router-link>
        </h1>
        <NavBar />
      </div>
    </div>    
  </header>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'Header',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100vw;
  padding: 1.25rem 0;
  background-color: $base-color;
  z-index: 1;
}

.hd-flex{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.hd-logo {
  margin: 0;
}

.hd-nav a {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  color: #181818;
  font-weight: 900;
  text-decoration: none;
  -webkit-transition: all 0.3s ease-in-out ;
  -moz-transition: all 0.3s ease-in-out ;
  -o-transition: all 0.3s ease-in-out ;
  transition: all 0.3s ease-in-out ;
}

.hd-nav a:first-child {
  position: relative;
  padding-left: 1.5rem;
}

.hd-nav a:first-child::before {
  position: absolute;
  content: '\e902';
  top: 50%; left: 0;
  color: inherit;
  font: 18px/1 'icomoon';
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.hd-nav a:focus,
.hd-nav a:hover,
.hd-nav a:active {
  color: #1695a3;
  text-decoration: none;
}

.hd-nav a.router-link-exact-active {
  color: #1695a3;
}

@media (min-width: 768px) {
  .hd-flex {
    flex-direction: row;
  }
}
</style>
