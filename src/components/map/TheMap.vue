<!-- <template>
  <v-sheet :height="mobile ? 226 : 400" rounded elevation="2" class="position-relative">
    <div ref="mapContainer" style="height: 100%; width: 100%;"></div>

    <v-btn icon="mdi-crosshairs-gps" size="small" color="primary" class="position-absolute"
      style="bottom: 12px; right: 12px; z-index: 1000;" @click="goToUserLocation" />
  </v-sheet>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps({
  lat: { type: Number, default: 41.224239 },
  lng: { type: Number, default: 69.210270 },
  editable: { type: Boolean, default: false }
})

const emit = defineEmits(['update:lat', 'update:lng', 'select'])

const { mobile } = useDisplay()
const mapContainer = ref(null)

let map = null
let userCoords = null
let routingControl = null
let propertyMarker = null

function createMarkerAt(lat, lng) {
  if (propertyMarker) {
    propertyMarker.setLatLng([lat, lng])
  } else {
    propertyMarker = L.marker([lat, lng], { draggable: !!props.editable }).addTo(map)
    propertyMarker.bindPopup("🏠 Property").openPopup()

    if (props.editable) {
      propertyMarker.on('dragend', (e) => {
        const p = e.target.getLatLng()
        emit('update:lat', p.lat)
        emit('update:lng', p.lng)
        emit('select', { lat: p.lat, lng: p.lng })
      })
    }
  }
}

onMounted(() => {
  const initial = [props.lat, props.lng]
  map = L.map(mapContainer.value).setView(initial, 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map)

  createMarkerAt(initial[0], initial[1])

  map.on('click', (e) => {
    if (!props.editable) return
    const { lat, lng } = e.latlng
    createMarkerAt(lat, lng)
    emit('update:lat', lat)
    emit('update:lng', lng)
    emit('select', { lat, lng })
  })

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
      userMarker.bindPopup("📍 Your Location")
    }, (err) => console.error("GPS error:", err))
  }
})

onBeforeUnmount(() => {
  if (map) map.remove()
})

watch(() => [props.lat, props.lng], ([lat, lng]) => {
  if (!map) return
  createMarkerAt(lat, lng)
  map.setView([lat, lng], map.getZoom())
})

function goToUserLocation() {
  if (userCoords && map) {
    map.flyTo(userCoords, 13, { duration: 1.5 })
  }
}
</script> -->


<template>
  <v-sheet :height="mobile ? 300 : 450" rounded elevation="2" class="position-relative">
    <div ref="mapContainer" style="height: 100%; width: 100%;"></div>

    <!-- GPS tugmasi -->
    <v-btn icon="mdi-crosshairs-gps" size="small" color="primary" class="position-absolute"
      style="bottom: 12px; right: 12px; z-index: 1000;" @click="goToUserLocation" />
  </v-sheet>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useDisplay } from 'vuetify'
// Leaflet Routing Machine import qilinishi shart (CSS bilan birga)
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

const props = defineProps({
  lat: { type: Number, default: 41.224239 }, // Mahsulot lat
  lng: { type: Number, default: 69.210270 }, // Mahsulot lng
  editable: { type: Boolean, default: false }
})

const emit = defineEmits(['update:lat', 'update:lng', 'select'])
const { mobile } = useDisplay()
const mapContainer = ref(null)

let map = null
let routingControl = null
let userCoords = null
let propertyMarker = null

// Marshrutni (yo'lni) chizish funksiyasi
function calculateRoute(userLat, userLng) {
  if (!map) return

  // Agar eski yo'nalish bo'lsa, uni o'chiramiz
  if (routingControl) {
    map.removeControl(routingControl)
  }

  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(userLat, userLng),
      L.latLng(props.lat, props.lng)
    ],
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    show: false,
    lineOptions: {
      styles: [{ color: '#2196F3', weight: 6 }]
    }
  }).addTo(map)
}

onMounted(() => {
  map = L.map(mapContainer.value).setView([props.lat, props.lng], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

  // propertyMarker = L.marker([props.lat, props.lng]).addTo(map).bindPopup("📦 Mahsulot")

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      userCoords = [pos.coords.latitude, pos.coords.longitude]

      // L.circleMarker(userCoords, { radius: 8, color: 'blue', fillColor: '#3186cc', fillOpacity: 1 }).addTo(map).bindPopup("Siz shu yerdasiz")

      calculateRoute(userCoords[0], userCoords[1])
    })
  }
})

function goToUserLocation() {
  if (userCoords && map) {
    map.flyTo(userCoords, 14)
  }
}

onBeforeUnmount(() => {
  if (map) map.remove()
})
</script>

<!-- <style>
.leaflet-routing-container {
  display: none !important;
}
</style> -->