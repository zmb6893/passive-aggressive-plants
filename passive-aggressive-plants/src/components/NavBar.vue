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
    <img class="svg_menu_attrs" src="@/assets/leaderboard.svg" alt="leaderboard" @click="goToLeaderBoard()"/>

		<!-- Hamburger Menu-->
      <img class="svg_menu_attrs" src="@/assets/burger_yum.svg" alt="hamburger_button" @click="openHamburgerMenu()"/>
		<HamburgerMenu :plant-components="plantComponents"></HamburgerMenu>
	</div>
</template>

<style scoped>

.horizontal-flexbox {
	/** Beck, you know what to do */
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
}

.svg_menu_attrs {
  height: 60px;
  filter: invert(16%) sepia(20%) saturate(1428%) hue-rotate(46deg) brightness(86%) contrast(86%);
}

</style>