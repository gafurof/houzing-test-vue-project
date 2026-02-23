<template>
  <v-container>
    <ImagesProductView />
    <v-row class="pa-0">
      <v-col :cols="$vuetify.display.mdAndUp ? '8' : '12'" class="pa-0">
        <v-sheet class="pa-2 ma-2 d-flex justify-space-between align-center">
          <div>
            <h2>{{ product.title }}</h2>
            <p>Quincy St, Brooklyn, NY, USA</p>
          </div>
          <div>
            <v-btn icon="mdi-heart" variant="tonal"></v-btn>
          </div>
        </v-sheet>
        <v-divider></v-divider>
        <v-row no-gutters>
          <v-col cols="12">
            <v-sheet class="pa-2 ma-2">
              <v-row align="center">

                <v-col cols="12" md="8" class="d-flex flex-wrap align-center ga-5">
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
                </v-col>

                <v-col cols="12" md="4" class="text-md-end">
                  <p class="text-decoration-line-through mb-1">
                    ${{ product.oldPrice }}
                  </p>
                  <h2>${{ product.price }}</h2>
                </v-col>

              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters>
          <v-col cols="12">
            <v-sheet class="pa-2 ma-2">
              <div>
                <h3>Description</h3>

                <p class="mb-5 mt-4">
                  {{ isExpanded ? product.description : shortText }}
                </p>

                <span v-if="product.description.length > 200" @click="isExpanded = !isExpanded"
                  style="color: #1976D2; cursor: pointer;">
                  {{ isExpanded ? 'Show less' : 'Show more' }}
                </span>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters>
          <v-col cols="12">
            <v-sheet class="pa-4 ma-2">
              <TheMap />
            </v-sheet>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters>
          <v-col cols="12">
            <v-sheet class="pa-4 ma-2">
              <h3>Property Details</h3>
              <v-row class="text-body-2 mt-2">
                <v-col cols="12" md="4">
                  <strong>Property ID:</strong> {{ product.id }}
                </v-col>
                <v-col cols="12" md="4">
                  <strong>Badrooms:</strong> 8
                </v-col>
                <v-col cols="12" md="4">
                  <strong>Property Type:</strong> Apartment
                </v-col>
                <v-col cols="12" md="4">
                  <strong>Price:</strong> {{ product.price }}
                </v-col>
                <v-col cols="12" md="4">
                  <strong>Bathrooms:</strong> 6
                </v-col>
                <v-col cols="12" md="4">
                  <strong>Property Status:</strong> For sale
                </v-col>
                <v-col cols="12" md="4">
                  <strong>Property Size:</strong> 1.560 Sp Ft
                </v-col>
                <v-col cols="12" md="6">
                  <strong>Garage:</strong> 4
                </v-col>
                <v-col cols="12" md="4">
                  <strong>Year Build:</strong> 01.06.2008
                </v-col>
                <v-col cols="12" md="4">
                  <strong>Garage Size:</strong> 200 Sq Ft
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters>
          <v-col cols="12">
            <v-sheet class="pa-4 ma-2">
              <h3>Features</h3>
              <v-row class="text-body-2 mt-2">
                <v-col cols="12" md="4">
                  Air Condetioning
                </v-col>
                <v-col cols="12" md="4">
                  Lawn
                </v-col>
                <v-col cols="12" md="4">
                  Refrigerator
                </v-col>
                <v-col cols="12" md="4">
                  Washer
                </v-col>
                <v-col cols="12" md="4">
                  Barbeque
                </v-col>
                <v-col cols="12" md="4">
                  Laundry
                </v-col>
                <v-col cols="12" md="4">
                  Sauna
                </v-col>
                <v-col cols="12" md="4">
                  Wifi
                </v-col>
                <v-col cols="12" md="4">
                  Dryer
                </v-col>
                <v-col cols="12" md="4">
                  Microwave
                </v-col>
                <v-col cols="12" md="4">
                  Swimming Pool
                </v-col>
                <v-col cols="12" md="4">
                  Window Coverings
                </v-col>
                <v-col cols="12" md="4">
                  Gym
                </v-col>
                <v-col cols="12" md="4">
                  Outdoor Shower
                </v-col>
                <v-col cols="12" md="4">
                  TV Cable
                </v-col>
                <v-col cols="12" md="4">
                  Dining Room
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
        <v-divider v-if="!$vuetify.display.mdAndUp" ></v-divider>
        <v-row v-if="!$vuetify.display.mdAndUp" no-gutters>
          <v-col cols="12">
            <v-sheet class="pa-4 ma-2">
              <div class="d-flex justify-center">
                <v-card rounded="0" elevation="0">
                  <h3>Bilol</h3>
                  <v-text-field label="User Name" variant="underlined" hide-details class="mb-4" />

                  <v-text-field label="Phone" variant="underlined" hide-details class="mb-4" />

                  <v-text-field label="Email" variant="underlined" hide-details class="mb-4" />

                  <v-textarea label="Message" variant="underlined" rows="3" hide-details class="mb-4" />

                  <v-checkbox color="primary" label="By submitting this form I agree to Terms of Use" class="mb-4"
                    hide-details />

                  <v-btn color="primary" block size="large" @click="submit">
                    Send
                  </v-btn>

                </v-card>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4" v-if="$vuetify.display.mdAndUp">
        <v-sheet class="pa-2 ma-2">
          <div class="d-flex justify-center">
            <v-card width="500" class="pa-6">
              <h3>Bilol</h3>
              <v-text-field label="User Name" variant="underlined" hide-details class="mb-4" />

              <v-text-field label="Phone" variant="underlined" hide-details class="mb-4" />

              <v-text-field label="Email" variant="underlined" hide-details class="mb-4" />

              <v-textarea label="Message" variant="underlined" rows="3" hide-details class="mb-4" />

              <v-checkbox color="primary" label="By submitting this form I agree to Terms of Use" class="mb-4"
                hide-details />

              <v-btn color="primary" block size="large" @click="submit">
                Send
              </v-btn>

            </v-card>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>



<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserInfoStore } from '@/store/index.js'
import ImagesProductView from '../components/productview/ImagesProductView.vue'
import TheMap from '../components/map/TheMap.vue'

const store = useUserInfoStore()
const route = useRoute()

const product = computed(() =>
  store.properties.find(p => p.id === Number(route.params.id))
)

const isExpanded = ref(false)

const shortText = computed(() => {
  if (!product.value?.description) return ''
  return product.value.description.slice(0, 200) + '...'
})
</script>
