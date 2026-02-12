<template>
  <v-sheet class="mx-auto mb-12 mt-2" width="94%">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="testimonial in testimonials" :key="testimonial.userName">
        <v-card class="ma-4 d-flex flex-column align-center pa-5" :width="cardWidth" :height="cardHeight">
          <v-card-title>{{ testimonial.userName }}</v-card-title>
          <p style="color: #696969; font-size: 16px; text-align: center">{{ testimonial.testimonalText }}</p>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const cardWidth = computed(() => (mdAndUp.value ? 380 : 280))
const cardHeight = computed(() => (mdAndUp.value ? 197 : 197))

const testimonials = reactive([
  {
    userName: 'John',
    testimonalText: `“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “ `
  },
  {
    userName: 'John',
    testimonalText: `“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “`
  },
  {
    userName: 'John',
    testimonalText: `“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “`
  },
  {
    userName: 'John',
    testimonalText: `“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “`
  },
  {
    userName: 'John',
    testimonalText: `“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “`
  },
])
</script>
