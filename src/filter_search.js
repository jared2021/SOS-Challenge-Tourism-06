export const MyFunctions ={
    filterFunction: function(){
        
        var restaurants = document.getElementById("restaurants").checked;
        var hotels = document.getElementById("hotels").checked;
        var events = document.getElementById("events").checked;
        var museums = document.getElementById("museums").checked;
        var shopping = document.getElementById("shopping").checked;
        var art = document.getElementById("art").checked;
        var sport = document.getElementById("sports").checked;
        var music = document.getElementById("music").checked;

        var nameResult = document.getElementById("business");

        var reducedOccupancy = document.getElementById("reduced_occupancy").checked;
        var faceCoverings = document.getElementById("required_face_coverings").checked;
        var employeeFaceCoverings = document.getElementById("employee_face_coverings").checked;

        var business_names
        var business_number
        var business_address
        var business_website

        nameResult.innerHTML = ''

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

                nameResult.innerHTML += "Eat & Drink: <br>"

                for(var a=0;a<13;a++)
                {
                    nameResult.innerHTML += " " + business_names[a] + " " + business_number[a] + " " + business_address[a] + " " + business_website[a] + "<br>";
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

                nameResult.innerHTML += "Eat & Drink: <br>"

                for(var b=0;b<18;b++)
                {
                    nameResult.innerHTML += " " + business_names[b] + " " + business_number[b] + " " + business_address[b] + " " + business_website[b] + "<br>";
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

                nameResult.innerHTML += "Eat & Drink: <br>"
            
                for(var c=0;c<19;c++)
                {
                    nameResult.innerHTML += " " + business_names[c] + " " + business_number[c] + " " + business_address[c] + " " + business_website[c] + "<br>";
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

            nameResult.innerHTML += "Hotels: <br>"

            for(var d=0;d<6;d++)
            {
                nameResult.innerHTML += " " + business_names[d] + " " + business_number[d] + " " + business_address[d] + " " + business_website[d] + "<br>";
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

                nameResult.innerHTML += "Events: <br>"

                for(var e=0;e<3;e++)
                {
                    nameResult.innerHTML += " " + business_names[e] + " " + business_number[e] + " " + business_address[e] + " " + business_website[e] + "<br>";
                }
            }
            
            else
            {
                business_names = ["Indianapolis Motor Speedway"]

                business_number = ["317-492-8500"]

                business_address = ["4790 W 16th St, Indianapolis, IN 46222"]

                business_website = ["https://www.indianapolismotorspeedway.com/"]

                nameResult.innerHTML += "Events: <br>"

                for(var f=0;f<1;f++)
                {
                    nameResult.innerHTML += " " + business_names[f] + " " + business_number[f] + " " + business_address[f] + " " + business_website[f] + "<br>";
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

                nameResult.innerHTML += "Museums & Attractions: <br>"

                for(var g=0;g<4;g++)
                {
                    nameResult.innerHTML += " " + business_names[g] + " " + business_number[g] + " " + business_address[g] + " " + business_website[g] + "<br>";
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

                nameResult.innerHTML += "Museums & Attractions: <br>"

                for(var h=0;h<5;h++)
                {
                    nameResult.innerHTML += " " + business_names[h] + " " + business_number[h] + " " + business_address[h] + " " + business_website[h] + "<br>";
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

                nameResult.innerHTML += "Museums & Attractions: <br>"

                for(var i=0;i<6;i++)
                {
                    nameResult.innerHTML += " " + business_names[i] + " " + business_number[i] + " " + business_address[i] + " " + business_website[i] + "<br>";
                }
            }
            
        }

        if(shopping)
        {

            if(faceCoverings && reducedOccupancy && employeeFaceCoverings || faceCoverings && reducedOccupancy || faceCoverings && employeeFaceCoverings || faceCoverings)
            {
                business_names = ["Bluemile Running Store",
                "Hotel Tango Distillery",
                "Indianapolis City Market",
                "The Fashion Mall, Keystone at the Crossing"]

                business_number = ["317-202-0202",
                "317-653-1806",
                "317-634-9266",
                "317-574-4000"]

                business_address = ["1079 Broad Ripple Ave, Indianapolis, IN 46220",
                "702 Virginia Ave, Indianapolis, IN 46203",
                "222 E Market St, Indianapolis, IN 46204",
                "8702 Keystone Crossing, Indianapolis, IN 46240"]

                business_website = ["jackrabbit.com",
                "https://hoteltangowhiskey.com/",
                "http://www.indycm.com/",
                "https://www.simon.com/mall/the-fashion-mall-at-keystone"]

                nameResult.innerHTML += "Shopping: <br>"

                for(var o=0;o<4;o++)
                {
                    nameResult.innerHTML += " " + business_names[o] + " " + business_number[o] + " " + business_address[o] + " " + business_website[o] + "<br>";
                }
            }

            else
            {
                business_names = ["Bluemile Running Store",
                "Castleton Square Mall",
                "Hotel Tango Distillery",
                "Indianapolis City Market",
                "The Fashion Mall, Keystone at the Crossing"]

                business_number = ["317-202-0202",
                "317-849-9994",
                "317-653-1806",
                "317-634-9266",
                "317-574-4000"]

                business_address = ["1079 Broad Ripple Ave, Indianapolis, IN 46220",
                "6020 E 82nd St, Indianapolis, IN 46250",
                "702 Virginia Ave, Indianapolis, IN 46203",
                "222 E Market St, Indianapolis, IN 46204",
                "8702 Keystone Crossing, Indianapolis, IN 46240"]

                business_website = ["jackrabbit.com",
                "https://www.simon.com/mall/castleton-square",
                "https://hoteltangowhiskey.com/",
                "http://www.indycm.com/",
                "https://www.simon.com/mall/the-fashion-mall-at-keystone"]

                nameResult.innerHTML += "Shopping: <br>"

                for(var p=0;p<5;p++)
                {
                    nameResult.innerHTML += " " + business_names[p] + " " + business_number[p] + " " + business_address[p] + " " + business_website[p] + "<br>";
                }
            }
             
        }

        if(art)
        {
            if(faceCoverings && reducedOccupancy && employeeFaceCoverings || reducedOccupancy && faceCoverings || reducedOccupancy && employeeFaceCoverings || reducedOccupancy)
            {
                business_names = ["Beef & Boards Dinner Theatre",
                "Indiana Historical Society",
                "Indiana Repertory Theatre",
                "Indianapolis Art Center"]

                business_number = ["317-872-9664",
                "317-232-1882",
                "317-635-5252",
                "317-255-2464"]

                business_address = ["9301 Michigan Rd, Indianapolis, IN 46268",
                "450 W Ohio St, Indianapolis, IN 46202",
                "140 W Washington St, Indianapolis, IN 46204",
                "820 E 67th St, Indianapolis, IN 46220"]

                business_website = ["beefandboards.com",
                "https://indianahistory.org/ ",
                "https://www.irtlive.com/",
                "https://www.indplsartcenter.org/"]

                nameResult.innerHTML += "Art & Culture: <br>"

                for(var m=0;m<4;m++)
                {
                    nameResult.innerHTML += " " + business_names[m] + " " + business_number[m] + " " + business_address[m] + " " + business_website[m] + "<br>";
                }
            }

            else
            {
                business_names = ["Beef & Boards Dinner Theatre",
                "Easley Winery",
                "Indiana Grand Racing & Casino",
                "Indiana Historical Society",
                "Indiana Repertory Theatre",
                "Indianapolis Art Center"]

                business_number = ["317-872-9664",
                "317-636-4516",
                "317-392-7777",
                "317-232-1882",
                "317-635-5252",
                "317-255-2464"]

                business_address = ["9301 Michigan Rd, Indianapolis, IN 46268",
                "205 N College Ave, Indianapolis, IN 46202",
                "4300 N Michigan Rd, Shelbyville, IN 46176",
                "450 W Ohio St, Indianapolis, IN 46202",
                "140 W Washington St, Indianapolis, IN 46204",
                "820 E 67th St, Indianapolis, IN 46220"]

                business_website = ["beefandboards.com",
                "http://www.easleywinery.com/",
                "https://www.caesars.com/indiana-grand",
                "https://indianahistory.org/ ",
                "https://www.irtlive.com/",
                "https://www.indplsartcenter.org/"]

                nameResult.innerHTML += "Art & Culture: <br>"

                for(var n=0;n<6;n++)
                {
                    nameResult.innerHTML += " " + business_names[n] + " " + business_number[n] + " " + business_address[n] + " " + business_website[n] + "<br>";
                }
            }
            
        }

        if(sport)
        {
            if(reducedOccupancy && faceCoverings && employeeFaceCoverings || reducedOccupancy && faceCoverings || reducedOccupancy && employeeFaceCoverings || reducedOccupancy)
            {
                business_names = ["Old World Gondoliers",
                "Speedway Indoor Karting"]

                business_number = ["317-340-2489",
                "317-870-3780"]

                business_address = ["340 W Michigan St, Indianapolis, IN 46202",
                "1067 N Main St, Speedway, IN 46224"]

                business_website = ["http://www.4gondola.com/",
                "https://www.sikarting.com/"]

                nameResult.innerHTML += "Sports & Recreation: <br>"

                for(var j=0;j<2;j++)
                {
                    nameResult.innerHTML += " " + business_names[j] + " " + business_number[j] + " " + business_address[j] + " " + business_website[j] + "<br>";
                }
            }

            else if(faceCoverings && employeeFaceCoverings || faceCoverings || employeeFaceCoverings)
            {
                business_names = ["Defy Indianapolis",
                "Go Ape Treetop Adventure"]

                business_number = ["317-520-5030",
                "800-971-8271"]

                business_address = ["8356 Masters Rd, Indianapolis, IN 46250",
                "5855 Delong Road, Indianapolis, IN 46254"]

                business_website = ["https://defy.com/locations/defy-indianapolis/",
                "https://www.goape.com/location/indiana-indianapolis/"]

                nameResult.innerHTML += "Sports & Recreation: <br>"

                for(var k=0;k<2;k++)
                {
                    nameResult.innerHTML += " " + business_names[k] + " " + business_number[k] + " " + business_address[k] + " " + business_website[k] + "<br>";
                }
            }
            else
            {
                business_names = ["Canal Walk",
                "Defy Indianapolis",
                "Go Ape Treetop Adventure",
                "Old World Gondoliers",
                "Punch Bowl Social",
                "Speedway Indoor Karting"]

                business_number = ["317-223-2434",
                "317-520-5030",
                "800-971-8271",
                "317-340-2489",
                "317-249-8613",
                "317-870-3780"]

                business_address = ["420 W Ohio St, Indianapolis, IN 46202",
                "8356 Masters Rd, Indianapolis, IN 46250",
                "5855 Delong Road, Indianapolis, IN 46254",
                "340 W Michigan St, Indianapolis, IN 46202",
                "120 S. MERIDIAN ST. INDIANAPOLIS 46225",
                "1067 N Main St, Speedway, IN 46224"]

                business_website = ["downtownindy.org/venue/2087/downtown-indy-canal-walk",
                "https://defy.com/locations/defy-indianapolis/",
                "https://www.goape.com/location/indiana-indianapolis/",
                "http://www.4gondola.com/",
                "https://punchbowlsocial.com/location/indianapolis",
                "https://www.sikarting.com/"]

                nameResult.innerHTML += "Sports & Recreation: <br>"

                for(var l=0;l<6;l++)
                {
                    nameResult.innerHTML += " " + business_names[l] + " " + business_number[l] + " " + business_address[l] + " " + business_website[l] + "<br>";
                }
            }
        }

        if(music)
        {
            if(reducedOccupancy && faceCoverings && employeeFaceCoverings)
            {
                business_names = ["Kilroy's Bar and Grill"]

                business_number = ["317-257-7849"]

                business_address = ["831 Broad Ripple Ave, Indianapolis, IN 46220"]

                business_website = ["https://www.kilroysindy.com/full-menu/"]

                nameResult.innerHTML += "Music & Nightlife: <br>"

                for(var q=0;q<1;q++)
                {
                    nameResult.innerHTML += " " + business_names[q] + " " + business_number[q] + " " + business_address[q] + " " + business_website[q] + "<br>";
                }
            }

            else if(faceCoverings && employeeFaceCoverings || faceCoverings)
            {
                business_names = ["Kilroy's Bar and Grill",
                "The HandleBar Indy Pedal Pub"]

                business_number = ["317-257-7849",
                "317-620-1448"]

                business_address = ["831 Broad Ripple Ave, Indianapolis, IN 46220",
                "501 Madison Ave, Indianapolis, IN 46225"]

                business_website = ["https://www.kilroysindy.com/full-menu/",
                "https://handlebarindy.com/"]

                nameResult.innerHTML += "Music & Nightlife: <br>"

                for(var r=0;r<2;r++)
                {
                    nameResult.innerHTML += " " + business_names[r] + " " + business_number[r] + " " + business_address[r] + " " + business_website[r] + "<br>";
                }
            }

            else if(reducedOccupancy && employeeFaceCoverings || reducedOccupancy)
            {
                business_names = ["Baby's",
                "Kilroy's Bar and Grill",
                "The Vogue"]

                business_number = ["317-600-3559",
                "317-257-7849",
                "317-255-2828"]

                business_address = ["2147 N Talbott St, Indianapolis, IN 46202",
                "831 Broad Ripple Ave, Indianapolis, IN 46220",
                "6259 N College Ave, Indianapolis, IN 46220"]

                business_website = ["https://babysindy.com/",
                "https://www.kilroysindy.com/full-menu/",
                "https://thevogue.com/"]

                nameResult.innerHTML += "Music & Nightlife: <br>"

                for(var s=0;s<3;s++)
                {
                    nameResult.innerHTML += " " + business_names[s] + " " + business_number[s] + " " + business_address[s] + " " + business_website[s] + "<br>";
                }
            }

            else if(employeeFaceCoverings)
            {
                business_names = ["Baby's",
                "Kilroy's Bar and Grill",
                "The HandleBar Indy Pedal Pub",
                "The Vogue"]

                business_number = ["317-600-3559",
                "317-257-7849",
                "317-620-1448",
                "317-255-2828"]

                business_address = ["2147 N Talbott St, Indianapolis, IN 46202",
                "831 Broad Ripple Ave, Indianapolis, IN 46220",
                "501 Madison Ave, Indianapolis, IN 46225",
                "6259 N College Ave, Indianapolis, IN 46220"]

                business_website = ["https://babysindy.com/",
                "https://www.kilroysindy.com/full-menu/",
                "https://handlebarindy.com/",
                "https://thevogue.com/"]

                nameResult.innerHTML += "Music & Nightlife: <br>"

                for(var t=0;t<4;t++)
                {
                    nameResult.innerHTML += " " + business_names[t] + " " + business_number[t] + " " + business_address[t] + " " + business_website[t] + "<br>";
                }
            }
            else
            {
                business_names = ["Baby's",
                "Just Pop In Popcorn Cafe and Bar",
                "Kilroy's Bar and Grill",
                "The HandleBar Indy Pedal Pub",
                "The Jazz Kitchen",
                "The Vogue"]
    
                business_number = ["317-600-3559",
                "317-257-9338",
                "317-257-7849",
                "317-620-1448",
                "317-253-4900",
                "317-255-2828"]
    
                business_address = ["2147 N Talbott St, Indianapolis, IN 46202",
                "6406 Cornell Ave Indianapolis, IN 46220",
                "831 Broad Ripple Ave, Indianapolis, IN 46220",
                "501 Madison Ave, Indianapolis, IN 46225",
                "5377 N College Ave, Indianapolis, IN 46220",
                "6259 N College Ave, Indianapolis, IN 46220"]
    
                business_website = ["https://babysindy.com/",
                "https://www.justpopinpopcorn.com/popcorn-cafe",
                "https://www.kilroysindy.com/full-menu/",
                "https://handlebarindy.com/",
                "thejazzkitchen.com",
                "https://thevogue.com/"]

                nameResult.innerHTML += "Music & Nightlife: <br>"

                for(var u=0;u<6;u++)
                {
                    nameResult.innerHTML += " " + business_names[u] + " " + business_number[u] + " " + business_address[u] + " " + business_website[u] + "<br>";
                }
            }

        }

    }

}