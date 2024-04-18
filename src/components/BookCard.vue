<template>
    <q-card class="my-card q-ma-sm my-box cursor-pointer q-hoverable" v-ripple style="width: 400px; height: 250px;">
      <q-card-section class="q-pa-md">
        <div class="row justify-center items-center full-height">
          <div class="col-auto">
            <img :src="image" class="book-image" alt="Book Cover">
          </div>
          <div class="col">
            <div class="text-h6">{{ name }}</div>
            <div class="text-subtitle-2">Tác giả: {{ author }}</div>
            <div class="text-subtitle-2">Giá: {{ cost }}đ</div>
            <div class="text-subtitle-2">Số lượng: {{ quantity }}</div>
            <div class="text-subtitle-2">Năm xuất bản: {{ yearOfPublication }}</div>
          </div>
        </div>
      </q-card-section>
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
    border-radius: 10px;
    overflow: hidden;
  }
  
  .book-image {
    max-width: 120px;
    max-height: 180px;
  }
  
  .text-h6 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .text-subtitle-2 {
    font-size: 0.875rem;
    margin-bottom: 5px;
  }
  </style>
  