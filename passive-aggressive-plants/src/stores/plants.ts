import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { PlantComponentType } from '@/types/Components'
import type { Plant, StatRange } from '@/types/Plant';

export const usePlantsStore = defineStore('plantComponents', () => {
	let plants: PlantComponentType[] = [];

	function getPlants(): PlantComponentType[] {
		plants = [
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

		return plants;
	}

	return { plants, getPlants }
})