<template>
    <div class='user-img'>
      <img src="https://via.placeholder.com/150" alt="Placeholder image" width='150' height='150'>
    </div>
    <span class='user-name'>{{ user.name.firstname }} {{ user.name.lastname }}</span>
    <button id='more-details' @click=" () => toggle()">More info</button>

    <transition appear="" mode="out-in">
      <div class="popup-wrap" v-if="popVisible" >
        <div class="popup-inner">          
          <div class='user-img'>
            <img src="https://via.placeholder.com/150" alt="Placeholder image" width='150' height='150'>
          </div>
          <span class='user-name'>{{ user.name.firstname }} {{ user.name.lastname }}</span>
          <span class='user-email'>{{ user.email }}</span>
          <span class='user-phone'>{{ user.phone }}</span>
          <span class='user-address'>{{ user.address.number }}, {{ user.address.street }}, {{ user.address.city }}</span>
          <span class='user-phone'>{{ user.street }}</span>
          <button @click=" () => toggle() ">Close Popup</button>
        </div>
      </div>
    </transition>
</template>

<script>
export default { 
    name: 'SingleUser',
    props: ['user'],
    data() {
      return {
          popVisible: false
      }
    },
    methods:{
        toggle: function(){
            this.popVisible = !this.popVisible
        }
    },
}
</script>

<style lang="scss" scoped>
.user-img {
  margin-bottom: 1.25rem;
}

.user-name {
  display: block;
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
}

.user-email {
  display: block;
  margin-bottom: 1.25rem;
  color: #777;
  font-size: 1.25rem;
  font-weight: bold;
}

.user-phone {
  display: block;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.user-address {
  text-transform: capitalize;
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

.popup-wrap {
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(38,70,83,0.9);

    .popup-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 280px;
        padding: 1.25rem;
        background-color: #fff;
        color: $primary-color;
    }
  }
</style>