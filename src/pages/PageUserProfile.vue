<template>
  <v-card rounded="0">
    <v-layout>
      <v-navigation-drawer color="darkBlue" expand-on-hover permanent rail>
        <v-list density="compact" nav>
          <v-list-item @click="drawer = 'myprofile'" prepend-icon="mdi-account" title="My Profile" value="myprofile"></v-list-item>
          <v-list-item @click="drawer = 'shared'" prepend-icon="mdi-my-cool-component" title="Shared with me" value="shared"></v-list-item>
          <v-list-item @click="drawer = 'favourites'" prepend-icon="mdi-heart" title="Favourites" value="favourites"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 90vh">
        <v-container class="pt-10">
          <EditProfileModal class="mt-16" v-if="drawer === 'myprofile'"/>
          <div v-else-if="drawer === 'shared'">
            <v-row class="mb-4 mt-4" v-if="store.accountStatus.role === 'seller'">
              <v-col cols="12">
                <div class="text-h6 font-weight-bold">
                  Total Earned
                </div>
                <div class="text-h4 font-weight-bold text-primary">
                  $ {{ totalEarned }}
                </div>
                <v-btn hide-details class="mt-4" size="large" color="darkBlue" variant="flat">
                  sold properties
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" v-if="store.accountStatus.role === 'seller'">
                <v-sheet>
                  <v-chart :option="chartOptions" style="height: 350px; width: 100%;" autoresize />
                </v-sheet>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useUserInfoStore } from '@/stores/userInfoStore'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import EditProfileModal from '@/components/edit-profile/EditProfileModal.vue'

const store = useUserInfoStore()

const fullName = computed(() => {
  return `${store.accountStatus.firstName} ${store.accountStatus.lastName}`
})

const drawer = ref('myprofile')

use([
  LineChart,
  GridComponent,
  TooltipComponent,
  CanvasRenderer
])

const soldPrices = store.accountStatus.soldPrices

const totalEarned = computed(() =>
  soldPrices.reduce((a, b) => a + b, 0)
)

const chartOptions = computed(() => ({
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['Sale 1', 'Sale 2', 'Sale 3', 'Sale 4', 'Sale 5', 'Sale 6',]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: soldPrices,
      type: 'line',
      smooth: true
    }
  ]
}))
</script>
