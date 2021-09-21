<template>
  <div class="container">
    <p><strong>Fill the form below to add the product to the products database</strong></p>
    <form class="data-form">
      <div>
        <label class="form-label" for="title-field">Title</label>
        <input class="input" type="text" id="title-field" placeholder="Enter title">
      </div>
      <hr/>
      <div>
        <label class="form-label" for="description-field">Description</label>
        <input class="input" type="text" id="description-field" placeholder="Enter Description">        
      </div>
      <hr/>
      <div>
        <label class="form-label" for="price-field">Price</label>
        <input class="input" type="number" id="price-field" placeholder="Enter Price">
      </div>
      <hr/>
      <div>
        <label class="form-label" for="category-field">Category</label>
        <select class="select" name="" id="category-field">
          <option selected disabled value="">Choose Category</option>
          <option value="1">electronics</option>
          <option value="2">jewelery</option>
          <option value="3">men's clothing</option>
          <option value="4">women's clothing</option>
        </select>
        <div><input type="submit" value="Submit"></div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DataForm',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .data-form {
    display: block;
    max-width: 70%;
    margin-bottom: 2.5rem;
    
    .form-label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0.75rem;
      color: $primary-color;
      font-weight: bold;
      font-size: $font-size-base;
    }

    .input,
    .select {
      padding: 0.5rem 0.25rem 0.5rem 1.25rem;
      width: 100%;
      margin-bottom: 0.75rem;
    }

    hr {
      height: 1px;
      margin: 1.25rem 0 2rem;
      background-color: #ddd;
      border: none;
    }
  }
</style>
