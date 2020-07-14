import business from "@/business.js";
function searchFunction(){
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
var test=false;
if(test)
{
    searchFunction();
}