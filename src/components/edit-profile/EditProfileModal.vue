<template>
  <v-card class="mx-auto" max-width="900">
    <v-card-actions>
        <v-col class="d-flex" cols="12" md="12" sm="6">
          <v-avatar image="https://randomuser.me/api/portraits/women/85.jpg" size="x-large"></v-avatar>
          <v-card-title>{{ `${store.accountStatus.firstName} ${store.accountStatus.lastName}` }}</v-card-title>
        </v-col>
        <v-divider></v-divider>
    </v-card-actions>
    <v-card-text>
      <v-row dense>
        <v-col cols="12" md="6" sm="6">
          <v-text-field label="First name" v-model="firstName" required></v-text-field>
        </v-col>

        <v-col cols="12" md="6" sm="6">
          <v-text-field label="Last name" v-model="lastName" required></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-select :items="['seller', 'buyer']" v-model="userRole" label="Role" required></v-select>
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="primary" text="Save" variant="tonal" @click="saveButton()"></v-btn>
    </v-card-actions>
  </v-card>
  <v-btn @click="apiGet">apiGet</v-btn>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useUserInfoStore } from "@/stores/userInfoStore"

const dialog = ref(false)
const store = useUserInfoStore()

const userRole = ref(store.accountStatus.role)
const firstName = ref(store.accountStatus.firstName)
const lastName = ref(store.accountStatus.lastName)

const saveButton = () => {
  store.changeStatus(userRole.value, firstName.value, lastName.value)
  dialog.value = false
}
</script>
