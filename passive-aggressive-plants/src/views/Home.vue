<script setup lang="ts">
import HealthBar from '@/components/HealthBar.vue';
import NavBarVue from '@/components/NavBar.vue';
import SelectedPlantVue from '@/components/SelectedPlant.vue';
import type { PlantComponentType } from '@/types/Components';
import type { Plant, StatRange } from '@/types/Plant';

let plantComponents: PlantComponentType[] = [
	{
		plant: {
			name: "Jeff",
			plantType: "Grapefruit",
			moisture: {
				min: 4,
				max: 6,
				current: 1
			} as StatRange,
			ph: undefined,
			nutrient: undefined,
		} as Plant,
		image: "Replace with imafe"
	},
	{
		plant: {
			name: "Greg",
			plantType: "Succulent",
			moisture: {
				min: 5,
				max: 20,
				current: 84
			} as StatRange,
			ph: undefined,
			nutrient: undefined,
		} as Plant,
		image: "Replace with imafe"
	},
	{
		plant: {
			name: "Ariel",
			plantType: "Basil",
			moisture: {
				min: 2,
				max: 4,
				current: 1
			} as StatRange,
			ph: undefined,
			nutrient: undefined,
		} as Plant,
		image: "Replace with imafe"
	},
];
let plantIndex: number = 0;
let currentPlant: Plant = plantComponents[plantIndex].plant;

</script>

<template>
	<!-- Nav bar-->
	<NavBarVue 
		:plant-name="currentPlant.name" 
		:plant-components="plantComponents">
	</NavBarVue>
	
	<!-- Plant Selection -->
	<SelectedPlantVue :plants="plantComponents"></SelectedPlantVue>

	<!-- Health Bar -->
	<HealthBar :health-stats="currentPlant.moisture"></HealthBar>
</template>

<style>

</style>