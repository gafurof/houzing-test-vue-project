<template>
  <v-container>
    <h2 class="text-center mt-13">Recommended</h2>
    <p class="text-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
  </v-container>

  <SlideGropProperites :apartments="topProperties" />
</template>

<script setup>
import { usePropertyStore  } from '@/stores/propertyStore'
import SlideGropProperites from '../slide-grop/SlideGropProperites.vue'


const store = usePropertyStore ()
const topProperties = store.properties.slice(0, 5)
</script>
