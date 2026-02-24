<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="text-none font-weight-regular" prepend-icon="mdi-pencil" text="Edit Profile" variant="outlined" v-bind="activatorProps"></v-btn>
      </template>

      <v-card prepend-icon="mdi-account" title="User Profile">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field label="First name" required></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Last name" persistent-hint required></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Email" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select :items="['seller', 'buyer']" label="Role" required></v-select>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn color="primary" text="Save" variant="tonal" @click="dialog = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { shallowRef } from 'vue'

const dialog = shallowRef(false)
</script>