<template>
  <v-app>
    <v-main class="overflow-y-auto">
      <TheNav />
      <v-expand-transition>
        <div :key="$route.fullPath">
          <router-view />
        </div>
      </v-expand-transition>

      <TheFooter />
    </v-main>
  </v-app>
</template>

<script setup>
import TheNav from '@/layouts/TheNav.vue'
import TheFooter from '@/layouts/TheFooter.vue'
</script>

<style>
html {
  overflow: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

body {
  font-family: "Montserrat", sans-serif;
}
</style>
