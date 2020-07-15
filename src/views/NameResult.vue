<template>
<body>
<div id="nameresult">

    <input type="text" placeholder="Search Here" id="businessname" value="please">
    <button @click="searchName"> Submit</button>
    <div id="searchresults">
    </div>
    <div id="businesstype">
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