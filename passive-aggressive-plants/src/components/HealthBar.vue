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
	<!-- Text Descripting -->

	<div class="bar-description">
    <div class="under-watered" :style="{flexBasis: length - max  + 'px'}">Under watered</div>
    <div class="divider"></div> <!-- Divider after Golden Zone -->
    <div class="golden-zone" :style="{flexBasis: max - min - 30 + 'px'}">Golden Zone</div>
    <div class="divider"></div> <!-- Divider after Golden Zone -->
    <div class="over-watered" :style="{flexBasis: length - max + 'px'}">Over watered</div>
  </div>

</template>

<style scoped>

.health-bar {
  margin-bottom: 20px; /* Spacing between the bar and descriptions */
  border-radius: 50px;
}

.bar-description {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.under-watered, .golden-zone, .over-watered {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: large;
}

.divider {
  height: 100%; /* Match the height of text sections or as needed */
  width: 2px; /* Thickness of the divider */
  background-color: #283618; /* Color of the divider */
}
</style>