import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { PlantComponentType } from '@/types/Components'
import type { Plant, StatRange } from '@/types/Plant';

export const usePlantsStore = defineStore('plantComponents', () => {
	let plants: PlantComponentType[] = [];
	let currentPlant: Plant = {
		name: '',
		plantType: 'default plant',
		moisture: {
			max: 0,
			min: 0,
			current: 0
		}
	};

	function setCurrentPlant(plant: Plant) {
		currentPlant = plant;
	}

	function getPlants(): PlantComponentType[] {
		plants = [
			{
				plant: {
					name: "Jeff",
					plantType: "Grapefruit",
					moisture: {
						min: 100,
						max: 400,
						current: 150
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
						min: 50,
						max: 300,
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
						min: 200,
						max: 400,
						current: 600
					} as StatRange,
					ph: undefined,
					nutrient: undefined,
				} as Plant,
				image: "Replace with imafe"
			},
		];

		return plants;
	}

	return { plants, currentPlant, getPlants, setCurrentPlant }
})