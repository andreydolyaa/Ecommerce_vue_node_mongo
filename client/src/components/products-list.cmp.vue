<template>
	<div>
		<div class="spacer"></div>
		<div class="filter-bar-container">
			<filterBar />
		</div>
		<div class="products-list" v-if="!isLoading">
			<div v-for="product in products" :key="product.id">
				<productPreview :product="product" />
			</div>
		</div>
		<div v-if="isLoading"><h1>Loading...</h1></div>
	</div>
</template>

<script>
import productPreview from "@/components/product-preview.cmp.vue";
import filterBar from "@/components/filter-bar.cmp.vue";
export default {
	data() {
		return{

        }
	},
    watch:{
    },
	computed: {
		products() {
			return this.$store.getters.getProducts;
		},
        isLoading(){
            return this.$store.getters.getLoadingStatus;
        }
	},
	components: {
		productPreview,
		filterBar,
	},
};
</script>

<style>
</style>