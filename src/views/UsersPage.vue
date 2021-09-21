<template>
  <div class='grid-wrap' >
    <UsersGrid :users='users' />
  </div>
</template>

<script>
import axios from 'axios';
import UsersGrid from '../components/UsersGrid.vue'

export default {
  name: 'UsersPage',
  components: {UsersGrid},
  data() {
      return {
          users: {}
      }
  },
  async created() {
      const result = await axios.get('https://fakestoreapi.com/users/');
      const user = result.data;
      this.users = user;
  }
}
</script>

<style lang="scss" scoped>
  .grid-wrap {
    display: flex; 
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 16px;    
  }

  @media (min-width: 768px) {
  .grid-wrap {
    flex-direction: row;
  }
}
</style>
