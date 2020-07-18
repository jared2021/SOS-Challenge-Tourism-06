<template>
  <div class="filter">
    <div class="background">
      <img src="@/assets/indianapolis filter.jpg">
    </div>
    <h1>
      Which of these options fits you the best?
    </h1>
    <div class="container">
    <div class="filter1">
      <p1>
        Show me places that practice special measures for COVID-19?
      </p1>
      <br>
      <input type="radio" name="precautions" value="Yes" id="yes">Yes
      <input type="radio" name="precautions" value="No" id="no">No
    </div>
    <div class="filter2">
      <p3>
        Age with drop down list for options
      </p3>
      <div class="age">
        <select>
          <option value="0"> What is your age?</option>
          <option value="1">16-20</option>
          <option value="2">21-25</option>
          <option value="3">26-30</option>
          <option value="4">31-35</option>
          <option value="5">36-40</option>
          <option value="6">41-45</option>
          <option value="7">46-50</option>
          <option value="8">51-55</option>
          <option value="9">56-60</option>
          <option value="10">61-65</option>
          <option value="11">66-70</option>
          <option value="12">71-75</option>
          <option value="13">76-80</option>
        </select>
      </div>
    </div>
    <div class="filter3">
      <p4>
        Choose businesses that interest you
      </p4>
      <br>
      <div class="boxes">
        <input type="checkbox" name="interests" value="Restaurants" id="restaurants">Restaurants
        <br>
        <input type="checkbox" name="interests" value="Bars" id="bars">Bars
        <br>
        <input type="checkbox" name="interests" value="Cafes" id="cafes">Cafes
        <br>
        <input type="checkbox" name="interests" value="Hotels" id="hotels">Hotels
        <br>
        <input type="checkbox" name="interests" value="Parks" id="parks">Parks
        <br>
        <input type="checkbox" name="interests" value="Music and Nightlife" id="music_and_nightlife">Music & Nightlife
        <br>
      </div>
    </div>
    <br>
    <div class="submit">
      <button @click="filterBusiness">
        Submit
      </button>
    </div>
  </div>
  <div id="business">
    </div>
    <div id="address">
      </div>
      <div id="website">
      </div>
      <div id="number">
        </div>
    </div>
</template>

<script>
import {MyFunctions} from "@/filter_search.js";
export default {
  name: "FilterResults",
  methods:{
    filterBusiness: function(){
      MyFunctions.filterFunction();
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  font-size: 17px;
}

.container{
  max-width: 50%;
  margin: auto;
  border: 5px solid blue
}

.container .filter1 {
  position: absolute;
  left: 0px;
  margin: 0 auto;
}

.container .filter2 {
  margin-left: 0px;
  margin-top: 0px;
}

.container .filter2 .age { 
  position: relative;
}

.container .filter3 .boxes {
  position: relative;
  left: 500px;
  max-width: 100%;
}
