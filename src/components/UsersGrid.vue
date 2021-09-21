<template>
    <div
      class='grid-item'
      v-for="user in users"
      :key="user.id"
      :user="user"      
    >
        <SingleUser :user='user' />        
    </div>
</template>

<script>
import SingleUser from './SingleUser.vue'

export default {
    name: 'UsersGrid',
    props: ['users'],
    components: {SingleUser}
}

</script>

<style lang="scss" scoped>
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

@media (min-width: 768px) {
    .grid-item {
        width: 31%;
    }
}
</style>