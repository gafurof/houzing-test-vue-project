import { defineStore } from "pinia"
import { properties } from "@/data/properties"

export const usePropertyStore = defineStore("property", {

  state: () => ({
    properties: properties,
    // toggle remote sync (disabled by default). Set true to enable Firebase sync/load.
    remoteSync: false
  }),

  actions: {
    incrementView(id) {
      const p = this.properties.find(x => Number(x.id) === Number(id))
      if (!p) return
      if (!p.views) p.views = []
      p.views.push(new Date().toISOString())
    }
    ,
    // reliable method to count views in the last `days` for a property
    getViewsInLastDays(prop, days = 7) {
      if (!prop) return 0
      if (!prop.views || !Array.isArray(prop.views)) return 0
      const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
      return prop.views.reduce((count, ts) => {
        const t = Date.parse(ts)
        return (isNaN(t) ? count : (t >= cutoff ? count + 1 : count))
      }, 0)
    }
    ,
    // load properties from remote Firebase Realtime Database
    async loadProperties() {
      // Only load from remote when remoteSync is enabled.
      if (!this.remoteSync) return
      const url = 'https://houzing-demo-default-rtdb.firebaseio.com/properties.json'
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`Failed to fetch properties: ${res.status}`)
        const data = await res.json()
        if (!data) return
        // data is an object keyed by firebase generated ids
        const arr = Object.keys(data).map(k => {
          const item = data[k]
          // ensure numeric conversions and defaults
          item.remoteId = k
          item.id = item.id || null
          item.rooms = Number(item.rooms || item.beds || 0)
          item.beds = Number(item.beds ?? item.rooms ?? 0)
          item.baths = Number(item.baths ?? 0)
          item.garage = Number(item.garage ?? 0)
          item.area = Number(item.area || 0)
          item.areaSqft = item.areaSqft || (item.area ? `${Math.round(item.area * 10.7639)} sq ft` : '0 sq ft')
          return item
        })
        this.properties = arr
      } catch (e) {
        console.error('loadProperties error', e)
      }
    },
    // save a property to remote DB and push locally
    async saveProperty(prop) {
      // Always persist locally first
      try {
        prop.rooms = Number(prop.rooms || prop.beds || 0)
        prop.beds = Number(prop.beds ?? prop.rooms ?? 0)
        prop.baths = Number(prop.baths ?? 0)
        prop.garage = Number(prop.garage ?? 0)
        prop.area = Number(prop.area || 0)
        prop.areaSqft = prop.areaSqft || (prop.area ? `${Math.round(prop.area * 10.7639)} sq ft` : '0 sq ft')
        this.properties.push(prop)
      } catch (e) {
        console.error('saveProperty local push failed', e)
      }

      // Only attempt remote save when remoteSync is enabled
      if (!this.remoteSync) return prop

      const url = 'https://houzing-demo-default-rtdb.firebaseio.com/properties.json'
      try {
        const resp = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(prop)
        })
        if (!resp.ok) throw new Error(`Save failed: ${resp.status}`)
        const data = await resp.json()
        if (data && data.name) prop.remoteId = data.name
        return prop
      } catch (e) {
        console.error('saveProperty remote error', e)
        return prop
      }
    }
  },

  getters: {
    viewsInLastDays: (state) => {
      return (prop, days = 7) => {
        if (!prop) return 0
        if (!prop.views || !Array.isArray(prop.views)) return 0
        const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
        return prop.views.reduce((count, ts) => {
          const t = Date.parse(ts)
          return (isNaN(t) ? count : (t >= cutoff ? count + 1 : count))
        }, 0)
      }
    }
  }

})
