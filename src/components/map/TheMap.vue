<template>
  <v-sheet :height="mobile ? 226 : 400" rounded elevation="2">
    <div ref="mapContainer" style="height: 100%; width: 100%;"></div>
  </v-sheet>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useUserInfoStore } from '@/store/index.js'

const store = useUserInfoStore()
const route = useRoute()
const { mobile } = useDisplay()

const product = computed(() =>
  store.properties.find(p => p.id === Number(route.params.id))
)

const mapContainer = ref(null)

onMounted(() => {
  const lat = product.value?.lat || 40.7128
  const lng = product.value?.lng || -74.0060

  const map = L.map(mapContainer.value).setView([lat, lng], 13)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map)

  // 🔥 MUHIM QISM
  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
  })

  // 🔥 Marker qo‘shildi
  L.marker([lat, lng]).addTo(map)
})
</script>
