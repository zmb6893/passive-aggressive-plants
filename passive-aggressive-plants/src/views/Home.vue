<script setup lang="ts">
import AddPlant from '@/components/AddPlant.vue';
import HealthBar from '@/components/HealthBar.vue';
import NavBarVue from '@/components/NavBar.vue';
import SelectedPlantVue from '@/components/SelectedPlant.vue';
import { usePlantsStore } from '@/stores/plants';
import type { PlantComponentType } from '@/types/Components';
import type { Plant, StatRange } from '@/types/Plant';
import { ref } from 'vue';

const store = usePlantsStore();

let plantComponents = ref(store.getPlants());
let plantIndex: number = 0;
let currentPlant: Plant = store.currentPlant;
if (currentPlant.plantType == "default plant") {
	store.setCurrentPlant(plantComponents.value[plantIndex].plant);
}

let formOpen = ref(store.addingPlant);
console.log(currentPlant)
</script>

<template>
	<!-- Nav bar-->
  <div class="vertical-flexbox">
    <NavBarVue
      :plant-components="plantComponents">
    </NavBarVue>

    <AddPlant v-if="formOpen" style="position: absolute; background-color: white; z-index: 10; width: 80%; margin:auto; outline: 11cap;"></AddPlant>

    <!-- Plant Selection -->
    <SelectedPlantVue :plants="plantComponents"></SelectedPlantVue>

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