import { defineStore } from "pinia"
import { properties } from "@/data/properties"

export const usePropertyStore = defineStore("property", {

  state: () => ({
    properties: properties,
    remoteSync: true
  }),

  actions: {
    incrementView(id) {
      const p = this.properties.find(x => Number(x.id) === Number(id))
      if (!p) return
      if (!p.views) p.views = []
      p.views.push(new Date().toISOString())
    }
    ,
    getViewsInLastDays(prop, days = 7) {
      if (!prop) return 0
      if (!prop.views || !Array.isArray(prop.views)) return 0
      const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
      return prop.views.reduce((count, ts) => {
        const t = Date.parse(ts)
        return (isNaN(t) ? count : (t >= cutoff ? count + 1 : count))
      }, 0)
    },
    async loadProperties() {
      if (!this.remoteSync) return
      const url = 'https://houzing-demo-default-rtdb.firebaseio.com/properties.json'
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`Failed to fetch properties: ${res.status}`)
        const data = await res.json()
        if (!data) return
        this.properties = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }))
      } catch (e) {
        console.error('loadProperties error', e)
      }
    },
    async saveProperty(prop) {
      try {
        prop.rooms = Number(prop.rooms || 0)
        prop.beds = Number(prop.beds || 0)
        prop.baths = Number(prop.baths || 0)
        prop.garage = Number(prop.garage || 0)
        prop.area = Number(prop.area || 0)

        this.properties.push(prop)
      } catch (e) {
        console.error('local push error', e)
      }

      if (!this.remoteSync) return prop

      try {
        const resp = await fetch('https://houzing-demo-default-rtdb.firebaseio.com/properties.json', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(prop)
        })

        if (!resp.ok) throw new Error(resp.status)

        return await resp.json()
      } catch (e) {
        console.error('remote error', e)
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
    },
    getById: (state) => {
      return (id) => state.properties.find(p => String(p.id) === String(id))
    }
  }

})
