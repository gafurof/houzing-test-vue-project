<template>
  <v-app>
    <v-main class="overflow-y-auto" >
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
html {
  overflow: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}

body {
  font-family: "Montserrat", sans-serif;
}
</style>
