<script setup lang="ts">
import HealthBar from '@/components/HealthBar.vue';
import NavBarVue from '@/components/NavBar.vue';
import SelectedPlantVue from '@/components/SelectedPlant.vue';
import { usePlantsStore } from '@/stores/plants';
import type { PlantComponentType } from '@/types/Components';
import type { Plant, StatRange } from '@/types/Plant';

const store = usePlantsStore();

let plantComponents: PlantComponentType[] = store.getPlants();
let plantIndex: number = 0;
let currentPlant: Plant = store.currentPlant;
if (currentPlant.plantType == "default plant") {
	store.setCurrentPlant(plantComponents[plantIndex].plant);
}

</script>

<template>
	<!-- Nav bar-->
  <div class="vertical-flexbox">
    <NavBarVue
      :plant-name="currentPlant.name"
      :plant-components="plantComponents">
    </NavBarVue>

    <!-- Plant Selection -->
    <SelectedPlantVue :plants="plantComponents"></SelectedPlantVue>

    <!-- Health Bar -->
    <HealthBar :health-stats="currentPlant.moisture" :bar-length="500"></HealthBar>
  </div>
</template>

<style>
  .vertical-flexbox {
    justify-content: center;
  }
  body {
    background-color: #FFFFFB;
  }
</style>