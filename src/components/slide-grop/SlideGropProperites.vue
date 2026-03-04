<template>
  <v-sheet class="mx-auto mb-12 mt-2" width="94%">

    <v-slide-group v-if="mdAndUp" show-arrows>
      <v-slide-group-item v-for="item in apartments" :key="item.id">
        <v-card width="380" class="mr-6 ma-2">
          <v-img height="250" src="@/assets/unsplash_2gDwlIim3Uw.png" cover class="position-relative">
            <div class="d-flex justify-space-between w-100 pa-3">
              <v-btn size="small" color="primary" variant="flat">FEATURED</v-btn>
              <v-btn size="small" color="#0D263B" variant="flat">{{ item.type }}</v-btn>
            </div>
          </v-img>

          <v-card-item>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>
              <span class="me-1">Local Favorite</span>
            </v-card-subtitle>
          </v-card-item>

          <div class="d-flex align-center justify-space-between pa-3">
            <div class="d-flex flex-column align-center text-caption">
              <v-icon size="18">mdi-bed</v-icon>
              <span>5 beds</span>
            </div>
            <div class="d-flex flex-column align-center text-caption">
              <v-icon size="18">mdi-shower</v-icon>
              <span>2 baths</span>
            </div>
            <div class="d-flex flex-column align-center text-caption">
              <v-icon size="18">mdi-car</v-icon>
              <span>1 garage</span>
            </div>
            <div class="d-flex flex-column align-center text-caption">
              <v-icon size="18">mdi-ruler-square</v-icon>
              <span>1200 Sq Ft</span>
            </div>
          </div>

          <v-divider class="mx-4 mb-1" />

          <div class="d-flex align-center justify-space-between">
            <div>
              <v-card-subtitle>
                <del class="me-1">{{ item.oldPrice }}</del>
              </v-card-subtitle>
              <v-card-title>{{ item.price }}</v-card-title>
            </div>
            <div class="d-flex ga-3 pr-2">
              <v-btn :to="'/product/' + item.id" icon="mdi-fullscreen" variant="text"></v-btn>
              <v-btn :color="favourites.includes(String(item.id)) ? 'red' : 'black'" icon="mdi-heart" variant="tonal" @click="likeButton(item.id)"></v-btn>
            </div>
          </div>

        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-row v-else class="justify-center ga-4">
      <v-col v-for="item in apartments" :key="item.id" cols="12" class="d-flex justify-center">
        <v-card width="343">
          <v-img height="250" src="@/assets/unsplash_2gDwlIim3Uw.png" cover class="position-relative">
            <div class="d-flex justify-space-between w-100 pa-3">
              <v-btn size="small" color="primary" variant="flat">FEATURED</v-btn>
              <v-btn size="small" color="#0D263B" variant="flat">{{ item.type }}</v-btn>
            </div>
          </v-img>

          <v-card-item>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>
              <span class="me-1">Local Favorite</span>
            </v-card-subtitle>
          </v-card-item>

          <div class="d-flex align-center justify-space-between pa-3">
            <div class="d-flex flex-column align-center text-caption">
              <v-icon size="18">mdi-bed</v-icon>
              <span>5 beds</span>
            </div>
            <div class="d-flex flex-column align-center text-caption">
              <v-icon size="18">mdi-shower</v-icon>
              <span>2 baths</span>
            </div>
            <div class="d-flex flex-column align-center text-caption">
              <v-icon size="18">mdi-car</v-icon>
              <span>1 garage</span>
            </div>
            <div class="d-flex flex-column align-center text-caption">
              <v-icon size="18">mdi-ruler-square</v-icon>
              <span>1200 Sq Ft</span>
            </div>
          </div>

          <v-divider class="mx-4 mb-1" />

          <div class="d-flex align-center justify-space-between">
            <div>
              <v-card-subtitle>
                <del class="me-1">{{ item.oldPrice }}</del>
              </v-card-subtitle>
              <v-card-title>{{ item.price }}</v-card-title>
            </div>
            <div class="d-flex ga-3 pr-2">
              <v-btn :to="'/product/' + item.id" icon="mdi-fullscreen" variant="text"></v-btn>
              <v-btn :color="favourites.includes(String(item.id)) ? 'red' : 'black'" icon="mdi-heart" variant="tonal" @click="likeButton(item.id)"></v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

  </v-sheet>
</template>

<script setup>
import { useUserInfoStore } from '@/store/index.js'
import { useDisplay } from 'vuetify'
import { defineProps, reactive } from 'vue'

const store = useUserInfoStore()
const { mdAndUp } = useDisplay()

const props = defineProps({
  apartments: {
    type: Array,
    default: () => []
  }
})

const favourites = reactive(store.accauntStatus.favourites)

const likeButton = (id) => {
  if (favourites.includes(String(id))) {
    const index = favourites.indexOf(String(id))
    if (index > -1) {
      favourites.splice(index, 1)
    }
  } else {
    favourites.push(String(id))
  }
}
</script>
