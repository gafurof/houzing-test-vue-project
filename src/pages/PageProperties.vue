<template>
  <FilterBar @applyFilters="handleApplyFilters" @updateAddress="handleAddressUpdate"/>

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
import { ref, computed, watch } from 'vue'
import { usePropertyStore } from '@/stores/propertyStore'
import FilterBar from '@/components/filter-bar/FilterBar.vue';
import PropertiesList from '@/components/properties-list/PropertiesList.vue';
import { useRoute } from 'vue-router'

const store = usePropertyStore()
const route = useRoute()

const filteredProperties = ref(store.properties)

// keep an active filters object (category may come from query)
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

  if (f.rooms != null) {
    // match exact number of rooms when provided
    result = result.filter(p => Number(p.rooms) === Number(f.rooms))
  }

  if (f.sizeMin != null) {
    result = result.filter(p => (p.area || 0) >= Number(f.sizeMin))
  }
  if (f.sizeMax != null) {
    result = result.filter(p => (p.area || 0) <= Number(f.sizeMax))
  }

  // sorting
  if (f.sort === 'price_asc') result.sort((a,b) => Number(a.price) - Number(b.price))
  if (f.sort === 'price_desc') result.sort((a,b) => Number(b.price) - Number(a.price))

  filteredProperties.value = result
}

// watch for any query changes (AdvancedDialog or category clicks will navigate with query)
watch(() => route.query, (newQuery) => {
  const q = newQuery || {}
  const parsed = {}

  // numeric fields we expect
  const numericKeys = ['priceMin', 'priceMax', 'sizeMin', 'sizeMax', 'rooms']
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
