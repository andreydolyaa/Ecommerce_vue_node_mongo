<template>
	<div class="add-review">
		<h3>Add a review to this product...</h3>
		<form class="add" @submit="addReviewMessage">
			<input type="text" placeholder="Your Name..." v-model="review.username" />
			<textarea placeholder="Add a comment..." v-model="review.message"></textarea>
			<select v-model="review.rate">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<button>Publish</button>
		</form>
	</div>
</template>

<script>
import { utils } from "../services/utilService.js";
export default {
	props: {
		product: Object,
	},
	data() {
		return {
			review: {
				_id: "",
				img:
					"https://img.favpng.com/15/8/8/user-profile-2018-in-sight-user-conference-expo-business-default-png-favpng-5EdhQJprgN1HKZdx50LCN4zXg.jpg",
				username: "",
				message: "",
				rate: 0,
				date: "",
                likes:0,
                dislikes:0
			},
		};
	},
	computed: {},
	methods: {
		addReviewMessage(ev) {
			const date = new Date(Date.now());
			const formettedData = date.toDateString();
			this.review._id = utils.createNewId();
			this.review.date = formettedData;
			var newProduct = JSON.parse(JSON.stringify(this.product));
			newProduct.reviews.unshift(this.review);
			console.log(newProduct);
			this.$store.dispatch({
				type: "updateProduct",
				newProduct,
			});
			this.review = { username: "", message: "", rate: 0, date: "" };
		},
	},
};
</script>

<style>
</style>