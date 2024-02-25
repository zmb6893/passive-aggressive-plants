<script setup lang="ts">
import type { PlantComponentType } from '@/types/Components';
import type { Plant } from '@/types/Plant';


defineProps<{
	plantComponents: PlantComponentType[];
}>();

const thirstyIcon = "BECK PUT IN THE ICON";
const overWateredIcon = "... please?";

const determineIcon = (plant: Plant) => {
	const iconSrc: string = plant.moisture.current < plant.moisture.min ? thirstyIcon
		: plant.moisture.current > plant.moisture.max ? overWateredIcon : "";
	return iconSrc;
}

const sendToPlantForm = () => {
	// Add logic for adding in a new plant here
}

</script>

<template>
	<div class="vertical-flexbox">
		<div 
			v-for="plantComponent in plantComponents">

			<div>
				<img :src="plantComponent.image" alt="Image of the plant">
				<h1>{{ plantComponent.plant.name }}</h1>
				<img :src="determineIcon(plantComponent.plant)" alt="Thirst indicator">
			</div>
		</div>

		<!-- Add plant -->
		<div>
			<button @click="sendToPlantForm()">
				<span>REPLAVE WITH ICON</span>
			</button>
		</div>
	</div>
	
</template>

<style scoped>
	.vertical-flexbox {
		
	}
</style>