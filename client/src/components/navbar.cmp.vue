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
				<p>Login</p>
				<p>|</p>
				<p>Signup</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		toHomePage() {
			this.$router.push("/");
		},
	},
};
</script>

