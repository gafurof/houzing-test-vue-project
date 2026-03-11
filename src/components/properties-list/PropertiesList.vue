<template>
  <v-container v-if="loading" class="d-flex justify-center align-center">
    <v-progress-linear color="primary" style="width: 40%; margin: 50px 0px 100px 0px" indeterminate></v-progress-linear>
  </v-container>
  <v-expand-x-transition>
    <v-container v-show="!loading">
      <v-row class="d-flex flex-wrap" justify="start">
        <v-col v-for="propertie in properties" :key="propertie.title" cols="12" sm="6" md="4" class="d-flex">
          <v-card class="rounded-0 elevation-1" :style="{ width: mdAndUp ? '380px' : '343px' }"
            :class="{ 'ma-5': !mdAndUp }">
            <v-img height="250" :src="(propertie.images && propertie.images[0]) || defaultImg" cover class="position-relative">
              <div class="d-flex justify-space-between w-100 pa-3">
                <v-btn size="small" color="primary" variant="flat">FEATURED</v-btn>
                <v-btn size="small" color="#0D263B" variant="flat">{{ propertie.type }}</v-btn>
              </div>
            </v-img>

            <v-card-item>
              <v-card-title>{{ propertie.title }}</v-card-title>
              <v-card-subtitle>
                <span class="me-1">Local Favorite</span>
              </v-card-subtitle>
            </v-card-item>

            <div class="d-flex align-center justify-space-between pa-3">
              <div class="d-flex flex-column align-center text-caption">
                <v-icon size="18">mdi-bed</v-icon>
                <span>4 beds</span>
              </div>
              <div class="d-flex flex-column align-center text-caption">
                <v-icon size="18">mdi-shower</v-icon>
                <span>5 baths</span>
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
                  <del class="me-1" v-if="propertie.type === 'for rent'">${{ propertie.oldPrice }}/mo</del>
                  <del class="me-1" v-else>${{ propertie.oldPrice }}</del>
                </v-card-subtitle>
                <v-card-title v-if="propertie.type === 'for rent'">${{ propertie.price }}/mo</v-card-title>
                <v-card-title v-else>${{ propertie.price }}</v-card-title>
              </div>
              <div class="d-flex ga-3 pr-2">
                <v-btn :to="'/product/' + propertie.id" icon="mdi-fullscreen" variant="text"></v-btn>
                <v-btn :color="favourites.includes(String(propertie.id)) ? 'red' : 'black'" icon="mdi-heart"
                  variant="tonal" @click="likeButton(propertie.id)"></v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-expand-x-transition>

</template>

<script setup>
import { ref, reactive, defineProps } from 'vue'
import defaultImg from '@/assets/unsplash_2gDwlIim3Uw.png'
import { useUserInfoStore } from '@/stores/userInfoStore'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const store = useUserInfoStore()

const favourites = reactive(store.accountStatus.favourites)
const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000);

const props = defineProps({
  properties: {
    type: Array,
    default: () => []
  }
})

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
