<script setup lang="ts">
import type { PlantComponentType } from '@/types/Components';
import Plant from '@/components/Plant.vue';
import { ref } from 'vue';
import { usePlantsStore } from '@/stores/plants';

const props = defineProps<{
	plants: PlantComponentType[]
}>()

const store = usePlantsStore();

let currentPlant = ref(props.plants[0]);
let currentIndex = 0;

const getNext = () => {
  currentIndex = (currentIndex + 1) % props.plants.length;
  currentPlant.value = props.plants[currentIndex];
  store.setCurrentPlant(currentPlant.value.plant);
  console.log(currentPlant)
}

const getPrevious = () => {
  currentIndex = (currentIndex - 1 + props.plants.length) % props.plants.length;
  currentPlant.value = props.plants[currentIndex];
  store.setCurrentPlant(currentPlant.value.plant);
  console.log(currentPlant)
}

</script>

<template>
	<div class="horizontal-flexbox">
		<!-- Left Arrow -->
    <img class="direction_arrow" src="@/assets/left_arrow.svg" alt="left arrow" @click="getPrevious()"/>

		<!-- Plant -->
		<Plant :component="currentPlant"></Plant>

		<!-- Right Arrow -->
    <img class="direction_arrow" src="@/assets/right_arrow.svg" alt="right arrow" @click="getNext()"/>
	</div>
	
</template>

<style scoped>
	/** You have a lot more work to do beck...  */
	.horizontal-flexbox {
    display: flex;
    align-items: center;
    justify-content: center;
	}

  .direction_arrow {
    height: 10vmin;
    filter: invert(16%) sepia(20%) saturate(1428%) hue-rotate(46deg) brightness(86%) contrast(86%);
  }
</style>