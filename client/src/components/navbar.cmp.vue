<template>
	<div>
		<div class="navbar flex">
			<div class="links-container flex">
				<router-link to="/">Home</router-link>
				<router-link to="/product">Products</router-link>
				<router-link to="/">Categories</router-link>
				<router-link to="/">Contact</router-link>
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
				<div v-if="!user">
					<router-link to="/login">Login</router-link>
				</div>
				<div v-else class="flex">
					<p>Logged as Admin</p>
					<p>|</p>
					<font-awesome-icon icon="sign-out-alt" class="cart-icon" @click="logout" />
				</div>
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
		user() {
			return this.$store.getters.getUser;
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
		logout() {
			this.$store.commit({ type: "setLogout" });
		},
	},
};
</script>

