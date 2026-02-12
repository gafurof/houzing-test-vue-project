<template>
  <v-footer class="py-4 d-flex flex-column" color="darkBlue">
    <v-container>
      <v-row dense>
        <v-col cols="12" sm="6" md="3" class="d-flex flex-column ga-4 pa-2 mt-2 mb-2 bg-darkBlue">
          <strong>Contact Us</strong>
          <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
          <p>123 456 7890</p>
          <p>support@houzing.com</p>
          <div class="d-flex ga-3 mt-2">
            <v-btn v-for="icon in icons" :key="icon" :icon="icon" density="comfortable" variant="text"></v-btn>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="d-flex flex-column ga-4 pa- mt-2 mb-2 bg-darkBlue">
          <strong>Discover</strong>
          <p>Chicago</p>
          <p>Los Angeles</p>
          <p>Miami</p>
          <p>New York</p>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="d-flex flex-column ga-4 pa-2 mt-2 mb-2 bg-darkBlue">
          <strong>Lists By Category</strong>
          <p>Apartments</p>
          <p>Condos</p>
          <p>Houses</p>
          <p>Offices</p>
          <p>Retail</p>
          <p>Villas</p>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="d-flex flex-column ga-4 pa-2 mt-2 mb-2 bg-darkBlue">
          <strong>Company</strong>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Support Center</p>
          <p>Contact Us</p>
        </v-col>
      </v-row>
    </v-container>

    <v-divider thickness="1" width="100%"></v-divider>

    <v-container>
      <v-row class="pt-2 d-flex w-100 justify-space-between align-center">
        <img src="@/assets/navLogo.png" alt="Housing" height="40">

        &copy; {{ new Date().getFullYear() }}
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]
</script>
