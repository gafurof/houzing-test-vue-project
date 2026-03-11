<template>
  <v-container>
  <h2 class="my-5">Add new propertie</h2>
    <v-row gap="25">
      <v-form ref="formRef">
      <v-col cols="12" sm="12">
        <v-card title="Conttact Information" rounded="0">
          <v-row gap="16" class="px-5">
            <v-col cols="12" sm="6">
              <v-text-field v-model="form.title" variant="underlined" class="mb-2" label="Property title" clearable :rules="[requiredRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select v-model="form.category" variant="underlined" :items="categoryItems"
                label="Category" required item-title="title" item-value="value"></v-select>
            </v-col>
            <v-col cols="12" sm="12">
              <v-textarea v-model="form.description" clearable label="Property Description" variant="underlined" :rules="[requiredRule]"></v-textarea>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12">
        <v-card title="Add Itional" rounded="0">
          <v-row gap="16" class="px-5">
            <v-col cols="12" sm="4">
              <v-text-field v-model="form.externalId" variant="underlined" label="Property ID" clearable :rules="[requiredRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select v-model="form.parentProperty" variant="underlined" :items="['seller', 'buyer']" label="Parent Property" required :rules="[requiredRule]"></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select v-model="form.status" variant="underlined"
                :items="statusItems" label="Status"
                required :rules="[requiredRule]"></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model="form.label" variant="underlined" label="Label" clearable :rules="[requiredRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model="form.material" variant="underlined" label="Material" clearable :rules="[requiredRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model.number="form.rooms" variant="underlined" label="Rooms" clearable :rules="[numericRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model.number="form.beds" variant="underlined" label="Beds" clearable :rules="[numericRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model.number="form.baths" variant="underlined" label="Baths" clearable :rules="[numericRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model.number="form.garages" variant="underlined" label="Garages" clearable :rules="[numericRuleAllowZero]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model.number="form.yearBuild" variant="underlined" label="Year build" clearable :rules="[requiredRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model.number="form.area" variant="underlined" label="Home area (sqm)" clearable :rules="[numericRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model="form.lotDimensions" variant="underlined" label="Lot dimensions" clearable :rules="[requiredRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model.number="form.lotArea" variant="underlined" label="Lot area (sqft)" clearable :rules="[numericRuleAllowZero]"></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12">
        <v-card title="Location" rounded="0">
          <v-row gap="16" class="px-5">
            <v-col cols="12" sm="6">
              <v-select v-model="form.city" variant="underlined"
                :items="['Tashkent', 'Samarkand', 'Namangan', 'Bukhara', 'Fergana']" label="City"
                required :rules="[requiredRule]"></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="form.address" variant="underlined" class="mb-2" label="Friendly address" clearable :rules="[requiredRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field v-model="form.mapLocation" variant="underlined" class="mb-2" label="Map location" clearable :rules="[requiredRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <TheMap :lat="form.lat" :lng="form.lng" :editable="true" @update:lat="(v) => form.lat = v" @update:lng="(v) => form.lng = v" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model.number="form.lat" variant="underlined" class="mb-2" label="Latitude" clearable :rules="[requiredRule]"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model.number="form.lng" variant="underlined" class="mb-2" label="Longitude" clearable :rules="[requiredRule]"></v-text-field>
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
          <v-btn :loading="loading" @click="onSubmit" v-if="!mobile" color="primary" size="large" class="px-15 my-3">
            Submit
          </v-btn>
          <v-btn :loading="loading" @click="onSubmit" v-else block color="primary" size="large" class="my-3">
            Submit
          </v-btn>
        </v-row>
      </v-col>
    </v-form>
    </v-row>

  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import TheMap from '@/components/map/TheMap.vue';

const { mobile } = useDisplay()
const router = useRouter()
const images = ref([])
const fileInput = ref(null)

const loading = ref(false)
const formRef = ref(null)

// validation rules
const requiredRule = (v) => {
  return (v !== null && v !== undefined && String(v).trim() !== '') || 'This field is required'
}
const numericRule = (v) => {
  if (v === null || v === undefined || v === '') return 'This field is required'
  return (!isNaN(Number(v)) && Number(v) > 0) || 'Must be a number greater than 0'
}
const numericRuleAllowZero = (v) => {
  if (v === null || v === undefined || v === '') return 'This field is required'
  return (!isNaN(Number(v)) && Number(v) >= 0) || 'Must be a number'
}

// form state
import { reactive } from 'vue'
import { usePropertyStore } from '@/stores/propertyStore'
import { categories } from '@/data/categories'

const store = usePropertyStore()

const form = reactive({
  title: '',
  category: 'apartment',
  description: '',
  externalId: '',
  parentProperty: '',
  status: 'For Sale',
  label: '',
  material: '',
  rooms: 1,
  beds: 1,
  baths: 1,
  garages: 0,
  yearBuild: null,
  area: 50,
  lotDimensions: '',
  lotArea: null,
  city: 'Tashkent',
  address: '',
  mapLocation: '',
  lat: 41.2995,
  lng: 69.2401,
  energyClass: '',
  energyIndex: null,
})

const categoryItems = categories.map(c => ({ title: c.value.charAt(0).toUpperCase() + c.value.slice(1), value: c.id }))
const statusItems = ['For Sale', 'For Rent', 'Sold', 'Rented', 'Pending', 'Under Contract']

const handleFiles = (files) => {
  for (const file of files) {
    const reader = new FileReader()
    reader.onload = (e) => {
      images.value.push(e.target.result)
    }
    reader.readAsDataURL(file)
  }
}

function buildPropertyObject() {
  // generate new id
  const maxId = store.properties.reduce((max, p) => Math.max(max, Number(p.id)), 0)
  const newId = maxId + 1

  const categoryObj = categories.find(c => c.id === form.category)

  const isRent = form.status && form.status.toLowerCase().includes('rent')

  const price = isRent ? 300 : 80000
  const oldPrice = isRent ? Math.round(price * 1.1) : Math.round(price * 1.05)

  const imgs = images.length ? images.slice() : [ (categoryObj && categoryObj.img) || 'https://via.placeholder.com/1200x800']

  return {
    id: newId,
    type: isRent ? 'for rent' : 'for sale',
    category: form.category,
    title: form.title && form.title.trim() !== '' ? form.title : `${categoryObj ? categoryObj.title : 'Property'} #${newId}`,
    dataPublished: new Date().toISOString().slice(0,10),
    address: form.address || form.mapLocation || `${form.city}`,
    city: form.city || 'Tashkent',
    country: 'Uzbekistan',
    lat: Number(form.lat) || 41.2995,
    lng: Number(form.lng) || 69.2401,
    description: form.description || 'No description provided.',
    oldPrice: String(oldPrice),
    price: String(price),
    images: imgs,
    rooms: Number(form.rooms) || 1,
    area: Number(form.area) || 50
  }
}

async function onSubmit() {
  // validate form (Vuetify v-form)
  if (formRef.value) {
    const valid = await formRef.value.validate()
    if (!valid) {
      // don't submit if invalid
      return
    }
  }

  loading.value = true
  const newProp = buildPropertyObject()
  // push to store
  store.properties.push(newProp)

  // small delay to simulate server
  setTimeout(() => {
    loading.value = false
    router.push('/properties')
  }, 800)
}
</script>
