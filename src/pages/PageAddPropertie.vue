<template>
  <v-container>
    <h2 class="my-5">Add new propertie</h2>
    <v-row gap="25">
      <v-col cols="12" sm="12">
        <v-card title="Conttact Information" rounded="0">
          <v-row gap="16" class="px-5">
            <v-col cols="12" sm="6">
              <v-text-field variant="underlined" class="mb-2" label="Property title" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field variant="underlined" class="mb-2" label="Type" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-textarea clearable label="Property Description" variant="underlined"></v-textarea>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12">
        <v-card title="Add Itional" rounded="0">
          <v-row gap="16" class="px-5">
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Property ID" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select variant="underlined" :items="['seller', 'buyer']" label="Parent Property" required></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select variant="underlined" :items="['seller', 'buyer']" label="Status" required></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Label" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Material" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Rooms" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Beds" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Baths" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Garages" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Year build" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Home are (sqft)" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Lot dimensions" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field variant="underlined" label="Lot area (sqft)" clearable></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12">
        <v-card title="Location" rounded="0">
          <v-row gap="16" class="px-5">
            <v-col cols="12" sm="6">
              <v-select variant="underlined" :items="['seller', 'buyer']" label="Regions" required></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field variant="underlined" class="mb-2" label="Friendly adress" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field variant="underlined" class="mb-2" label="Map location" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <TheMap />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field variant="underlined" class="mb-2" label="Latidude" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field variant="underlined" class="mb-2" label="Logtitude" clearable></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12">
        <v-card title="Media" rounded="0">
          <v-row class="px-5">
            <v-card-text class="pa-3">Featured Images</v-card-text>
            <v-col cols="12">
              <v-btn color="primary" prepend-icon="mdi-upload" @click="fileInput.click()">
                Upload Images
              </v-btn>

              <input type="file" multiple accept="image/*" ref="fileInput" class="d-none"
                @change="handleFiles($event.target.files)" />
            </v-col>

            <v-col cols="12">
              <v-row>
                <v-col v-for="(img, index) in images" :key="index" cols="6" sm="4" md="3">
                  <v-img width="150" aspect-ratio="1" :src="img" cover rounded="lg" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="px-5">
            <v-card-text class="pa-3">Gallery</v-card-text>
            <v-col cols="12">
              <v-btn color="primary" prepend-icon="mdi-upload" @click="fileInput.click()">
                Upload Images
              </v-btn>

              <input type="file" multiple accept="image/*" ref="fileInput" class="d-none"
                @change="handleFiles($event.target.files)" />
            </v-col>

            <v-col cols="12">
              <v-row>
                <v-col v-for="(img, index) in images" :key="index" cols="6" sm="4" md="3">
                  <v-img width="150" aspect-ratio="1" :src="img" cover rounded="lg" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12">
        <v-card title="Amenities" rounded="0">
          <v-row class="px-5 pb-3">
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Air conditioning"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Lawn"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Dining Room"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Waterfront"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Barbeque"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Microwave"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Fireplace"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Parking"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Dryer"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Outdoor Shower"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Pets Allowed"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Doorman"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Gym"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Refrigerator"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Unit Washer/Dryer"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Central Heating"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Laundry"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Stunning views"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Onsite Parking"></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0">
              <v-checkbox hide-details color="primary" label="Cleaning Service"></v-checkbox>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12">
        <v-card title="Select Energy Class" rounded="0">
          <v-row gap="16" class="px-5">
            <v-col cols="12" sm="6">
              <v-text-field variant="underlined" class="mb-2" label="Energy class" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field variant="underlined" class="mb-2" label="Energy index in kWh/m2a" clearable></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12">
        <v-row class="px-3" justify="end">
          <v-btn v-if="!mobile" color="primary" size="large" class="px-15 my-3">
            Submit
          </v-btn>
          <v-btn v-else block color="primary" size="large" class="my-3">
            Submit
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import TheMap from '@/components/map/TheMap.vue';

const { mobile } = useDisplay()
const images = ref([])
const fileInput = ref(null)

const handleFiles = (files) => {
  for (const file of files) {
    const reader = new FileReader()
    reader.onload = (e) => {
      images.value.push(e.target.result)
    }
    reader.readAsDataURL(file)
  }
}
</script>
