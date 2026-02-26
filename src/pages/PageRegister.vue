<template>
  <v-sheet class="px-5" style="padding-top: 4%; padding-bottom: 7%">
    <v-card class="mx-auto px-6 py-8" max-width="580">
      <p class="mb-2"><strong>Registration</strong></p>
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field variant="underlined" v-model="login" :readonly="loading" :rules="[required]" class="mb-2" label="Login" clearable></v-text-field>
        <v-text-field variant="underlined" v-model="firstName" :readonly="loading" :rules="[required]" class="mb-2" label="First Name" clearable></v-text-field>
        <v-text-field variant="underlined" v-model="lastName" :readonly="loading" :rules="[required]" class="mb-2" label="Last Name" clearable></v-text-field>
        <v-text-field variant="underlined" v-model="email" :readonly="loading" :rules="[required]" class="mb-2" label="Email" clearable></v-text-field>
        <v-select variant="underlined" v-model="role" :items="['seller', 'buyer']" label="Role" required></v-select>
        <v-text-field variant="underlined" v-model="password" :readonly="loading" :rules="[required]" label="Password" placeholder="Enter your password" clearable></v-text-field>


        <router-link to="/sign-in">I have account</router-link>
        <v-btn class="mt-1" :disabled="!form" :loading="loading" color="primary" size="large" type="submit" variant="elevated" block>
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script setup>
import { ref } from 'vue'

const form = ref(false)
const email = ref(null)
const login = ref(null)
const firstName = ref(null)
const lastName = ref(null)
const role = ref(null)
const password = ref(null)
const loading = ref(false)

function onSubmit() {
  if (!form.value) return
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
function required(v) {
  return !!v || 'Field is required'
}


</script>
