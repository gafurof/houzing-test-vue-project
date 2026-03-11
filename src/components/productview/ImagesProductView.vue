<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-img :src="mainImg" :height="$vuetify.display.mdAndUp ? '400' : '200'" cover />
    </v-col>

    <v-col cols="12" md="6">
      <v-row>

        <template v-if="$vuetify.display.mdAndUp">
          <v-col cols="6" v-for="(item, index) in previewImages" :key="index" class="pa-1" style="margin-top: 5.5px;">
            <v-img :src="item" height="195" cover></v-img>
          </v-col>
          <CoruselImages :images="productImages" />
        </template>

        <template v-else>
          <v-col cols="6" class="pa-3">
            <v-img :src="previewImages[0]" height="94" cover />
          </v-col>

          <CoruselImages :images="productImages" />

        </template>

      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import CoruselImages from './CoruselImages.vue';
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePropertyStore } from '@/stores/propertyStore'
import fallbackImg from '@/assets/unsplash_2gDwlIim3Uw.png'

const route = useRoute()
const store = usePropertyStore()

const product = computed(() => store.properties.find(p => Number(p.id) === Number(route.params.id)) )

const productImages = computed(() => (product.value && product.value.images && product.value.images.length) ? product.value.images : [fallbackImg])
const mainImg = computed(() => productImages.value[0] || fallbackImg)
const previewImages = computed(() => {
  // show up to three preview images (excluding main)
  if (!productImages.value || productImages.value.length <= 1) return [productImages.value[0]]
  return productImages.value.slice(1, 4)
})
</script>
