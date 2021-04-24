<template>
  <div class="rating-bar flex">
      <p>Reviews ({{product.reviews.length}})</p>
      <p v-if="!isNaN(calcAvgRating)">Avg. Rating - {{calcAvgRating}}</p>
      <p v-else>No ratings yet!</p>
  </div>
</template>

<script>
export default {
    props:{
        product:Object
    },
    data(){
        return{
            avgRating:0,
        }
    },
    computed:{
        calcAvgRating(){
            const totalRating = this.product.reviews.reduce((acc,val) => acc + parseInt(val.rate),0);
            this.avgRating = (totalRating / this.product.reviews.length).toFixed(2);
            return (totalRating / this.product.reviews.length).toFixed(2);
        },
    }
}
</script>

<style>

</style>