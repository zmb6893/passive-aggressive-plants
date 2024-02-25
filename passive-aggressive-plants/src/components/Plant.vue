<script setup lang="ts">

import type { PlantComponentType } from '@/types/Components';
import drowning_plant from "@/assets/drowning_plant.jpg";
import dehydrated from "@/assets/dehydrated.jpg";
import normal from "@/assets/normal.jpg";

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
    image = drowning_plant;
  } else if (props.component.plant.moisture.current < props.component.plant.moisture.min) {
    image = dehydrated;
  } else {
    image = normal;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	}

  .chatbox {
    position: relative;
    background-color: #f0f0f0; /* Light grey background */
    border-radius: 15px; /* Rounded corners */
    padding: 10px 20px; /* Padding around text */
    margin-bottom: 20px; /* Space between chatbox and image */
    width: 90%; /* Maximum width of chatbox */
    word-wrap: break-word; /* Ensures text breaks to prevent overflow */
    text-align: center; /* Centers the text horizontally */

  }

  .chatbox::after {
    content: "";
    position: absolute;
    bottom: -10px; /* Position just below the chatbox */
    left: 50%; /* Start from the middle of the chatbox */
    width: 0;
    height: 0;
    border: 10px solid transparent; /* Creates the triangle */
    border-top-color: #f0f0f0; /* Matches the background of the chatbox */
    border-bottom: 0; /* Removes the bottom border */
    margin-left: -10px; /* Centers the triangle correctly */
  }

	.plant-image {
    height: 50vmin
	}
</style>