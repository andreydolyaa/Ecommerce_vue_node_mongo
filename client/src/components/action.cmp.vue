<template>
	<div class="action flex">
		<p>{{text}}</p>
	</div>
</template>

<script>
export default {
	props: {
		text: String,
	},
};
</script>

<style>
.action {
	border: 1px solid black;
	width: 200px;
	height: 40px;
	background-color: black;
	color: white;
	position: fixed;
	top: 80px;
	right: 20px;
	border-radius: 3px;
	justify-content: center;
	z-index: 5;
}
</style>