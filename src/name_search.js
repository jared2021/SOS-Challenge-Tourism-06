import business from "@/business.js";


export const MyFunctions ={
    searchFunction: function(){
        var test=document.getElementById("businessname").value;
        if(test == business.companies.name)
        {
            console.log("Match acquired.");
        }
        else
        {
            console.log("No match.");
        }
    }
}