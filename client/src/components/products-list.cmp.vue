<template>
	<div>
        <div class="spacer"></div>
        <div class="filter-bar-container">
		<filterBar />
        </div>
		<div class="products-list">
			<div v-for="product in products" :key="product.id">
				<productPreview :product="product" />
			</div>
		</div>
	</div>
</template>

<script>
import productPreview from "@/components/product-preview.cmp.vue";
import filterBar from "@/components/filter-bar.cmp.vue";
export default {
	data() {
		return {};
	},
	computed: {
		products() {
			return this.$store.getters.getProducts;
		},
	},
	components: {
		productPreview,
		filterBar,
	},
};
</script>

<style>
</style>