<template>
  <div class="background">
    <h1>professional Approach</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil
      veritatis possimus quae iusto tempore debitis exercitationem sequi, non ut
      vero. Optio cupiditate vero dolore fuga voluptatum magni itaque minima?
    </p>
  </div>
</template>


<script >
export default {
  name: "BackgroundImg",
};
</script  >
<style scoped>
.background {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  /* margin: 69px; */
  height: 100vh;
  /* width: 98vw; */
  padding: 30px;

  background-image: url("../assets/7.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.background h1 {
  color: #352d56;
  font-size: 100px;
  font-weight: 900;
  text-align: center;
  text-transform: capitalize;
  margin: 0;
}
.background p{
        font-size: 23px;
    text-align: center;
    width: 66%;
    padding: 10px;
    color: white;
}
</style>