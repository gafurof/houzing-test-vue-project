<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-account" v-bind="props" variant="text" class="ml-4"></v-btn>
      </template>

      <v-list class="rounded-0">
        <v-list-item value="profile">
          <v-list-item-title>My Profile</v-list-item-title>
        </v-list-item>
        <v-list-item value="properties" to="/myproperties" link>
          <v-list-item-title>My Properties</v-list-item-title>
        </v-list-item>
        <v-list-item value="favourites" :to="'/favourites/' + 12" link>
          <v-list-item-title>Favourites</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
