import { defineStore } from "pinia"
import { properties } from "@/data/properties"

export const usePropertyStore = defineStore("property", {

  state: () => ({
    properties: properties
  })

})