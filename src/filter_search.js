export const MyFunctions ={
    filterFunction: function(){
        

        var restaurants = document.getElementById("restaurants").checked;
        

        var name_result = document.getElementById("business");
        var address_result = document.getElementById("address");
        var phone_result = document.getElementById("number");
        var website_result = document.getElementById("website");

        if(restaurants)
        {
            var restaurant_names = ["Bazbeaux",
            "Big Lug Canteen",
            "BRU Burger Bar",
            "Cafe Patachou",
            "Caplinger's Fresh Catch",
            "Goose the Market",
            "Harry & Izzy's",
            "Jockamo Upper Crust Pizza",
            "Livery",
            "Mama Carolla's Old Italian Restaurant",
            "Milktooth",
            "Mug 'N Bun",
            "Napolese Pizzeria",
            "Rick's Cafe Boatyard",
            "Sahm's Tavern and Cafe",
            "St. Elmo Steak House",
            "The Rathskeller",
            "The Tamale Place",
            "Yats"];

            var restaurant_number = ["317-636-7662",
            "317-672-3503",
            "317-635-4278",
            "317-632-0765",
            "317-288-7263",
            "317-924-4944",
            "317-635-9594",
            "317-356-6612",
            "317-383-0330",
            "317-259-9412",
            "317-986-5131",
            "317-244-5669",
            "317-635-0765",
            "317-290-9300",
            "317-822-9903",
            "317-635-0636",
            "317-636-0396",
            "317-423-2203",
            "317-423-0518"]

            var restaurant_address = ["333 Massachusetts Ave, Indianapolis, IN 46204",
            "1435 E 86th St, Indianapolis, IN 46240",
            "410 Massachusetts Ave, Indianapolis, IN 46204",
            "225 W Washington St, Indianapolis, IN 46204",
            "7460 Shadeland Ave, Indianapolis, IN 46250",
            "2503 N Delaware St, Indianapolis, IN 46205",
            "153 South Illinois Street, Indianapolis, IN 46225",
            "5646 E. Washington Street, Indianapolis, IN 46219",
            "720 N College Ave, Indianapolis, IN 46202",
            "1031 E 54th St, Indianapolis, IN 46220",
            "534 Virginia Ave, Indianapolis, IN 46203",
            "5211 W 10th St, Speedway, IN 46224",
            "114 E 49th Street, Indianapolis, IN 46205",
            "4050 Dandy Trail, Indianapolis, IN 46254",
            "433 N Capitol Ave, Indianapolis, IN 46204",
            "127 Illinois St, Indianapolis, IN 46225",
            "401 E Michigan St, Indianapolis, IN 46204",
            "5226 Rockville Road, Indianapolis, IN 46224",
            "5363 NORTH COLLEGE AVE INDIANAPOLIS, IN 46220"]

            var restaurant_website = ["bazbeaux.com",
            "sahmsalehouse.com/nora",
            "bruburgerbar.com",
            "cafepatachou.com",
            "https://www.caplingersfreshcatch.com/",
            "https://www.goosethemarket.com/",
            "http://www.harryandizzys.com/locations/downtown-indianapolis/",
            "http://www.jockamopizza.com/",
            "https://www.livery-restaurant.com/",
            "mamacarollas.com",
            "https://www.milktoothindy.com/",
            "http://mug-n-bun.com/",
            "https://napolesepizzeria.com/locations/",
            "ricksboatyard.com",
            "sahmstavern.com",
            "stelmos.com",
            "https://rathskeller.com/",
            "https://www.thetamaleplace.com/",
            "https://yatscajuncreole.com/wp/"]

            for(var i=0;i<19;i++)
            {
                name_result.innerHTML = name_result.textContent + " " + restaurant_names[i];
                address_result.innerHTML = address_result.textContent + " " + restaurant_address[i];
                phone_result.innerHTML = phone_result.textContent + " " + restaurant_number[i];
                website_result.innerHTML = website_result.textContent + " " + restaurant_website[i];
            }
        }
    }
}