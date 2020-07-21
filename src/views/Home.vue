<template>
  <div class="home">
    <div class="background">
      <img class="center-fit" src="@/assets/IndyCate_HomePage_V2.jpg">
    </div>
  </div>
 
</template>
<style>

</style>
<script>

</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.background {
  display: grid;
  height: 100%;
  width: 100%;
}

.center-fit{
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}

body {
  font-family: Arial;
  font-size: 17px;
}

.container {
  position: center;
  max-width: 100%;
  margin: 0 auto;
}

.container img {vertical-align: middle;}

.container .content {
  position: absolute;
  top: 400px;
  background: rgb(255, 255, 255); /* Fallback color */
  background: rgba(255, 255, 255, 1); /* Black background with 0.5 opacity */
  color: Black;
  width: 100%;
  padding: 20px;
}

</style>