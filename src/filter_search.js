export const MyFunctions ={
    filterFunction: function(){
        
        var restaurants = document.getElementById("restaurants").checked;
        var hotels = document.getElementById("hotels").checked;
        var events = document.getElementById("events").checked;
        var museums = document.getElementById("museums").checked;

        var nameResult = document.getElementById("business");
        var addressResult = document.getElementById("address");
        var phoneResult = document.getElementById("number");
        var websiteResult = document.getElementById("website");

        var reducedOccupancy = document.getElementById("reduced_occupancy").checked;
        var faceCoverings = document.getElementById("required_face_coverings").checked;
        var employeeFaceCoverings = document.getElementById("employee_face_coverings").checked;

        var business_names
        var business_number
        var business_address
        var business_website

        nameResult.innerHTML = ''
        addressResult.innerHTML = ''
        phoneResult.innerHTML = ''
        websiteResult.innerHTML = ''

        if(restaurants)
        {
            if( reducedOccupancy && faceCoverings && employeeFaceCoverings || reducedOccupancy && faceCoverings || reducedOccupancy && employeeFaceCoverings || reducedOccupancy)
            {
                business_names = ["Bazbeaux",
                "BRU Burger Bar",
                "Cafe Patachou",
                "Capliinger's Fresh Catch",
                "Harry & Izzy's",
                "Jockamo Upper Crust Pizza",
                "Livery",
                "Mama Carolla's Old Italian Restaurant",
                "Napolese Pizzeria",
                "Rick's Cafe Boatyard",
                "St. Elmo Steak House",
                "The Rathskeller",
                "The Tamale Place"]

                business_number = ["317-636-7662",
                "317-635-4278",
                "317-632-0765",
                "317-288-7263",
                "317-635-9594",
                "317-356-6612",
                "317-383-0330",
                "317-259-9412",
                "317-925-0765",
                "317-290-9300",
                "317-635-0636",
                "317-636-0396",
                "317-248-9771"]

                business_address = ["2147 N Talbott St, Indianapolis, IN 46202",
                "410 Massachusetts Ave, Indianapolis, IN 46204",
                "255 W Washington St, Indianapolis, IN 46204",
                "7460 Shadeland Ave, Indianapolis, IN 46250",
                "153 South Illinois Street, Indianapolis, IN 46225",
                "5646 E Washington Street, Indianapolis, IN 46222",
                "720 N College Ave, Indianapolis, IN 46202",
                "1031 E 54th St, Indianapolis, IN 46220",
                "114 E 49th Street, Indianapolis, IN 46205",
                "4050 Dandy Trail, Indianapolis, IN 46254",
                "127 Illinois St, Indianapolis, IN 46225",
                "401 E Michigan St, Indianapolis, IN 46204",
                "5226 Rockville Road, Indianapolis, IN 46224"]

                business_website = ["bazbeaux.com",
                "bruburgerbar.com",
                "cafepatachou.com",
                "https://www.caplingersfreshcatch.com/",
                "http://www.harryandizzys.com/locations/downtown-indianapolis/",
                "http://www.jockamopizza.com/",
                "https://www.livery-restaurant.com/",
                "mamacarollas.com",
                "https://napolesepizzeria.com/locations/",
                "ricksboatyard.com",
                "stelmos.com",
                "https://rathskeller.com/",
                "https://www.thetamaleplace.com/"]

                for(var a=0;a<13;a++)
                {
                    nameResult.innerHTML = nameResult.textContent + " " + business_names[a];
                    addressResult.innerHTML = addressResult.textContent + " " + business_address[a];
                    phoneResult.innerHTML = phoneResult.textContent + " " + business_number[a];
                    websiteResult.innerHTML = websiteResult.textContent + " " + business_website[a];
                }
            }

            else if(faceCoverings && employeeFaceCoverings || faceCoverings || employeeFaceCoverings)
            {
                business_names = ["Bazbeaux",
                "Big Lug Canteen",
                "BRU Burger",
                "Cafe Patachou",
                "Caplinger's Fresh Catch",
                "Goose the Market",
                "Harry & Izzy's",
                "Jockamo Upper Crust Pizza",
                "Livery",
                "Mama Carolla's Old Italian Restaurant",
                "Milktooth",
                "Mug'N Bun",
                "Napolese Pizzeria",
                "Rick's Cafe Boatyard",
                "St. Elmo Steak House",
                "The Rathskeller",
                "The Tamale Place",
                "Yats"]

                business_number = ["317-636-7662",
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
                "317-635-0636",
                "317-636-0396",
                "317-423-2203",
                "317-423-0518"]

                business_address = ["333 Massachusetts Ave, Indianapolis, IN 46204",
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
                "127 Illinois St, Indianapolis, IN 46225",
                "401 E Michigan St, Indianapolis, IN 46204",
                "5226 Rockville Road, Indianapolis, IN 46224",
                "5363 NORTH COLLEGE AVE INDIANAPOLIS, IN 46220"]

                business_website = ["bazbeaux.com",
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
                "stelmos.com",
                "https://rathskeller.com/",
                "https://www.thetamaleplace.com/",
                "https://yatscajuncreole.com/wp/"]

                for(var b=0;b<18;b++)
                {
                    nameResult.innerHTML = nameResult.textContent + " " + business_names[b];
                    addressResult.innerHTML = addressResult.textContent + " " + business_address[b];
                    phoneResult.innerHTML = phoneResult.textContent + " " + business_number[b];
                    websiteResult.innerHTML = websiteResult.textContent + " " + business_website[b];
                }
            }

            else
            {
                business_names = ["Bazbeaux",
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

                business_number = ["317-636-7662",
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

                business_address = ["333 Massachusetts Ave, Indianapolis, IN 46204",
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

                business_website = ["bazbeaux.com",
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
            
                for(var c=0;c<19;c++)
                {
                    nameResult.innerHTML = nameResult.textContent + " " + business_names[c];
                    addressResult.innerHTML = addressResult.textContent + " " + business_address[c];
                    phoneResult.innerHTML = phoneResult.textContent + " " + business_number[c];
                    websiteResult.innerHTML = websiteResult.textContent + " " + business_website[c];
                }
            }

        }

        if(hotels)
        {
            business_names = ["Conrad Indianapolis",
            "Crowne Plaza Indianapolis Downtown Union Station",
            "Drury Inn & Suites Indianapolis Downtown",
            "Hyatt Regency",
            "JW Marriott Indianapolis",
            "The Alexander"]

            business_number = ["317-713-5000",
            "317-631-2221",
            "317-849-8900",
            "317-236-1800",
            "317-632-1234",
            "317-860-5800",
            "317-624-8200"]

            business_address = ["50 W Washington St, Indianapolis, IN 46204",
            "123 W Louisiana St, Indianapolis, IN 46225",
            "8180 Shadeland Ave, Indianapolis, IN 46250",
            "1 S Capitol Ave, Indianapolis, IN 46204",
            "10 S West St, Indianapolis, IN 46204",
            "333 South Delaware St, Indianapolis, IN 46204"]

            business_website = ["https://www.conradindianapolis.com/",
            "https://www.crowneplazaindydowntown.com/",
            "https://www.druryhotels.com/locations/indianapolis-in/drury-inn-and-suites-indianapolis-northeast",
            "https://www.hyatt.com/en-US/hotel/indiana/hyatt-regency-indianapolis/indri",
            "https://www.marriott.com/hotels/hotel-information/fitness-center/indjw-jw-marriott-indianapolis/",
            "https://www.thetamaleplace.com/"]

            for(var d=0;d<6;d++)
            {
                nameResult.innerHTML = nameResult.textContent + " " + business_names[d];
                addressResult.innerHTML = addressResult.textContent + " " + business_address[d];
                phoneResult.innerHTML = phoneResult.textContent + " " + business_number[d];
                websiteResult.innerHTML = websiteResult.textContent + " " + business_website[d];
            }
        }

        if(events)
        {
            if(!faceCoverings && !reducedOccupancy && !employeeFaceCoverings || faceCoverings && employeeFaceCoverings || faceCoverings || employeeFaceCoverings)
            {
                business_names = ["Indianapolis Motor Speedway",
                "Lucas Oil Stadium",
                "Ruoff Music Center"]

                business_number = ["317-492-8500",
                "317-262-8600",
                "317-776-8181"]

                business_address = ["4790 W 16th St, Indianapolis, IN 46222",
                "500 S Capitol Ave, Indianapolis, IN 46225",
                "12880 E 146th St, Noblesville, IN 46060"]

                business_website = ["https://www.indianapolismotorspeedway.com/",
                "https://www.lucasoilstadium.com/",
                "https://www.livenation.com/venue/KovZpvEk7A/ruoff-music-center-events"]

                for(var e=0;e<3;e++)
                {
                    nameResult.innerHTML = nameResult.textContent + " " + business_names[e];
                    addressResult.innerHTML = addressResult.textContent + " " + business_address[e];
                    phoneResult.innerHTML = phoneResult.textContent + " " + business_number[e];
                    websiteResult.innerHTML = websiteResult.textContent + " " + business_website[e];
                }
            }
            
            else
            {
                business_names = ["Indianapolis Motor Speedway"]

                business_number = ["317-492-8500"]

                business_address = ["4790 W 16th St, Indianapolis, IN 46222"]

                business_website = ["https://www.indianapolismotorspeedway.com/"]

                for(var f=0;f<1;f++)
                {
                    nameResult.innerHTML = nameResult.textContent + " " + business_names[f];
                    addressResult.innerHTML = addressResult.textContent + " " + business_address[f];
                    phoneResult.innerHTML = phoneResult.textContent + " " + business_number[f];
                    websiteResult.innerHTML = websiteResult.textContent + " " + business_website[f];
                }
            }

        }

        if(museums)
        {

            if(reducedOccupancy && faceCoverings && employeeFaceCoverings || reducedOccupancy && faceCoverings || reducedOccupancy && employeeFaceCoverings || reducedOccupancy)
            {
                business_names = ["Conner Prarie",
                "Garfield Park Conservatory and Gardens",
                "Indianapolis Museum of Art at Newfields",
                "The Children's Museum of Indianapolis"]

                business_number = ["317-776-6000",
                "317-327-7184",
                "317-923-1331",
                "317-334-4000"]

                business_address = ["13400 Allisonville Rd, Fishers, IN 46038",
                "2505 Conservatory Dr, Indianapolis, IN 46203",
                "4000 N Michigan Rd, Indianapolis, IN 46208",
                "3000 N Meridian St, Indianapolis, IN 46208"]

                business_website = ["https://www.visithamiltoncounty.com/things-to-do/attractions/conner-prairie/",
                "https://www.garfieldgardensconservatory.org/",
                "https://discovernewfields.org/",
                "childrensmuseum.org"]

                for(var g=0;g<4;g++)
                {
                    nameResult.innerHTML = nameResult.textContent + " " + business_names[g];
                    addressResult.innerHTML = addressResult.textContent + " " + business_address[g];
                    phoneResult.innerHTML = phoneResult.textContent + " " + business_number[g];
                    websiteResult.innerHTML = websiteResult.textContent + " " + business_website[g];
                }                
            }

            else if(faceCoverings && employeeFaceCoverings || faceCoverings || employeeFaceCoverings)
            {
                business_names = ["Conner Prarie",
                "Garfield Park Conservatory and Gardens",
                "Indianapolis Museum of Art at Newfields",
                "Indianapolis Zoo",
                "The Children's Museum of Indianapolis"]

                business_number = ["317-776-6000",
                "317-327-7184",
                "317-923-1331",
                "317-630-2001",
                "317-334-4000"]

                business_address = ["13400 Allisonville Rd, Fishers, IN 46038",
                "2505 Conservatory Dr, Indianapolis, IN 46203",
                "4000 N Michigan Rd, Indianapolis, IN 46208",
                "1200 W Washington St, Indianapolis, IN 46222",
                "3000 N Meridian St, Indianapolis, IN 46208"]

                business_website = ["https://www.visithamiltoncounty.com/things-to-do/attractions/conner-prairie/",
                "https://www.garfieldgardensconservatory.org/",
                "https://discovernewfields.org/",
                "https://www.indianapoliszoo.com/",
                "childrensmuseum.org"]

                for(var h=0;h<5;h++)
                {
                    nameResult.innerHTML = nameResult.textContent + " " + business_names[h];
                    addressResult.innerHTML = addressResult.textContent + " " + business_address[h];
                    phoneResult.innerHTML = phoneResult.textContent + " " + business_number[h];
                    websiteResult.innerHTML = websiteResult.textContent + " " + business_website[h];
                }
            }

            else
            {
                business_names = ["Conner Prarie",
                "Garfield Park Conservatory and Gardens",
                "Indianapolis Museum of Art at Newfields",
                "Indianapolis Zoo",
                "Madam Walker Legacy Center",
                "The Children's Museum of Indianapolis"]

                business_number = ["317-776-6000",
                "317-327-7184",
                "317-923-1331",
                "317-630-2001",
                "317-236-2099",
                "317-334-4000"]

                business_address = ["13400 Allisonville Rd, Fishers, IN 46038",
                "2505 Conservatory Dr, Indianapolis, IN 46203",
                "4000 N Michigan Rd, Indianapolis, IN 46208",
                "1200 W Washington St, Indianapolis, IN 46222",
                "617 Indiana Ave, Indianapolis, IN 46202",
                "3000 N Meridian St, Indianapolis, IN 46208"]

                business_website = ["https://www.visithamiltoncounty.com/things-to-do/attractions/conner-prairie/",
                "https://www.garfieldgardensconservatory.org/",
                "https://discovernewfields.org/",
                "https://www.indianapoliszoo.com/",
                "https://madamwalkerlegacycenter.com/",
                "childrensmuseum.org"]

                for(var i=0;i<6;i++)
                {
                    nameResult.innerHTML = nameResult.textContent + " " + business_names[i];
                    addressResult.innerHTML = addressResult.textContent + " " + business_address[i];
                    phoneResult.innerHTML = phoneResult.textContent + " " + business_number[i];
                    websiteResult.innerHTML = websiteResult.textContent + " " + business_website[i];
                }
            }
            
        }

    }
}