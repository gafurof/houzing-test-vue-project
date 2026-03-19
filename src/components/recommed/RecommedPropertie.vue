<template>
  <v-container>
    <h2 class="text-center mt-13">Recommended</h2>
    <p class="text-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
  </v-container>

  <SlideGropProperites :apartments="topProperties" />
</template>

<script setup>
import SlideGropProperites from '../slide-grop/SlideGropProperites.vue'
import { usePropertyStore } from '@/stores/propertyStore'
import { computed, onMounted } from 'vue'

const store = usePropertyStore()

onMounted(() => {
  store.loadProperties()
})

const topProperties = computed(() => {
  return store.properties.slice(1, 6)
})
</script>
