<template>
	<div class="reviews" v-if="product">
		<div class="reviews-container" v-for="review in product.reviews" :key="review._id">
			<div class="user-container flex">
				<div class="user flex">
					<div class="user-inner flex">
						<img src="../assets/imgs/profile.png" />
						<p>{{review.username}}</p>
					</div>
					<div class="date">
						<p>{{review.date}}</p>
					</div>
				</div>
				<div class="message">
					<p>{{review.message}}</p>
					<div class="likes">
						<p class="rate">Rated: {{review.rate}} / 5</p>
						<div class="likes-two">
							<ThumbUp :size="14" class="r" @click="like(review)" />
							<p>{{review.likes}}</p>
							<ThumbDown :size="14" class="r" @click="dislike(review)" />
							<p>{{review.dislikes}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ThumbUp from "vue-material-design-icons/ThumbUp.vue";
import ThumbDown from "vue-material-design-icons/ThumbDown.vue";
export default {
	props: {
		product: Object,
	},
	methods: {
		dislike(review) {
			const newProduct = JSON.parse(JSON.stringify(this.product));
			const reviewIdx = newProduct.reviews.findIndex(
				(currReview) => currReview.id === review.id
			);
			newProduct.reviews[reviewIdx].dislikes += 1;
			this.$store.dispatch({ type: "updateProduct", newProduct });
		},
		like(review) {
            const newProduct = JSON.parse(JSON.stringify(this.product));
			const reviewIdx = newProduct.reviews.findIndex(
				(currReview) => currReview.id === review.id
			);
			newProduct.reviews[reviewIdx].likes += 1;
			this.$store.dispatch({ type: "updateProduct", newProduct });
        },
	},
	components: {
		ThumbUp,
		ThumbDown,
	},
};
</script>

<style>
</style>