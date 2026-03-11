<template>
  <v-sheet class="mx-auto mb-12 mt-2" width="94%">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="cat in cats" :key="cat.id" :value="cat.value">
        <v-card @click="onCategoryClick(cat)" :width="cardWidth" :height="cardHeight" class="ma-4" style="cursor: pointer;">
          <v-img :src="cat.img" height="100%" width="100%" cover
            gradient="to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.35)" class="d-flex align-center justify-center">
            <v-row class="fill-height ma-0" align="center" justify="center" dense no-gutters>
              <v-col class="text-center">
                <div class="white--text subtitle-1 mt-2" style="color: white">{{ cat.labelUz }}</div>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { categories as catList } from '@/data/categories.js'
import { useRouter } from 'vue-router'
import { usePropertyStore } from '@/stores/propertyStore'

const { mdAndUp } = useDisplay()

const cardWidth = computed(() => (mdAndUp.value ? 280 : 161))
const cardHeight = computed(() => (mdAndUp.value ? 350 : 201))

const cats = catList

const router = useRouter()
const store = usePropertyStore()

function onCategoryClick(cat) {
  const has = store.properties.some(p => p.category === cat.id)

  if (!has) {
    const maxId = store.properties.reduce((max, p) => Math.max(max, Number(p.id)), 0)
    const newProp = {
      id: maxId + 1,
      type: 'for sale',
      category: cat.id,
      title: `${cat.labelUz} - yangi e'lon`,
      address: cat.labelUz,
      dataPublished: new Date().toLocaleDateString('en-GB'),
      city: 'Tashkent',
      country: 'Uzbekistan',
      lat: 41.2995,
      lng: 69.2401,
      description: `Namuna ${cat.labelUz} e'lon.`,
      oldPrice: '0',
      price: '10000',
      images: [cat.img || 'https://via.placeholder.com/800x600']
    }

    store.properties.push(newProp)
  }

  router.push({ path: '/properties', query: { category: cat.id } })
}
</script>
