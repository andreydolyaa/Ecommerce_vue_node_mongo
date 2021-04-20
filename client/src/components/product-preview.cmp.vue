<template>
	<div class="product-preview-container">
		<div class="product-preview" @click="redirectToProduct">
			<img :src="product.imgs[0]" alt />
			<p>{{product.title}}</p>
			<p>{{product.description}}</p>
			<p>${{product.price}}</p>
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
		redirectToProduct() {
			this.$router.push(`product/details/${this.product._id}`);
		},
	},
};
</script>

<style>
</style>