<template>
  <v-card elevation="2" rounded="lg" class="pa-6 mb-5">

    <v-row class="font-weight-medium text-grey-darken-1 mb-4">
      <v-col cols="12" md="5"><b>Listing Title</b></v-col>

      <v-col v-if="$vuetify.display.smAndUp" md="2">
        Date Published
      </v-col>

      <v-col v-if="$vuetify.display.smAndUp" md="2">
        Status
      </v-col>

      <v-col v-if="$vuetify.display.smAndUp" md="1">
        View
      </v-col>

      <v-col v-if="$vuetify.display.smAndUp" md="2" class="text-center">
        Action
      </v-col>
    </v-row>

    <v-row v-for="item in listings" :key="item.id" class="align-center mb-6">
      <v-col cols="12" md="5">
        <v-row no-gutters>

          <v-col cols="12" sm="4" md="4">
            <v-card rounded="md" class="position-relative">
              <v-img :src="item.image" height="120" cover />

              <v-btn v-if="item.featured" size="x-small" color="primary" class="position-absolute"
                style="top:8px; left:8px">
                FEATURED
              </v-btn>
            </v-card>
          </v-col>

          <v-col cols="12" sm="8" md="8" class="pl-sm-4 pt-3 pt-sm-0">
            <div class="d-flex align-center mb-1">
              <span class="font-weight-medium">
                {{ item.title }}
              </span>

              <v-chip size="x-small" color="blue-grey-darken-4" class="ml-2">
                FOR SALE
              </v-chip>
            </div>

            <div class="text-grey text-caption mb-1">
              {{ item.location }}
            </div>

            <div class="text-grey text-caption text-decoration-line-through">
              {{ item.oldPrice }}
            </div>

            <div class="font-weight-bold">
              {{ item.price }}
            </div>
          </v-col>

        </v-row>
      </v-col>

      <template v-if="$vuetify.display.smAndUp">
        <v-col md="2" class="text-grey-darken-1">
          {{ item.date }}
        </v-col>

        <v-col md="2" class="text-grey-darken-1">
          {{ item.status }}
        </v-col>

        <v-col md="1" class="text-grey-darken-1">
          {{ item.views }}
        </v-col>

        <v-col md="2" class="text-center">
          <v-btn icon variant="text">
            <v-icon size="18">mdi-pencil</v-icon>
          </v-btn>

          <v-btn icon variant="text">
            <v-icon size="18">mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </template>

    </v-row>

  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const listings = ref([
  {
    id: 1,
    title: 'New Apartment Nice View',
    location: 'Quincy St, Brooklyn, NY, USA',
    oldPrice: '$2,800/mo',
    price: '$7,500/mo',
    date: '30 December 2022',
    status: 'Pending',
    views: 5933,
    featured: true,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae'
  },
  {
    id: 2,
    title: 'Luxury Family Home',
    location: 'Main St, Miami, FL, USA',
    oldPrice: '$3,200/mo',
    price: '$8,100/mo',
    date: '15 January 2023',
    status: 'Pending',
    views: 4210,
    featured: true,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb'
  },
  {
    id: 3,
    title: 'Modern City Flat',
    location: 'Sunset Blvd, LA, USA',
    oldPrice: '$2,100/mo',
    price: '$6,900/mo',
    date: '02 February 2023',
    status: 'Pending',
    views: 3875,
    featured: true,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
  }
])
</script>
