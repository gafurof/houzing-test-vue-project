<template>
  <v-container>
    <h2 class="text-center mt-5">Favourites</h2>
    <p class="text-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>

    <p class="mt-5" style="font-size: 14px;" @click="console">{{ properties.length }} results</p>
  </v-container>
  <PropertiesList :properties="properties" />
</template>

<script setup>
import { computed } from 'vue'
import { useUserInfoStore } from '@/store/index.js'
import PropertiesList from '@/components/properties-list/PropertiesList.vue'

const store = useUserInfoStore()

const properties = computed(() => {
  console.log(store.properties)
  return store.properties.filter(property =>
    store.accauntStatus.favourites.includes(String(property.id))
  )
})
</script>
