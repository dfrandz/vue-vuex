<template>
    <swiper
        class="mySwiper"
        :pagination="{
        dynamicBullets: true,
        }"
        :loop="true"
        :modules="modules"
        :autoplay="{
            delay: 3000,
        }"
    >
        <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" class="rounded object-cover" />
        </swiper-slide>
        <swiper-slide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </swiper-slide>
        <swiper-slide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </swiper-slide>
    </swiper>
    
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
    import '../style.css';
  
    // import required modules
    import { Pagination, Autoplay } from 'swiper';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination],
        };
      },
    };
  </script>

<style>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
    
.swiper {
      width: 100%;
      padding-top: 10px;
      padding-bottom: 50px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
    }

</style>