<template>
  <div class="text-center d-flex d-md-none">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-account" v-bind="props" variant="text" class="ml-4"></v-btn>
      </template>

      <v-list>
        <v-list-item value="sign-in" to="/sign-in" link>
          <v-list-item-title>Sign in</v-list-item-title>
        </v-list-item>
        <v-list-item value="register" to="/register" link>
          <v-list-item-title>Registration</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
