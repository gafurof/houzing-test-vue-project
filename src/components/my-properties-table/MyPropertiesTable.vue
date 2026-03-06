<template>
  <v-card elevation="2" rounded="lg" class="pa-6 mb-5">

    <v-row class="font-weight-medium text-grey-darken-1 mb-4">
      <v-col cols="12" md="5"><b>Listing Title</b></v-col>
      <v-col v-if="$vuetify.display.smAndUp" md="2">Date Published</v-col>
      <v-col v-if="$vuetify.display.smAndUp" md="2">Status</v-col>
      <v-col v-if="$vuetify.display.smAndUp" md="1">View</v-col>
      <v-col v-if="$vuetify.display.smAndUp" md="2" class="text-center">Action</v-col>
    </v-row>

    <v-row v-for="item in filteredListings" :key="item.id" class="align-center mb-6">
      <v-col cols="12" md="5">
        <v-row no-gutters>
          <v-col cols="12" sm="4" md="4">
            <v-card rounded="md" class="position-relative">
              <v-img :src="item.image" height="120" cover />
              <v-btn v-if="item.featured" size="x-small" color="primary" class="position-absolute"
                style="top:8px; left:8px">FEATURED</v-btn>
            </v-card>
          </v-col>

          <v-col cols="12" sm="8" md="8" class="pl-sm-4 pt-3 pt-sm-0">
            <div class="d-flex align-center mb-1">
              <span class="font-weight-medium">{{ item.title }}</span>
              <v-chip size="x-small" color="blue-grey-darken-4" class="ml-2">{{ item.type }}</v-chip>
            </div>
            <div class="text-grey text-caption mb-1">{{ item.location }}</div>
            <div class="text-grey text-caption text-decoration-line-through">{{ item.oldPrice }}</div>
            <div class="font-weight-bold">{{ item.price }}</div>
          </v-col>
        </v-row>
      </v-col>

      <template v-if="$vuetify.display.smAndUp">
        <v-col md="2" class="text-grey-darken-1">{{ item.dataPublished }}</v-col>
        <v-col md="2" class="text-grey-darken-1">{{ item.type }}</v-col>
        <v-col md="1" class="text-grey-darken-1">{{ item.id }}</v-col>
        <v-col md="2" class="text-center">
          <v-btn icon variant="text"><v-icon size="18">mdi-pencil</v-icon></v-btn>
          <v-btn icon variant="text"><v-icon size="18">mdi-delete</v-icon></v-btn>
        </v-col>
      </template>

    </v-row>

    <v-row v-if="filteredListings.length === 0" class="justify-center py-10">
      <span class="grey--text">No properties found</span>
    </v-row>

  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserInfoStore } from '@/stores/userInfoStore'
import { properties } from '@/data/properties'

const props = defineProps({
  search: { type: String, default: '' }
})

const store = useUserInfoStore()

const listings = ref(
  properties.filter(property =>
    store.accountStatus.myProperties.includes(String(property.id))
  )
)

const filteredListings = computed(() => {
  const query = props.search.toLowerCase()
  if (!query) return listings.value

  return listings.value.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.address.toLowerCase().includes(query)
  )
})
</script>