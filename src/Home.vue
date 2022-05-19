<template>
<div>
  
  <!-- <couponsCard/> -->
<Header/>
<MainSection/>


</div>
</template>

<script>
// import couponsCard from "./components/coupons.vue"
import Header from "./components/Header.vue"
import MainSection from "./components/MainSection.vue"



export default {
  name: 'HomePage',
  components: {
    Header,
    MainSection,

    // couponsCard
   
}
}
</script>


<style>
body{
  margin: 0px auto;
}
</style>
