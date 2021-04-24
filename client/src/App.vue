<template>
	<div id="app" @click="closeCart">
		<navbar :showCart="showCart" @cartClicked="onCartClick" />
		<transition name="fade">
			<div v-if="showCart" class="k">
				<cart />
			</div>
		</transition>
		<router-view />
	</div>
</template>


<script>
import navbar from "@/components/navbar.cmp.vue";
import cart from "@/components/cart.cmp.vue";
export default {
	data() {
		return {
			showCart: false,
		};
	},
	methods: {
		onCartClick(val) {
			this.showCart = val;
		},
        closeCart(ev){
            // console.log(ev.target.getAttribute("class"));
            
        }
	},
	created() {
		this.$store.dispatch({ type: "loadProducts" });
	},
	components: {
		navbar,
		cart,
	},
};
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
	transition: all 200ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateX(100px);
    
}
.k {
	position: relative;
	z-index: 5;
}
#app{
        overflow:hidden;
}
</style>