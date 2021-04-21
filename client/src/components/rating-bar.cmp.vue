<template>
  <div class="rating-bar flex">
      <p>Reviews ({{product.reviews.length}})</p>
      <p>Rating 4.5</p>
      <p>Stars ******</p>
  </div>
</template>

<script>
export default {
    props:{
        product:Object
    }
}
</script>

<style>

</style>