<template>
	<div class="cart">
		<div class="cart-container" v-for="item in cart" :key="item._id">
			<div class="cart-inner flex">
				<img :src="item.imgs[0]" alt />
				<div class="details">
					<p>{{item.title}}</p>
					<p>{{item.description}}</p>
					<p>${{formatPrice(item.price)}} Per item</p>
				</div>
				<div class="quantity flex">
					<p>X {{item.quantity}}</p>
					<font-awesome-icon icon="trash-alt" class="cart-icon" size="xs" @click="removeItem(item)" />
				</div>
			</div>
		</div>
		<div class="total-price">
			<p>Total - ${{formatPrice(totalPrice)}}</p>
			<button>Checkout</button>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		cart() {
			return this.$store.getters.getCart;
		},
		totalPrice() {
			return this.$store.getters.getTotalCartPrice;
		},
	},
	methods: {
		formatPrice(value) {
			let val = (value / 1).toFixed(2).replace(".", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		removeItem(item) {
			this.$store.commit({ type: "removeItemFromCart", item });
		},
	},
};
</script>


