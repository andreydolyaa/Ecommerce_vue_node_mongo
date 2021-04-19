<template>
	<div id="app">
		<navbar />
		<router-view />
	</div>
</template>


<script>

import navbar from "@/components/navbar.cmp.vue";

export default {
	created() {
		this.$store.dispatch({ type: "loadProducts" });
	},
    components:{
        navbar
    }
};
</script>