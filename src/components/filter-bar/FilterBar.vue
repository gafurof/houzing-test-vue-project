<template>
  <v-container>
    <v-row class="align-center" :class="{ 'elevation-3 rounded-lg ma-1': !mdAndUp }">
      <v-col cols="12" md="8">
        <v-text-field v-model="address" variant="outlined" label="Enter an address, neighborhood, city, or ZIP code"
          hide-details density="comfortable" rounded="0" style="border-radius: 1px #E6E9EC">
          <template #prepend-inner>
            <v-icon color="primary">mdi-home</v-icon>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <AdvancedDialog />
      </v-col>

      <!-- <v-col cols="12" md="2">
        <v-btn @click="onSearch" block color="primary" size="large" prepend-icon="mdi-magnify" rounded="0">
          Search
        </v-btn>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'
import { useDisplay } from 'vuetify'
import AdvancedDialog from './AdvancedDialog.vue';
import { useRouter } from 'vue-router'

const { mdAndUp } = useDisplay()
const address = ref('')



const emit = defineEmits(['updateAddress'])

watch(address, (newVal) => {
  if (newVal && newVal.trim() !== '') {
    emit('updateAddress', newVal)
  } else {
    emit('updateAddress', false)
  }
})

const router = useRouter()

function onSearch() {
  const q = {}
  if (address.value && address.value.trim() !== '') q.address = address.value.trim()
  // navigate to properties with address query (AdvancedDialog also navigates when used)
  router.push({ path: '/properties', query: q })
}
</script>
