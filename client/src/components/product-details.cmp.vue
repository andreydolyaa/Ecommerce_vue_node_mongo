<template>
	<div>
		<div class="spacer"></div>
		<div class="product-details" v-if="product">
			<h1>product details</h1>
			{{product.title}}
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		product() {
			return this.$store.getters.getProduct;
		},
	},
	methods: {},
	created() {
		const productId = this.$route.params.productId;
		this.$store.dispatch({ type: "loadProduct", productId });
	},
};
</script>
