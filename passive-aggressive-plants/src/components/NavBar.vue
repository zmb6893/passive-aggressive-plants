<script setup lang="ts">

import type { PlantComponentType } from '@/types/Components';
import HamburgerMenu from './HamburgerMenu.vue';
import { usePlantsStore } from '@/stores/plants';

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
    <div class="icons-container">
      <img class="svg_menu_attrs" src="@/assets/leaderboard.svg" alt="leaderboard" @click="goToLeaderBoard()"/>

      <!-- Hamburger Menu-->
      <img class="svg_menu_attrs" src="@/assets/burger_yum.svg" alt="hamburger_button" @click="openHamburgerMenu()"/>
      <HamburgerMenu :plant-components="plantComponents"></HamburgerMenu>
    </div>
	</div>

</template>

<style scoped>

.horizontal-flexbox {
	/** Beck, you know what to do */
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 2px solid #DDA15E;
  padding: 0 20px;
}

.icons-container {
  display: flex;
  align-items: center; /* Ensures the icons are aligned in the middle vertically */
  padding: 0 20px;
}

.svg_menu_attrs {
  height: 60px;
  filter: invert(16%) sepia(20%) saturate(1428%) hue-rotate(46deg) brightness(86%) contrast(86%);
}
</style>