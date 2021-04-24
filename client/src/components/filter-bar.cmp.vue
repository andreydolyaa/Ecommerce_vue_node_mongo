<template>
	<div class="filter-bar flex">

		<div class="inner-container flex">
			<label for="product" class="de-label">
				Search Product:
				<input type="text" placeholder="Type somthing..." v-model="filter.filterName" @input="useFilter" class="de-input" />
			</label>
		</div>

		<div class="inner-container flex">
			<p class="de-label">Filter By Product Type:</p>
			<select @change="useFilter" v-model="filter.filterType" class="de-input">
				<option value="all">All</option>
				<option value="sofa">Sofas</option>
				<option value="table">Tables</option>
				<option value="chair">Chairs</option>
				<option value="lamp">Lamps</option>
				<option value="dresser">Dressers</option>
				<option value="carpet">Carpets</option>
				<option value="bed">Beds</option>
				<option value="decoration">Decorations</option>
			</select>
		</div>

		<div class="inner-container flex">
			<label for="price" class="de-label">
				Max Price:
				<div class="flex slider">
					<input type="range" :min="minPrice" max="20000" default="20000" v-model="filter.currPrice" @input="useFilter" class="range-input"/>
				</div>
				<div>
					<p class="de-label">${{formatPrice(filter.currPrice)}}</p>
				</div>
			</label>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			minPrice: 0,
			filter: {
				currPrice: 20000,
				filterName: "",
				filterType: "all",
			},
		};
	},
	methods: {
		useFilter() {
			this.$store.commit({ type: "setFilterBy", filter: this.filter });
		},
		formatPrice(value) {
			let val = (value / 1).toFixed(2).replace(".", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
	},
};
</script>

<style>
</style>

<div class="filter-name flex">
			<p>Search</p>
			<input type="text" placeholder="Search for a product..." />
		</div>
		<div class="filter-price flex">
			<p>Max Price:</p>
			<input type="range" />
		</div>