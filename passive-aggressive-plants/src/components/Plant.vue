<script setup lang="ts">

import type { PlantComponentType } from '@/types/Components';

const props = defineProps<{ 
	component: PlantComponentType,
}>()

let comment: string;

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

</script>

<template>
	<div class="vertical-flexbox">
		<!-- Chat Box -->
		<div class="chatbox">
			<p> {{ getComment() }} </p>
		</div>

		<!-- Plant Image -->
		<img class="plant-image" :src="component.image" alt="Passive Aggressive Plant">
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