

export const MyFunctions ={
    searchFunction: function(){
        var test=document.getElementById("businessname").value;
        var business_name = ["Baby's","Bazbeaux","Cafe Patachou","Canal Walk","Defy Indianapolis"];
        var business_type = ["Music & Nightlife","Eat & Drink","Eat & Drink","Sports & Recreation","Sports & Recreation"];
        var match = false;
        for(var i=0;i<5;i++)
        {
            if(test == business_name[i])
            {
                var results = document.getElementById("searchresults");
                results.innerHTML = business_name[i];
                results = document.getElementById("businesstype");
                results.innerHTML = business_type[i];
                match = true;
            }
        }
        if(!match)
        {
            var message = document.getElementById("searchresults");
            message.innerHTML = "No results found.";
        }
    }
}