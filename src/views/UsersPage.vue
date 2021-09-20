<template>
{{users[0]}}
    
  <div class='grid-wrap'>
    <div
        v-for="user in users"
        class='grid-item'
        :key="user.id"
    >    
      <div class='user-img'>
        <img src="https://via.placeholder.com/150" alt="Placeholder image" width='150' height='150'>
      </div>
      <span class='user-name'>{{ user.name.firstname }} {{ user.name.lastname }}</span>
      <span class='user-email'>{{ user.email }}</span>
      <span class='user-phone'>{{ user.phone }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UsersPage',
  components: {
  },
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
    
    .grid-item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 2rem;
      padding: 2.5rem 0.75rem;
      border-radius: 8px;
      box-shadow: 0px 2px 5px #888;
      box-sizing: border-box;
      align-items: center;
    }
    
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

  }

@media (min-width: 768px) {
  .grid-wrap {
    flex-direction: row;

    .grid-item {
      width: 31%;
    }
  }
}

</style>
