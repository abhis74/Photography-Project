<template>
  <div>
    <div class="heading">
      <h1>Beautiful Moment Is Everythings</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quos ducimus at, sequi quia reiciendis. Neque illo officia tempora odio molestias nam esse incidunt voluptate quisquam. Repellendus itaque dolore laborum.</p>
      <img class="arrow" src="../assets/arrow.png" alt="">
    </div>
    <div class="mainImg">
       <img :src="require(`../assets/${mainheroImgs[0].hero_img}.webp`)"  > 
    </div>
    <div class="hero-section">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odit asperiores itaque impedit, hic sed quia illum optio debitis molestiae non rerum quibusdam neque eos voluptatibus esse nemo dignissimos aliquid!</p>
      <img :src="require(`../assets/${mainheroImgs[4].hero_img}.webp`)"  > 
    </div>
    <BackgroundImg/>
  
  </div>
</template>

<script>
import "../assets/styles/MainSection.css";
import "../assets/styles/HeroSection.css";
import BackgroundImg from "../components/Background.vue"
// import { VueAgile } from 'vue-agile'
export default {
  components: {
  // agile: VueAgile 
  BackgroundImg
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
