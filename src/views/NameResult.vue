<template>
<div id="nameresult">
    
    <input type="text" placeholder="Search Here" id="businessname" value="please">
    <button onclick="searchFunction()"> Submit</button>
</div>
</template>

<script>
import {searchFunction} from "@/name_search.js";
export default {
    name: "nameResult",
    methods:{
        searchFunction: searchFunction
    }
};
</script>