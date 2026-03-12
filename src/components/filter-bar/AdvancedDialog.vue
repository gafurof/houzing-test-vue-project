<template>
  <v-dialog v-model="dialog" max-width="920">
    <template #activator="{ props: activatorProps }">
      <v-btn block  size="large" rounded="0" color="primary" v-bind="activatorProps">
        <template #prepend>
          <v-icon>mdi-tune-variant</v-icon>
        </template>
        <span >Advanced</span>
      </v-btn>
    </template>

    <v-card>
      <v-card-text class="pb-0">
        <v-card-title>Address</v-card-title>
        <v-row dense>
          <v-col cols="6" md="3">
            <v-text-field v-model="filters.country" variant="outlined" label="Country"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field v-model="filters.region" variant="outlined" label="Region"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field v-model="filters.city" variant="outlined" label="City"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field v-model="filters.zip" variant="outlined" label="Zip code"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
        <v-card-text class="pt-0 pb-0">
        <v-card-title>Apartment info</v-card-title>
        <v-row dense>
          <v-col cols="6" md="3">
            <v-text-field v-model.number="filters.rooms" variant="outlined" label="Rooms"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field v-model.number="filters.sizeMin" variant="outlined" label="Min Size (sqm)"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field v-model.number="filters.sizeMax" variant="outlined" label="Max Size (sqm)"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-select v-model="filters.sort" :items="sortItems" item-title="title" item-value="value" label="Sort" variant="outlined" hide-details></v-select>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="pt-0 pb-0">
        <v-card-title>Price</v-card-title>
        <v-row dense>
          <v-col cols="6" md="3">
            <v-text-field v-model.number="filters.priceMin" variant="outlined" label="Min Price"></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field v-model.number="filters.priceMax" variant="outlined" label="Max Price"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="bg-blue-lighten-5">
        <v-spacer></v-spacer>
        <v-btn text @click="onReset">Cancel</v-btn>
        <v-btn color="primary" text @click="onSubmit">Apply</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { shallowRef, reactive } from 'vue'
import { useRouter } from 'vue-router'

const dialog = shallowRef(false)
const router = useRouter()

const filters = reactive({
  country: '',
  region: '',
  city: '',
  zip: '',
  rooms: null,
  sizeMin: null,
  sizeMax: null,
  priceMin: null,
  priceMax: null,
  sort: null
})

const sortItems = [
  { title: 'Newest', value: 'newest' },
  { title: 'Price: Low to High', value: 'price_asc' },
  { title: 'Price: High to Low', value: 'price_desc' }
]

function onSubmit() {
  // build payload with only non-empty values
  const payload = {}
  Object.keys(filters).forEach(k => {
    const v = filters[k]
    if (v !== null && v !== '' && v !== undefined) payload[k] = String(v)
  })

  dialog.value = false
  // navigate to properties with query params; PageProperties watches route.query
  router.push({ path: '/properties', query: payload })
}

function onReset() {
  // reset local filters and navigate to properties without query (show all)
  Object.keys(filters).forEach(k => filters[k] = (k === 'rooms' || k.includes('Min') || k.includes('Max')) ? null : '')
  dialog.value = false
  router.push({ path: '/properties' })
}
</script>
