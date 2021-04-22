<template>
	<div>
		<div class="navbar flex">
			<div class="links-container flex">
				<p>Products</p>
				<p>Categories</p>
				<p>About</p>
				<p>Contact</p>
			</div>
			<div class="logo flex" @click="toHomePage">
				<h2>
					Furns
					<span>.</span>
				</h2>
			</div>
			<div class="login-container flex">
				<div @click="toggleCart">
					<div class="cart-container-div flex">
						<font-awesome-icon icon="shopping-cart" class="cart-icon" />
						<div class="cart-length-icon">{{cartLength}}</div>
					</div>
				</div>
				<p>|</p>
				<p>Login</p>
				<p>|</p>
				<p>Signup</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			toggleCartMenu: false,
		};
	},
	computed: {
		cartLength() {
			return this.$store.getters.getCartLength;
		},
	},
	methods: {
		toHomePage() {
			this.$router.push("/");
		},
		toggleCart() {
			this.$emit(
				"cartClicked",
				(this.toggleCartMenu = !this.toggleCartMenu)
			);
		},
	},
};
</script>

