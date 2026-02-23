<template>
  <v-container>
    <div class="d-flex align-center justify-space-between ga-15 mb-5">
      <h2>My Properties</h2>
      <v-text-field v-if="$vuetify.display.mdAndUp" label="User Name" variant="underlined" hide-details class="mb-4"
        max-width="300" />
    </div>
    <MyPropertiesTable/>
  </v-container>
</template>

<script setup>
import MyPropertiesTable from '@/components/my-properties-table/MyPropertiesTable.vue';
</script>
