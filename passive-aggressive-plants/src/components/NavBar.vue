<script setup lang="ts">

import type { PlantComponentType } from '@/types/Components';
import HamburgerMenu from './HamburgerMenu.vue';

defineProps<{
	plantName: string,
	plantComponents: PlantComponentType[];
}>()

const goToLeaderBoard = () => {
	
}

const openHamburgerMenu = () => {

}

</script>

<template>
	<div class="horizontal-flexbox">
		<!-- Plant Name -->
		<h1> {{ plantName }}</h1>

		<!-- Leaderboard icon -->
		<button @click="goToLeaderBoard()">
			<span>
				ADD ICON
			</span>
		</button>

		<!-- Hamburger Menu-->
		<button @click="openHamburgerMenu()">
			<span>
				ADD ICON
			</span>
		</button>

		<HamburgerMenu :plant-components="plantComponents"></HamburgerMenu>
	</div>
</template>

<style scoped>

.horizontal-flexbox {
	/** Beck, you know what to do */
}

</style>