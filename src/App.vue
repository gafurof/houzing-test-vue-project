<template>
  <v-app>
    <v-main>
      <TheNav />
      <router-view></router-view>
      <TheFooter />
    </v-main>
  </v-app>
</template>

<script setup>
import TheNav from './layouts/TheNav.vue'
import TheFooter from '@/layouts/TheFooter.vue';
</script>

<style>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

body {
  font-family: "Montserrat", sans-serif;
}
</style>
