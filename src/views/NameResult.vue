<template>
<body>
<div id="nameresult">
    <input type="text" placeholder="Search Here" id="businessname" value="">
    <button @click="searchName"> Submit</button>
<div class="background">
      <img src="@/assets/indianapolis.jpg" style="width:100%, height:100%">
    </div>
    <div class="container" id="push">
    <div id="searchresults">
    </div>
    <div id="businesstype">
    </div>
    <div id="businessnumber">
    </div>
    <div id="businesswebsite">
    </div>
    <div id="businessaddress">
    </div>
    <div id="businessactions">
    </div>
    </div>
</div>
</body>
</template>

<script>
import {MyFunctions} from "@/name_search.js";
export default {
    name: "nameResult",
    methods:{
        searchName: function(){
            MyFunctions.searchFunction();
        }
        
    }
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 400px;
  background: rgb(255, 255, 255); /* Fallback color */
  background: rgba(255, 255, 255, 1); /* Black background with 0.5 opacity */
  color: Black;
  width: 100%;
  padding: 20px;
  display: none;
}
</style>