<script setup lang="ts">
import type { StatRange } from '@/types/Plant';

const props = defineProps<{
	healthStats: StatRange
	barLength: number
}>()

const max = props.healthStats.max;
const min = props.healthStats.min;
const length = props.barLength;
const height = 16;

</script>

<template>
	<!-- Progress bar -->
	<svg :width="length" :height="height" xmlns="http://www.w3.org/2000/svg" class="health-bar">
		<!-- Red portion -->
		<rect x="0" y="0" :width="length - max" :height="height" fill="#F21B3F"/>

		<!-- Green portion -->
		<rect :x="min" y="0" :width="max-min" :height="height" fill="#ABFF4F"/>

		<!-- Blue portion -->
		<rect :x="max" y="0" :width="max * .5" :height="height" fill="#08BDBD"/>

		<rect :x="healthStats.current" y="0" :width="10" :height="height" fill="#000000"/>
	</svg>
	<!-- Text Descripting -->
</template>

<style scoped>
	.health-bar {
		border-radius: 50px;;
	}
</style>