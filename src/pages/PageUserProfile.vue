<template>
  <v-container :style="{ height: store.accauntStatus.role === 'buyer' ? '90vh' : '' }">

    <v-row class="py-1" >
      <v-col cols="6">
        <div class="text-h5 font-weight-bold">
          {{ fullName }}
        </div>
        <div class="text-body-2 text-medium-emphasis">
          Personal Cabinet
        </div>
      </v-col>
      <v-col cols="6" class="d-flex justify-end">
        <v-btn prepend-icon="mdi-logout" variant="outlined">
          Log Out
        </v-btn>
      </v-col>
      <EditProfileModal class="mb-4"/>
    </v-row>

    <v-divider></v-divider>

    <v-row class="mb-4 mt-4" v-if="store.accauntStatus.role === 'seller'">
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
      <v-col cols="12" v-if="store.accauntStatus.role == 'seller'">
        <v-sheet>
          <v-chart :option="chartOptions" style="height: 350px; width: 100%;" autoresize />
        </v-sheet>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useUserInfoStore } from '@/store/index.js'
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
  return `${store.accauntStatus.firstName} ${store.accauntStatus.lastName}`
})

use([
  LineChart,
  GridComponent,
  TooltipComponent,
  CanvasRenderer
])

const soldPrices = store.accauntStatus.soldPrices

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
