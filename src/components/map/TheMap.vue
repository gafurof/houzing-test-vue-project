<template>
  <v-sheet :height="mobile ? 226 : 400" rounded elevation="2" class="position-relative">
    <div ref="mapContainer" style="height: 100%; width: 100%;"></div>

    <v-btn icon="mdi-crosshairs-gps" size="small" color="primary" class="position-absolute"
      style="bottom: 12px; right: 12px; z-index: 1000;" @click="goToUserLocation" />
  </v-sheet>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const mapContainer = ref(null)

let map = null
let userCoords = null
let routingControl = null

const propertyLocation = [41.224239, 69.210270]

onMounted(() => {
  map = L.map(mapContainer.value).setView(propertyLocation, 17)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map)

  const propertyMarker = L.marker(propertyLocation).addTo(map)
  propertyMarker.bindPopup("🏠 Property").openPopup()

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      userCoords = [pos.coords.latitude, pos.coords.longitude]

      const userMarker = L.circleMarker(userCoords, {
        radius: 10,
        fillColor: 'red',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(map)
      userMarker.bindPopup("📍 Your Location").openPopup()

      routingControl = L.Routing.control({
        waypoints: [
          L.latLng(userCoords[0], userCoords[1]),
          L.latLng(propertyLocation[0], propertyLocation[1])
        ],
        routeWhileDragging: false,
        draggableWaypoints: false,
        addWaypoints: false,
        show: false,
        lineOptions: { styles: [{ color: 'blue', weight: 5 }] },
        createMarker: () => null
      }).addTo(map)

      routingControl.on('routesfound', function (e) {
        const route = e.routes[0]
        const distanceKm = (route.summary.totalDistance / 1000).toFixed(2)
        const timeMin = Math.round(route.summary.totalTime / 60)

        propertyMarker.setPopupContent(`
          🏠 Property<br>
          Distance: ${distanceKm} km 🚗<br>
          Time: ${timeMin} min ⏱
        `).openPopup()
      })
    }, (err) => console.error("GPS error:", err))
  }
})

function goToUserLocation() {
  if (userCoords && map) {
    map.flyTo(userCoords, 17, { duration: 1.5 })
  }
}
</script>