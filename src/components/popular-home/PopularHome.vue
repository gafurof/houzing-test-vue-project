<template>
  <v-card width="100%" height="571px" rounded="0" class="overflow-hidden">
    <v-img :src="topImage" height="100%" width="100%" cover
      gradient="to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)" class="d-flex align-center justify-center">
      <v-row class="fill-height ma-0" align="center" justify="center" dense no-gutters>
        <v-col class="text-center d-flex flex-column align-center">
          <h1 style="color: white; width: 70%;">{{ titleText }}</h1>
          <v-btn class="mt-7" size="x-large" color="primary" rounded="0" @click="openTopProperty">
            View Property
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePropertyStore } from '@/stores/propertyStore'
import fallbackImg from '@/assets/unsplash_2gDwlIim3Uw.png'

const router = useRouter()
const store = usePropertyStore()

const topProperty = computed(() => {
  if (!store.properties || !store.properties.length) return null
  // compute views in last 7 days for each property using the store getter
  const withCounts = store.properties.map(p => ({
    prop: p,
    views: store.viewsInLastDays(p, 7)
  }))
  withCounts.sort((a, b) => b.views - a.views)
  // if top has 0 views, still return first property as fallback
  return withCounts[0] ? withCounts[0].prop : null
})

const topImage = computed(() => {
  const p = topProperty.value
  if (!p) return fallbackImg
  return (p.images && p.images[0]) || fallbackImg
})

const titleText = computed(() => {
  const p = topProperty.value
  if (!p) return "This week's most popular home"
  return `${p.title} — viewed ${store.viewsInLastDays(p, 7)} times this week`
})

function openTopProperty() {
  const p = topProperty.value
  if (!p) return
  router.push({ path: `/product/${p.id}` })
}
</script>
