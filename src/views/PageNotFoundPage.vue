<template>
    <h2>404</h2>
    <h3>Oups!</h3>
    <h3>Page Not Found!!!</h3>
    <div><router-link to="/" title="Home Page" class='link-back'>Back to Home page</router-link></div>
</template>

<script>
export default {
  name: 'PageNotFoundPage',
}
</script>

<style lang='scss' scoped>
    h2 {
        margin-top: 2.5rem;
        color: $base-color;
        font-size: 4.5rem;
    }
    
    h3 {
        color: $base-color;
    }

    .link-back {
        display: inline-block;
        padding: 0.25rem 1.25rem;
        color: $primary-color;
        font-size: 1.25rem;
        text-decoration: underline;
        transition: all 0.3s ease-in-out;

        &:hover {
            text-decoration: underline;
            color: $base-color;
        }
    }
</style>
