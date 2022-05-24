<template>
  <div>
    <div class="container">
      <div class="logo">
        <a href="/"><img src="../assets/creativePhoto.png   " alt="" /></a>
        
      </div>

      <div class="navBar" @click="navBar" >
            <span :class="navBarblock ? 'cross-div-one':''"></span>
            <span :class="navBarblock ? 'cross-div-sec':''"></span>
            <span :class="navBarblock ? 'cross-div-three':''"></span>
      </div>

    </div>
    <div class="nav-links-box" :class="navBarblock ? 'animate' : 'animated-box'">

      <ul class="nav-links" >
        <li @mouseover="sublinks" ><a href="/">  HOME
         </a> </li>
            <div class="sub-links" v-show="!sublinksShow">
              <p>Landscape</p>
              <p>Sports</p>
              <p>Night</p>
            </div>
          <li>About</li>
          <li>Contact</li>
        <li> <router-link to="/login">LogIn</router-link> </li>
        </ul>
       </div>
  </div>
</template>
<script>
import "../assets/styles/Header.css";
export default {
  name: "HeaderNav",
  data(){
      return{

        sublinksShow:false,
        navBarblock:false
      }
  },

methods: {
    sublinks(){
            this.sublinksShow=!this.sublinksShow
    },
 navBar(){
   this.navBarblock=!this.navBarblock}
},


};
</script>







