<template>
  <div>
    <div class="mainImg">
         <agile :initial-slide="3">
        <div class="slide" v-for="mainheroImg in mainheroImgs" :key="mainheroImg.index">
        <!-- {{mainheroImg.hero_img}} -->
        <img :src="require(`../assets/${mainheroImg.hero_img}.webp`)"  > 
        <p>{{mainheroImg.text}}</p>
        </div>

    </agile>
    
    </div>
    <div class="hero-section">
    
      <div class="img-container modal" ref="phoneBg">
        <img
          ref="phone"
          class="phone"
          src="../assets/pexels-philip-ackermann-1666021.jpg"
          alt="isometric phone"
          width="600"
        />
      </div>
   
    <div class="img-container modal1">
      <img
        ref="phone"
        class="phone"
        src="../assets/212e3rr4.jpg"
        alt="isometric phone"
        width="600"
      />
    </div>
    <div class="img-container modal">
      <img
        ref="phone"
        class="phone"
        src="../assets/12345667.jpg"
        alt="isometric phone"
        width="600"
      />
    </div>
  </div>
  </div>
</template>

<script>
import "../assets/styles/MainSection.css";
import "../assets/styles/HeroSection.css";
import { VueAgile } from 'vue-agile'
export default {
  components: {
  agile: VueAgile 
  },

  name: "MainSection",

  data() {
    return {
          mainheroImgs:[
            {
              hero_img:"1",
              text:'aldjndfkjnsagfih'
            },
            {
              hero_img:"2",
              text:'aldjndfkjnsagfih'
              
            },
            {
              hero_img:"3",
              text:'aldjndfkjnsagfih'
            },
            {
              hero_img:"4",
              text:'aldjndfkjnsagfih'
            },
            {
              hero_img:"5",
              text:'aldjndfkjnsagfih'
            },
            {
              hero_img:"6",
              text:'aldjndfkjnsagfih'
            },
            {
              hero_img:"7",
              text:'aldjndfkjnsagfih'
            },
          ]
    };
  },

  methods: {
   
  },
};
</script>
