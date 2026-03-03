<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="text-none font-weight-regular" prepend-icon="mdi-pencil" text="Edit Profile" variant="outlined" v-bind="activatorProps"></v-btn>
      </template>

      <v-card prepend-icon="mdi-account" title="User Profile">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="6" sm="6">
              <v-text-field label="First name" v-model="firstName" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6" sm="6">
              <v-text-field label="Last name" v-model="lastName"  required></v-text-field>
            </v-col>

            <!-- <v-col cols="12" md="4" sm="6">
              <v-text-field label="Email" required></v-text-field>
            </v-col> -->

            <v-col cols="12" sm="6">
              <v-select :items="['seller', 'buyer']" v-model="userRole" label="Role" required></v-select>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn color="primary" text="Save" variant="tonal" @click="saveButton()" ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useUserInfoStore } from '@/store/index.js'

const dialog = ref(false)
const store = useUserInfoStore()

const userRole = ref(store.accauntStatus.role)
const firstName = ref(store.accauntStatus.firstName)
const lastName = ref(store.accauntStatus.lastName)

const saveButton = () => {
  store.changeStatus(userRole.value, firstName.value, lastName.value)
  dialog.value = false
}
</script>
