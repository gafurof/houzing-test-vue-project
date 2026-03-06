<template>
  <div class="text-center  d-md-none">
    <v-dialog v-model="drawer" transition="dialog-bottom-transition" fullscreen>
      <v-card>
        <v-btn class="ma-2" icon="mdi-close" variant="text" @click="drawer = false"></v-btn>
        <div style="" class="d-flex flex-column w-100 align-center justify-center h-100">
          <v-list>
            <v-list-item class="text-center pa-6" title="Home" @click="drawer = false" to="/"></v-list-item>
            <v-list-item class="text-center pa-6" title="Properties" @click="drawer = false" to="/properties"></v-list-item>
            <v-list-item class="text-center pa-6" title="Contacts" @click="drawer = false" href="#contacts" ></v-list-item>
          </v-list>
          <v-list class="d-flex mt-15">
            <v-tooltip v-for="social in socials" :key="social.name" :text="social.name" location="top">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" :href="social.link" target="_blank" class="text-center pa-6">
                  <v-icon :icon="social.icon" size="large"></v-icon>
                </v-list-item>
              </template>
            </v-tooltip>
          </v-list>
        </div>
      </v-card>
    </v-dialog>
  </div>

  <v-app-bar color="darkBlue" elevation="1">
    <v-container class="d-flex align-center">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer class="d-md-none"></v-spacer>

      <v-img src="@/assets/navLogo.png" class="d-md-none" style="height: 44px; width: 150px; margin-left: 12%; cursor: pointer;"
        alt="Logo" @click="router.push('/')" contain></v-img>

      <v-img src="@/assets/navLogo.png" class="d-none d-md-flex" style="cursor: pointer;" alt="Logo" max-height="36" max-width="120"
        contain @click="router.push('/')" ></v-img>

      <v-spacer></v-spacer>

      <div class="d-none d-md-flex align-center ga-4">
        <v-btn to="/main" variant="text" exact>
          Home
        </v-btn>

        <v-btn to="/properties" variant="text" exact>
          Properties
        </v-btn>

        <v-btn href="#contacts" variant="text" exact>
          Contacts
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <nav-login-button-dekstop v-if="isLoggedIn === false"></nav-login-button-dekstop>
      <nav-login-button-mobile v-if="isLoggedIn === false"></nav-login-button-mobile>
      <nav-user-button v-else></nav-user-button>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useUserInfoStore } from '@/stores/userInfoStore'
import { useRouter } from 'vue-router'

import NavLoginButtonDekstop from '@/components/nav/NavLoginButtonDekstop.vue'
import NavLoginButtonMobile from '@/components/nav/NavLoginButtonMobile.vue'
import NavUserButton from '@/components/nav/NavUserButton.vue'

const store = useUserInfoStore()
const router = useRouter()

const drawer = ref(false)

const isLoggedIn = computed(() => store.isLoggedIn)

const socials = reactive([
  { name: 'Facebook', icon: 'mdi-facebook', link: 'https://facebook.com' },
  { name: 'Twitter', icon: 'mdi-twitter', link: 'https://twitter.com' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://linkedin.com' },
  { name: 'Instagram', icon: 'mdi-instagram', link: 'https://instagram.com' },
])
</script>
