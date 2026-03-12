import { defineStore } from "pinia"
import { properties } from "@/data/properties"

export const usePropertyStore = defineStore("property", {

  state: () => ({
    properties: properties
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
