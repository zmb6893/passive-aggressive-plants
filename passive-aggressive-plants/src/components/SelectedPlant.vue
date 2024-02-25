<script setup lang="ts">
import type { PlantComponentType } from '@/types/Components';
import Plant from '@/components/Plant.vue';

const props = defineProps<{
	plants: PlantComponentType[]
}>()

let currentPlant = props.plants[0];
let currentIndex = 0;

const getNext = () => {
	currentPlant = props.plants[(currentIndex + 1) % (props.plants.length - 1)];
}

const getPrevious = () => {
	currentPlant = props.plants[(currentIndex - 1) % (props.plants.length - 1)];
}

</script>

<template>
	<div class="horizontal-flexbox">
		<!-- Left Arrow -->
		<button @click="getPrevious()">
			<span>
				SET ICON HERE
			</span>
		</button>

		<!-- Plant -->
		<Plant :component="currentPlant"></Plant>

		<!-- Right Arrow -->
		<button @click="getNext()">
			<span>
				SET ICON HERE
			</span>
		</button>
	</div>
	
</template>

<style scoped>
	/** You have a lot more work to do beck...  */
	.horizontal-flexbox {
		
	}
</style>