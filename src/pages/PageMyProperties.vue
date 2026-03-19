<template>
  <v-container>
    <div class="d-flex align-center justify-space-between ga-15 mb-5">
      <h2>My Properties</h2>

      <v-text-field v-model="search" label="Search by title or address" variant="underlined" hide-details class="mb-4"
        max-width="300" />
    </div>

    <MyPropertiesTable :search="search" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import MyPropertiesTable from '@/components/my-properties-table/MyPropertiesTable.vue'

const search = ref('')
</script>