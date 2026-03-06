<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-account" v-bind="props" variant="text" class="ml-4"></v-btn>
      </template>

      <v-list class="rounded-0">
        <v-list-item value="profile" to="/profile" link>
          <v-list-item-title>My Profile</v-list-item-title>
        </v-list-item>
        <v-list-item value="properties" to="/my-properties" link v-if="store.accountStatus.role === 'seller'">
          <v-list-item-title>My Properties</v-list-item-title>
        </v-list-item>
        <v-list-item value="favourites" to='/favourites' link>
          <v-list-item-title>Favourites</v-list-item-title>
        </v-list-item>
        <v-list-item value="properties" to="/add-propertie" link v-if="store.accountStatus.role === 'seller'">
          <v-list-item-title>Add Propertie</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { useUserInfoStore } from "@/stores/userInfoStore"

const store = useUserInfoStore()
</script>
