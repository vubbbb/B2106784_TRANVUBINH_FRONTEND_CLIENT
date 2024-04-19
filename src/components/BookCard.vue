<template>
  <q-card class="my-card" flat bordered>
    <q-card-section class="image-section">
      <q-img :src="image" class="image" />
    </q-card-section>

    <q-card-section>
      <q-btn fab color="primary" icon="shopping_cart" class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);" />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ name }}
        </div>
        <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
          <q-icon name="money" />
          {{ cost }}đ
        </div>
      </div>

    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        {{ author }}
      </div>
      <div class="text-caption text-grey">
        <q-icon name="inventory" />
        {{ quantity }}
      </div>
    </q-card-section>

    <q-separator />

  </q-card>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  props: {
    _id: String,
    name: String,
    author: String,
    cost: Number,
    quantity: Number,
    yearOfPublication: Number,
    image: String
  },
  methods: {}
};
</script>

<style scoped>
.my-card {
  width: 15rem;
  display: flex;
  /* Use Flexbox */
  flex-direction: column;
  /* Arrange items vertically */
  justify-content: space-between;
  /* Evenly distribute space between items */
}

/* Optional: Adjust the height of the card */
.q-card__section {
  flex: 1;
  /* Distribute remaining space evenly among sections */
}

/* Optional: Limit the height of the image */
.q-img {
  height: 15rem;
  
}


</style>