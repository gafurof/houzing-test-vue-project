<template>
  <v-img :src="(propertie && propertie.images && propertie.images[0]) || defaultImg" class="my-bg" cover>
    <v-sheet class="overlay" tile></v-sheet>

    <v-row class="fill-height d-flex flex-column align-center justify-center">
      <p class="title-text">{{ propertie.title }}</p>
      <p class="address-text mt-1">{{ propertie.address }}</p>

      <div class="d-flex align-center ga-4 justify-space-between pa-3">

        <div class="d-flex flex-column align-center text-caption">
          <v-icon size="25">mdi-bed</v-icon>
          <span style="font-size: 140%;">4 beds</span>
        </div>

        <div class="d-flex flex-column align-center text-caption">
          <v-icon size="25">mdi-shower</v-icon>
          <span style="font-size: 140%;">5 baths</span>
        </div>

        <div class="d-flex flex-column align-center text-caption">
          <v-icon size="25">mdi-car</v-icon>
          <span style="font-size: 140%;">1 garage</span>
        </div>

        <div class="d-flex flex-column align-center text-caption">
          <v-icon size="25">mdi-ruler-square</v-icon>
          <span style="font-size: 140%;">1200 Sq Ft</span>
        </div>

      </div>

      <p class="custom-text mt-3" v-if="propertie.type === 'for sale'">${{ propertie.price }}/mo</p>
      <p class="custom-text mt-3" v-else>${{ propertie.price }}</p>

      <v-btn :to="`/product/${propertie.id}`" class="outline-btn mt-5" variant="outlined" size="large">
        Read More
      </v-btn>
    </v-row>
  </v-img>
</template>

<script setup>
import { ref } from 'vue'
import { usePropertyStore } from '@/stores/propertyStore'
import defaultImg from '@/assets/unsplash_2gDwlIim3Uw.png'

const store = usePropertyStore()
const propertie = ref(store.properties[0])

</script>

<style scoped>
.my-bg {
  position: relative;
  height: 571px;
}

@media (max-width: 600px) {
  .my-bg {
    height: 712px;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.fill-height {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
}

.outline-btn {
  width: 180px;
  height: 44px;
  border-radius: 2px;
}

.title-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  margin: 0;
}

.custom-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  margin: 0;
}

.icon-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  color: white;
}

.address-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  margin: 12px 0 0 0;
  color: white;
}

@media (max-width: 600px) {
  .title-text {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
  }

  .icon-text {
    font-size: 12px;
    line-height: 14px;
  }

  .address-text {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
