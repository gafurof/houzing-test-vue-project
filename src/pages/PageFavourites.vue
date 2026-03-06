<template>
  <v-container>
    <h2 class="text-center mt-5">Favourites</h2>
    <p class="text-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>

    <p class="mt-5" style="font-size: 14px;" @click="console">{{ properties.length }} results</p>
  </v-container>
  <PropertiesList :properties="properties" />
</template>

<script setup>
import { computed } from 'vue'
import { useUserInfoStore } from '@/stores/userInfoStore'
import { usePropertyStore } from '@/stores/propertyStore'
import PropertiesList from '@/components/properties-list/PropertiesList.vue'

const storeUserInfo = useUserInfoStore()
const storeProperties = usePropertyStore()

const properties = computed(() => {
  console.log(storeProperties.properties)
  return storeProperties.properties.filter(property =>
    storeUserInfo.accountStatus.favourites.includes(String(property.id))
  )
})
</script>
