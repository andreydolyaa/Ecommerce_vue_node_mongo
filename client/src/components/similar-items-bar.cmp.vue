<template>
	<div class="product-container">
		<div class="similar-items-bar flex">
			<div v-for="product in similarProducts" :key="product._id">
				<div class="ff" @click="switchToProduct(product._id)">
					<p class="prod-name">{{product.title}}</p>
					<img :src="product.imgs[0]" alt />
					<p class="discountw" v-if="product.price.toString().length < 4">${{formatPrice(product.price+101)}}</p>
					<p class="discountw" v-if="product.price.toString().length >= 4">${{formatPrice(product.price+501)}}</p>
					<p class="new-price">${{formatPrice(product.price)}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: Object,
	},
	data() {
		return {
			similarProducts: null,
		};
	},
	computed: {},
	methods: {
		formatPrice(value) {
			let val = (value / 1).toFixed(2).replace(".", ",");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		},
		switchToProduct(productId) {
			this.$store.dispatch({ type: "loadProduct", productId });
			this.$router.push(`/product/details/${productId}`);
		},
	},
	created() {
		var data = localStorage.getItem("similarItems");
		this.similarProducts = JSON.parse(data);
	},
};
</script>

v-on:wheel.up="scrollRight"
