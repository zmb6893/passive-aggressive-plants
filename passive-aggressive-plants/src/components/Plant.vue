<script setup lang="ts">

import type { PlantComponentType } from '@/types/Components';

const props = defineProps<{ 
	component: PlantComponentType,
}>()

let comment: string;
let image: string;

const getComment = () => {
	if (props.component.plant.moisture.current > props.component.plant.moisture.max ) {
		comment = "Woah, easy there!";
	} else if (props.component.plant.moisture.current < props.component.plant.moisture.min) {
		comment = "Water me, dipshit";
	} else {
		comment = "You know, I actually don't feel terrible today."
	}
	return comment;
}

const getImage = () => {
  if (props.component.plant.moisture.current > props.component.plant.moisture.max ) {
    image = "@/assets/drowning_plant.jpg";
  } else if (props.component.plant.moisture.current < props.component.plant.moisture.min) {
    image = "@/assets/dehydrated.jpg";
  } else {
    image = "@/assets/normal.jpg";
  }
  return image
}

</script>

<template>
	<div class="vertical-flexbox">
		<!-- Chat Box -->
		<div class="chatbox">
			<p> {{ getComment() }} </p>
		</div>

		<!-- Plant Image -->
		<img class="plant-image" :src="getImage()" alt="Passive Aggressive Plant">
	</div>
	
</template>

<style scoped>
	/** BECK: Add styles! */
	.vertical-flexbox {

	}

	.chatbox {

	}

	.plant-image {

	}
</style>