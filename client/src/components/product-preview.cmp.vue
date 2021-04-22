<template>
	<div class="product-preview-container">
		<div class="product-preview" @click="redirectToProduct">
			<img :src="product.imgs[0]" alt />
			<p>{{product.title}}</p>
			<p>{{product.description}}</p>
			<p>${{formatPrice(product.price)}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: Object,
	},
	data() {
		return {};
	},
	methods: {
        formatPrice(value) {
			let val = (value / 1).toFixed(2).replace(".", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		redirectToProduct() {
			this.$router.push(`product/details/${this.product._id}`);
			this.setSimilarProducts();
		},
		setSimilarProducts() {
			this.$store.dispatch({
				type: "loadSimilarItems",
				productType: this.product.type,
			});
		},
	},
	created() {},
};
</script>

<style>
</style>