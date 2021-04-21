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
};
</script>

<style>
</style>