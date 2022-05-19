<template>
  <div>
    <div class="container">
      <div class="logo">
        <a href="/"><img src="../assets/creativePhoto.png   " alt="" /></a>
        
      </div>

      <div class="navBar" @click="navBar" >
            <span></span>
            <span></span>
            <span></span>
      </div>

    </div>
    <div class="nav-links-box" :class="{navBar:animate}">

      <ul class="nav-links" >
        <li @mouseover="sublinks" > HOME
            <div class="sub-links" v-show="!sublinksShow">
              <p>Landscape</p>
              <p>Sports</p>
              <p>Night</p>
            </div>
          </li>
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
   this.navBarblock=!this.}
},


};
</script>







