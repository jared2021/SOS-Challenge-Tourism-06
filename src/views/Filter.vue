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
      <input type="checkbox" name="precautions" value="reduced_occupancy" id="reduced_occupancy"> Reduced Occupancy
      <input type="checkbox" name="precautions" value="required_face_coverings" id="required_face_coverings"> Customers Required to Wear Face Coverings
      <input type="checkbox" name="precautions" value="employee_face_coverings" id="employee_face_coverings"> Employees Required to Wear Face Coverings
    </div>
    <div class="filter3">
      <p4>
        Choose businesses that interest you
      </p4>
      <br>
      <div class="boxes">
        <input type="checkbox" name="interests" value="Museums" id="museums">Museums & Attractions
        <br>
        <input type="checkbox" name="interests" value="Shopping" id="shopping">Shopping
        <br>
        <input type="checkbox" name="interests" value="Art" id="art">Art & Culture
        <br>
        <input type="checkbox" name="interests" value="Sports" id="sports">Sports & Recreation
        <br>
        <input type="checkbox" name="interests" value="Music" id="music">Music & Nightlife
        <br>
        <input type="checkbox" name="interests" value="Restaurants" id="restaurants">Eat & Drink
        <br>
        <input type="checkbox" name="interests" value="Hotels" id="hotels">Hotels
        <br>
        <input type="checkbox" name="interests" value="Events" id="events">Events
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
