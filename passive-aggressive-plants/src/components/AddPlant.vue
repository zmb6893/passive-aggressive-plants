<script setup lang="ts">
import { usePlantsStore } from '@/stores/plants';
import type { Plant, StatRange } from '@/types/Plant';
import { ref } from 'vue';

const store = usePlantsStore();

let plant = ref({
	name: "",
	plantType: "",
	moisture: {
		current: 100,
		min: 0,
		max: 0
	} as StatRange,
})
function addPlant() {
	store.addPlant(plant.value);
}

function formOff() {
	store.toggleAddPlant();
}
</script>

<template>
	<div class="pop-up">
		<h1>
			* Name
		</h1>
		<input 
			required
			v-model="plant.name"
			type="text" 
			placeholder="Enter your plant's name here">

		<h1>
			Plant Species
		</h1>
		<input 
			v-model="plant.plantType"
			type="text" 
			placeholder="Enter your plant's species here">

		<h1>
			Moisture range
		</h1>
		<h3>* Minimum Moisture</h3>
		<input 
			v-model="plant.moisture.min"
			type="text" 
			placeholder="Enter minimum moisture">

		<h3>* Maximum Moisture</h3>
		<input 
			v-model="plant.moisture.max"
			type="text" 
			placeholder="Enter maximum moisture">

		<button @click="addPlant()">
			Add Plant
		</button>

		<button @click="formOff()">
			Exit
		</button>
	</div>
	
</template>

<style>
	.card {
		background-color: white;
		box-shadow: 10ch;
		position: absolute;
	}
</style>