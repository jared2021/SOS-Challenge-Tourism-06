<template>
  <div class="home">
    <div class="background">
      <img src="@/assets/indianapolis.jpg" style="width:100%, height:100%">
    </div>
    <div class="container">
      <div class="content">
        <h1>Indycate</h1>
        <p>Hello and Welcome to our Tourism 06 website!</p>
      </div>
      <div class="search">
        <input type="text" placeholder="Search Here">
      </div>
    </div>
  </div>
</template>
<style>

</style>
<style>
* {
  box-sizing: border-box;
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

.container .search{
  position: absolute;
  top: 525px;
  left: 850px;
  padding: 3px;
  border: 5px solid black;
  font-size: 17px;
  max-width: 200px;
  
}

</style>