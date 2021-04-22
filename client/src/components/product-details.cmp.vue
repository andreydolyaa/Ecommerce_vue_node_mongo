<template>
	<div>
		<div class="spacer"></div>

		<div class="product-details" v-if="product">
			<div class="img-container">
				<img :src="product.imgs[0]" alt />
			</div>

			<div class="details-container">
				<div>
					<h1>{{product.title}}</h1>
					<p>{{product.description}}</p>
				</div>
				<div>
					<ratingBar :product="product" />
				</div>
				<div class="price-container">
					<p class="discount" v-if="product.price.toString().length < 4">${{formatPrice(product.price+101)}}</p>
					<p class="discount" v-if="product.price.toString().length >= 4">${{formatPrice(product.price+501)}}</p>
					<h1 class="price">
						Price:
						<span>${{formatPrice(product.price)}}</span>
					</h1>
				</div>
				<div class="buy">
					<p>Type: {{product.type}}</p>
					<p>Color: {{product.color}}</p>
					<p>Material: {{product.material}}</p>
					<p>Category: {{product.category}}</p>
				</div>
				<div>
					<button @click="addItemToCart">Add to cart</button>
					<button>Buy now</button>
				</div>
			</div>
		</div>
		<!-- TWO COMPONENTS HERE ---- REVIEWS ---- SIMILAR ITEMS -->
		<div class="title">
			<h1>Similar Products</h1>
		</div>
		<similarItemsBar :product="product" />
		<addReview :product="product" />
		<reviews :product="product" />
	</div>
</template>

<script>
import ratingBar from "@/components/rating-bar.cmp.vue";
import similarItemsBar from "@/components/similar-items-bar.cmp";
import reviews from "@/components/reviews.cmp.vue";
import addReview from "../components/add-review.cmp.vue";
export default {
	data() {
		return {};
	},
	computed: {
		product() {
			return this.$store.getters.getProduct;
		},
	},
	methods: {
		formatPrice(value) {
			let val = (value / 1).toFixed(2).replace(".", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		addItemToCart() {
			this.$store.commit({ type: "addItemToCart", item: this.product });
		},
	},
	created() {
		const productId = this.$route.params.productId;
		this.$store.dispatch({ type: "loadProduct", productId });
	},
	components: {
		ratingBar,
		similarItemsBar,
		reviews,
		addReview,
	},
};
</script>
