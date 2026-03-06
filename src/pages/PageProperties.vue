<template>
  <FilterBar @updateAddress="handleAddressUpdate"/>
  
  <v-container>
    <h2 class="text-center mt-5">Properties</h2>
    <p class="text-center">
      Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
    </p>

    <p class="mt-5" style="font-size: 14px;">{{ filteredProperties.length }} results</p>
  </v-container>

  <PropertiesList :properties="filteredProperties" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePropertyStore } from '@/stores/propertyStore'
import FilterBar from '@/components/filter-bar/FilterBar.vue';
import PropertiesList from '@/components/properties-list/PropertiesList.vue';

const store = usePropertyStore()

const filteredProperties = ref(store.properties)

function handleAddressUpdate(value) {
  if (value) {
    filteredProperties.value = store.properties.filter(
      (p) => p.address.toLowerCase().includes(value.toLowerCase())
    )
  } else {
    filteredProperties.value = store.properties
  }
}
</script>