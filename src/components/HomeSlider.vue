<template>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="https://shareviet.net/wp-content/uploads/2023/04/phong-ngay-hoi-doc-sach-file-corel-4233.jpg" />
        <q-carousel-slide :name="2" img-src="https://sharefilepdf.com/attachments/ngay-hoi-doc-sach-tieu-hoc-nguyen-cong-tru-png.3427/" />
        <q-carousel-slide :name="3" img-src="https://th.bing.com/th/id/OIP.mpEZdpNZETA8ztAt2qAKewHaEK?rs=1&pid=ImgDetMain" />
        <q-carousel-slide :name="4" img-src="https://static.wixstatic.com/media/385cad_c4efce04318f4ace9eec1e9e3a4a9cf9~mv2.png/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/385cad_c4efce04318f4ace9eec1e9e3a4a9cf9~mv2.png" />
      </q-carousel>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        slide: ref(1),
        autoplay: ref(true)
      }
    }
  }
  </script>
  