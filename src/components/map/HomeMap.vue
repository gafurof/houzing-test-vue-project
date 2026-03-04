<template>
  <v-container class="mb-15">
    <h2 class="text-center mt-13">Find Properties Near You</h2>
    <p class="text-center mb-7">Use our interactive map to browse all available properties and discover the best options in your immediate area.</p>
    <v-sheet :height="mobile ? 400 : 600" rounded elevation="2" class="position-relative">
      <div ref="mapContainer" style="height: 100%; width: 100%;"></div>

      <v-btn icon="mdi-crosshairs-gps" size="small" color="primary" class="position-absolute"
        style="bottom: 12px; right: 12px; z-index: 1000;" @click="goToUserLocation" />
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const mapContainer = ref(null)
let map = null
let userCoords = null

// Expanded list of properties
const properties = [
  { id: 1, name: "Villa 1", coords: [41.2250, 69.2100], price: "150,000$" },
  { id: 2, name: "Apartment 2", coords: [41.2245, 69.2120], price: "90,000$" },
  { id: 3, name: "House 3", coords: [41.2235, 69.2110], price: "120,000$" },
  { id: 4, name: "Villa 4", coords: [41.2228, 69.2130], price: "200,000$" },
  { id: 5, name: "Apartment 5", coords: [41.2260, 69.2090], price: "85,000$" },
  { id: 6, name: "House 6", coords: [41.2270, 69.2115], price: "130,000$" },
  { id: 7, name: "Villa 7", coords: [41.2255, 69.2085], price: "180,000$" },
  { id: 8, name: "Apartment 8", coords: [41.2230, 69.2140], price: "95,000$" },
  { id: 9, name: "House 9", coords: [41.2240, 69.2150], price: "110,000$" },
  { id: 10, name: "Villa 10", coords: [41.2265, 69.2125], price: "175,000$" }
]

// Helper function: distance in km
function calcDistance(lat1, lon1, lat2, lon2) {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return (R * c).toFixed(2)
}

onMounted(() => {
  map = L.map(mapContainer.value).setView([41.224, 69.210], 16)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map)

  // All properties
  const markers = properties.map(p => {
    const m = L.marker(p.coords).addTo(map)
    m.bindPopup(`🏠 ${p.name}<br>Price: ${p.price}`)
    return m
  })

  // User location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      userCoords = [pos.coords.latitude, pos.coords.longitude]
      const userMarker = L.circleMarker(userCoords, {
        radius: 10,
        fillColor: 'red',
        color: 'white',
        weight: 2,
        fillOpacity: 0.9
      }).addTo(map)
      userMarker.bindPopup("📍 Your Location").openPopup()

      // Adjust map to show user + all properties
      const group = L.featureGroup([...markers, userMarker])
      map.fitBounds(group.getBounds().pad(0.2))
    }, err => console.error(err))
  }
})

function goToUserLocation() {
  if (userCoords && map) {
    map.flyTo(userCoords, 17, { duration: 1.5 })
  }
}
</script>