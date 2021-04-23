<template>
	<div class="filter-bar">
        <div class="filter-name-container flex">
                <label for="product" class="name-search flex">Search Product:
                    <input type="text" placeholder="Type somthing..." v-model="filterName" @input="filterByName">
                </label>
                <label for="price" class="price-container flex">Max Price:
                    <div class="flex slider">
                        <input type="range" :min="minPrice" max="160000" default="0" v-model="currPrice" @input="filterByPrice">
                    </div>
                    <div>
                        <p class="price-range">${{formatPrice(currPrice)}}</p>
                    </div>
                </label>
        </div>
		<div class="checkbox-container flex">
			<div class="filter-type flex">
                <p class="filter-title">Filter By Product Type</p>
				<label for="sofas" class="checkbox">Sofas
				<input type="checkbox" id="sofas" value="sofas"/></label>
				<label for="tables">Tables
				<input type="checkbox" id="tables" value="tables" /></label>
				<label for="chairs">Chairs
				<input type="checkbox" id="chairs" value="chairs" /></label>
				<label for="lamps">Lamps
				<input type="checkbox" id="lamps" value="lamps" /></label>
				<label for="dressers">Dressers
				<input type="checkbox" id="dressers" value="dressers" /></label>
				<label for="carpets">Carpets
				<input type="checkbox" id="carpets" value="carpets" /></label>
				<label for="beds">Beds
				<input type="checkbox" id="beds" value="beds" /></label>
				<label for="decorations">Decorations
				<input type="checkbox" id="decorations" value="decorations" /></label>
			</div>
			<div class="filter-material flex">
                <p class="filter-title">Filter By Material</p>
				<label for="wood">Wood
				<input type="checkbox" id="wood" value="wood" /></label>
				<label for="metal">Metal
				<input type="checkbox" id="metal" value="metal" /></label>
				<label for="fabric">Fabric
				<input type="checkbox" id="fabric" value="fabric" /></label>
				<label for="leather">Leather
				<input type="checkbox" id="leather" value="leather" /></label>
				<label for="diamond">Diamonds
				<input type="checkbox" id="diamond" value="diamond" /></label>
				<label for="plastic">Plastic
				<input type="checkbox" id="plastic" value="plastic" /></label>
			</div>
			<div class="filter-color flex">
                <p class="filter-title">Filter By Color</p>
				<div class="gray-color"></div>
				<label for="gray">Gray
				<input type="checkbox" id="gray" value="gray" /></label>
				<div class="yellow-color"></div>
				<label for="yellow">Yellow
				<input type="checkbox" id="yellow" value="yellow" /></label>
				<div class="brown-color"></div>
				<label for="brown">Brown
				<input type="checkbox" id="brown" value="brown" /></label>
				<div class="white-color"></div>
				<label for="white">White
				<input type="checkbox" id="white" value="white" /></label>
				<div class="orange-color"></div>
				<label for="orange">Orange
				<input type="checkbox" id="orange" value="orange" /></label>
				<div class="black-color"></div>
				<label for="black">Black
				<input type="checkbox" id="black" value="black" /></label>
				<div class="green-color"></div>
				<label for="green">Green
				<input type="checkbox" id="green" value="green" /></label>
				<div class="red-color"></div>
				<label for="red">Red
				<input type="checkbox" id="red" value="red" /></label>
				<div class="mixed-color"></div>
				<label for="mixed">Mixed
				<input type="checkbox" id="mixed" value="mixed" /></label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return{
            minPrice:0,
            currPrice:0,
            filterName:'',
            filterColor:'',
            filterType:'',
            filterMaterial:''

        }
    },
    methods:{
        filterByName(){
            this.$store.commit({type:'setFilterBy',filter:this.filterName, pos:'name'});
        },
        filterByPrice(){
            this.$store.commit({type:'setFilterBy',filter:this.currPrice,pos:'price'});
        },
        formatPrice(value) {
			let val = (value / 1).toFixed(2).replace(".", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
    }
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