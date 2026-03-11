<template>
  <v-container class="mb-15">
    <h2 class="text-center mt-13">Find Properties Near You</h2>
    <p class="text-center mb-2">Use our interactive map to browse all available properties and discover the best options
      in your immediate area.</p>
    <v-container>
      <v-sheet :height="mobile ? 400 : 600" rounded elevation="2" class="position-relative">
        <div ref="mapContainer" style="height: 100%; width: 100%;"></div>

        <v-btn icon="mdi-crosshairs-gps" size="small" color="primary" class="position-absolute"
          style="bottom: 12px; right: 12px; z-index: 1000;" @click="goToUserLocation" />
      </v-sheet>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { usePropertyStore } from '@/stores/propertyStore'

const { mobile } = useDisplay()
const mapContainer = ref(null)
let map = null
let userCoords = null
let markerLayer = null

const store = usePropertyStore()
const router = useRouter()
const properties = computed(() => store.properties || [])

function calcDistance(lat1, lon1, lat2, lon2) {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return (R * c).toFixed(2)
}

function addMarkers() {
  if (!map) return
  if (markerLayer) {
    markerLayer.clearLayers()
  } else {
    markerLayer = L.layerGroup().addTo(map)
  }

  const markers = []

    properties.value.forEach(p => {
    const lat = Number(p.lat)
    const lng = Number(p.lng)
    if (!lat || !lng) return
    const m = L.marker([lat, lng])
    const views = store.viewsInLastDays ? store.viewsInLastDays(p, 7) : (p.views ? p.views.length : 0)
    const price = p.price || ''
    const popupId = `open-${p.id}`
    const popupContent = `
      <div>
        <strong>🏠 ${p.title || 'Property'}</strong><br>
        Price: ${price}<br>
        Views (7d): ${views}<br>
        <button id="${popupId}" style="margin-top:8px;padding:6px 10px;cursor:pointer;">Open property</button>
      </div>`
    m.bindPopup(popupContent)
    // when popup opens attach click handler to the button inside the popup
    m.on('popupopen', () => {
      const btn = document.getElementById(popupId)
      if (btn) {
        btn.onclick = (ev) => {
          ev.preventDefault()
          if (p.id) router.push({ path: `/product/${p.id}` })
        }
      }
    })
    m.addTo(markerLayer)
    markers.push(m)
  })

  // If we have markers and user location, fit bounds
  if (markers.length) {
    const group = L.featureGroup(markers.concat(userCoords ? [L.circleMarker(userCoords)] : []))
    try {
      map.fitBounds(group.getBounds().pad(0.2))
    } catch (e) {
      // ignore if fitBounds fails
    }
  }
}

onMounted(() => {
  map = L.map(mapContainer.value).setView([41.224, 69.210], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map)

  addMarkers()

  // User location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      userCoords = [pos.coords.latitude, pos.coords.longitude]
      const userMarker = L.circleMarker(userCoords, {
        radius: 8,
        fillColor: 'red',
        color: 'white',
        weight: 2,
        fillOpacity: 0.9
      }).addTo(map)
      userMarker.bindPopup("📍 Your Location")

      // Recalculate bounds with new user marker
      addMarkers()
    }, err => console.error(err))
  }
})

watch(properties, () => {
  // update markers when properties change
  addMarkers()
}, { deep: true })

onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})

function goToUserLocation() {
  if (userCoords && map) {
    map.flyTo(userCoords, 17, { duration: 1.5 })
  }
}
</script>
