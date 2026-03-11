<template>
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
</script>
