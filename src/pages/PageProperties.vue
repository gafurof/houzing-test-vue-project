<template>
  <FilterBar @applyFilters="handleApplyFilters" @updateAddress="handleAddressUpdate" />

  <v-container class="pb-0">
    <h2 class="text-center mt-5">Properties</h2>
    <p class="text-center mb-2">
      Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
    </p>
    <div class="d-flex justify-space-between align-center justify-center" style="width: 100%">
      <p style="font-size: 14px;">{{ filteredProperties.length }} results</p>
      <v-btn-toggle v-model="viewMode" mandatory rounded="xl">
        <v-btn value="list" color="primary"  title="List view">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-btn value="map" variant="tonal" title="Map view">
          <v-icon>mdi-map</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
  </v-container>

  <div>
    <PropertiesList v-if="viewMode === 'list'" :properties="filteredProperties" />
    <HomeMap v-else :properties="filteredProperties" :showHeader="false" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { usePropertyStore } from '@/stores/propertyStore'
import FilterBar from '@/components/filter-bar/FilterBar.vue';
import PropertiesList from '@/components/properties-list/PropertiesList.vue';
import HomeMap from '@/components/map/HomeMap.vue'
import { useRoute } from 'vue-router'

const store = usePropertyStore()
const route = useRoute()

const filteredProperties = ref(store.properties)
const viewMode = ref('list')

const activeFilters = ref({})

function applyAllFilters() {
  const f = activeFilters.value || {}
  let result = store.properties.slice()

  if (f.category) {
    result = result.filter(p => p.category === f.category)
  }

  if (f.address) {
    result = result.filter(p => (p.address || '').toLowerCase().includes(String(f.address).toLowerCase()) || (p.city || '').toLowerCase().includes(String(f.address).toLowerCase()))
  }

  if (f.city) {
    result = result.filter(p => (p.city || '').toLowerCase().includes(String(f.city).toLowerCase()))
  }

  if (f.priceMin != null) {
    result = result.filter(p => Number(p.price) >= Number(f.priceMin))
  }
  if (f.priceMax != null) {
    result = result.filter(p => Number(p.price) <= Number(f.priceMax))
  }

  // match exact number of rooms/beds when provided
  if (f.rooms != null || f.beds != null) {
    const wanted = Number(f.beds != null ? f.beds : f.rooms)
    result = result.filter(p => Number(p.beds ?? p.rooms ?? 0) === wanted)
  }

  if (f.sizeMin != null) {
    result = result.filter(p => (p.area || 0) >= Number(f.sizeMin))
  }
  if (f.sizeMax != null) {
    result = result.filter(p => (p.area || 0) <= Number(f.sizeMax))
  }

  // sorting
  if (f.sort === 'price_asc') result.sort((a, b) => Number(a.price) - Number(b.price))
  if (f.sort === 'price_desc') result.sort((a, b) => Number(b.price) - Number(a.price))

  filteredProperties.value = result
}

// watch for any query changes (AdvancedDialog or category clicks will navigate with query)
watch(() => route.query, (newQuery) => {
  const q = newQuery || {}
  const parsed = {}

  // numeric fields we expect
  const numericKeys = ['priceMin', 'priceMax', 'sizeMin', 'sizeMax', 'rooms', 'beds']
  Object.keys(q).forEach(k => {
    if (numericKeys.includes(k)) {
      const n = Number(q[k])
      parsed[k] = Number.isNaN(n) ? null : n
    } else {
      parsed[k] = q[k]
    }
  })

  activeFilters.value = parsed
  applyAllFilters()
}, { immediate: true })

function handleAddressUpdate(value) {
  if (value) {
    activeFilters.value.address = value
  } else {
    delete activeFilters.value.address
  }
  applyAllFilters()
}

function handleApplyFilters(payload) {
  // payload contains address, category and advanced filters
  activeFilters.value = Object.assign({}, activeFilters.value || {}, payload || {})
  applyAllFilters()
}
</script>
