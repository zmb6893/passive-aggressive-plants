<script setup lang="ts">
import { ref } from 'vue';
import { SidebarMenu } from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import type { PlantComponentType } from '@/types/Components';
import type { Plant } from '@/types/Plant';

const isSidebarExpanded = ref(false);

const props = defineProps<{
  plantComponents: PlantComponentType[];
}>();

const thirstyIcon = "@/assets/sun.svg";
const overWateredIcon = "@/assets/water_drop.svg";
const addIcon = "@/assets/add.svg";

const determineIcon = (plant: Plant) => {
  const iconSrc: string = plant.moisture.current < plant.moisture.min ? thirstyIcon
      : plant.moisture.current > plant.moisture.max ? overWateredIcon : "";
  return iconSrc;
}

const menu = ref([
  ...props.plantComponents.map(plantComponent => ({
    header: plantComponent.plant.name,
    icon: determineIcon(plantComponent.plant),
    child: []
  })),
  {
    header: 'Add Plant',
    icon: addIcon,
    action: () => {
      // Add logic for navigating to the plant form here
    },
  }
]);
</script>

<template>
  <div :class="{ 'sidebar-expanded': isSidebarExpanded }">
    <SidebarMenu :menu="menu" @toggle="isSidebarExpanded = !isSidebarExpanded" />
    <div class="overlay" v-if="isSidebarExpanded"></div>
  </div>
</template>

<style scoped>
/* Custom styles to override default vue-sidebar-menu styles */
::v-deep(.vsm--menu){
  background-color: #FFFDF3; /* Light grey background */
}

::v-deep(.vsm--link){
  color: #333; /* Darker text for better contrast */
}

::v-deep(.vsm--link:hover){
  background-color: #ddd; /* Light grey background on hover */
}

::v-deep(.vsm--link_active, .vsm--link_active:hover){
  background-color: #bbb; /* Different background color for active link */
  color: white; /* White text for active link */
}

/* Custom styles to override default vue-sidebar-menu styles */
::v-deep(.vsm--menu), ::v-deep(.vsm--menu *) {
  font-family: 'Roboto Flex', sans-serif; /* Set the default font */
  color: #283618; /* Set the default text color */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  z-index: 1; /* Ensure it's above the content but below the sidebar */
}

.content-area {
  transition: filter 0.3s ease; /* Smooth transition for the dimming effect */
}

.sidebar-expanded .content-area {
  filter: blur(2px) brightness(0.7); /* Dim and slightly blur the content */
  pointer-events: none; /* Optional: Disable interactions with the content */
  user-select: none; /* Optional: Prevent text selection */
}
</style>
