<template>
	<div class="login">
		<div class="spacer"></div>

		<form v-if="!user" class="login-form" @submit="loginAdmin">
			<div>
				<p>Username:</p>
				<input type="text" placeholder="Username" required v-model="loginCred.username" />
			</div>
			<div>
				<p>Password:</p>
				<input type="password" placeholder="Password" required v-model="loginCred.password" />
			</div>
			<button>Login</button>
			<p class="note">* Currently loging as admin allows you to manage the store</p>
		</form>
        <div v-else>You already logged in</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loginCred: {
				username: "admin@shop.com",
				password: "admin@shop.com",
			},
		};
	},
    computed:{
        user(){
            return this.$store.getters.getUser;
        }
    },
    methods:{
        async loginAdmin(){
            this.$router.push('/');
            this.$store.dispatch({type:'setAdminLogin',loginCred:this.loginCred});
        }
    }
};
</script>

<style>
</style>