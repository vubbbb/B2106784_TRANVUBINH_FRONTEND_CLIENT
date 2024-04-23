<template>
  <q-card class="my-card"  flat bordered @click="orderBook" >
    <q-card-section class="image-section ">
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
  methods: {
    orderBook() {
      router.push('order/' + this._id);
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

/* Optional: Adjust the height of the card */
.q-card__section {
  flex: 1;
}

/* Optional: Limit the height of the image */
.image {
  height: 25rem;
  align-items: center;
}

.image-section {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
}
</style>