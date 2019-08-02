// Creates the Restaurants object and applies the attributes to Restaurants
function Restaurants(name, src, cost, link, typeofr, picofrest, chosen) {
this.name = name;
this.src = src;
this.cost = cost;
this.link = link;
this.typeofr = typeofr;
this.picofrest = picofrest;
this.chosen = chosen;
}
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Creates the array of foods for the application
var imgArray = []
imgArray.push(new Restaurants("Grana", "Grana.jpg", 2, "https://www.yelp.com/biz/grana-chico", "Italian", "Grana.jpg", false));
imgArray.push(new Restaurants("Momona", "Momona.jpg", 2, "https://www.yelp.com/biz/momona-chico", "Japanese", "Momona.jpg", false));
imgArray.push(new Restaurants("Madison Bear", "MadisonBearGarden.jpg", 2, "https://www.yelp.com/biz/madison-bear-garden-chico", "American", "MadisonBearGarden.jpg", false));
imgArray.push(new Restaurants("Gogi\'s", "GogisCafe.jpg", 1, "https://www.yelp.com/biz/gogis-cafe-chico", "Indian", "GogisCafe.jpg", false));
imgArray.push(new Restaurants("Cheese Steak Shop", "CheeseSteakShop.jpg", 1, "https://www.yelp.com/biz/the-cheese-steak-shop-chico", "American", "CheeseSteakShop.jpg", false));
imgArray.push(new Restaurants("Ali Baba", "AliBaba.jpg", 1, "https://www.yelp.com/biz/ali-baba-chico", "Mediterranean", "AliBaba.jpg", false));
imgArray.push(new Restaurants("Peeking Chinese", "PeekingChinese.jpg", 1, "https://www.yelp.com/biz/peeking-chinese-restaurants-chico-2", "Chinese", "PeekingChinese.jpg", false));
imgArray.push(new Restaurants("Tres Hombres", "TresHombres.jpg", 2, "https://www.yelp.com/biz/tres-hombres-long-bar-and-grill-chico", "Mexican", "TresHombres.jpg", false));
imgArray.push(new Restaurants("Nash\'s Restaurant", "NashsRestaurant.jpg", 2, "https://www.yelp.com/biz/nashs-restaurant-chico", "American", "NashsRestaurant.jpg", false));
imgArray.push(new Restaurants("Cocodine Thai Cuisine", "CocodineThaiCuisine.jpg", 2, "https://www.yelp.com/biz_photos/cocodine-thai-cuisine-chico", "Oriental", "CocodineThaiCuisine.jpg", false));
imgArray.push(new Restaurants("Crush Italian", "CrushItalian.jpg", 2, "https://www.yelp.com/biz/crush-italian-cuisine-and-lounge-chico", "Italian", "CrushItalian.jpg", false));
imgArray.push(new Restaurants("Burgers and Brew", "BurgersAndBrew.jpg", 2, "https://www.yelp.com/biz/burgers-and-brew-chico-4?osq=Burgers+%26+Brew", "American", "BurgersandBrew.jpg", false));
imgArray.push(new Restaurants("Halo Hawaiian BBQ", "haloHawaiianbbqandpokebar.jpg", 2, "https://www.yelp.com/biz/halo-hawaiian-bbq-and-poke-bar-chico", "Japanese", "haloHawaiianbbqandpokebar.jpg", false));
imgArray.push(new Restaurants("Big Hot Crab", "bigHotCrab.jpg", 2, "https://www.yelp.com/biz/big-hot-crab-chico?osq=big+hot+crab", "Seafood", "bigHotCrab.jpg", false));
imgArray.push(new Restaurants("Sipho\'s Restaurant", "Siphos.jpg", 2, "https://www.yelp.com/biz/siphos-restaurant-and-cafe-chico", "Oriental", "Siphos.jpg", false));
imgArray.push(new Restaurants("Chan Pheng\'s", "ChanPhengs.jpg", 2, "https://www.yelp.com/biz/chan-phengs-mandarin-cuisine-chico?osq=chinese", "Chinese", "ChanPhengs.jpg", false));
imgArray.push(new Restaurants("Amigos De Acapulco", "AmigosDeAcapulco.jpg", 1, "https://www.yelp.com/biz/amigos-de-acapulco-chico?osq=mexican", "Mexican", "AmigosDeAcapulco.jpg", false));
imgArray.push(new Restaurants("Hula\'ss ChineseBBQ", "Hulas.jpg", 2, "https://www.yelp.com/biz/hulas-chinese-bar-b-q-chico-2?osq=chinese", "Chinese", "Hulas.jpg", false));
imgArray.push(new Restaurants("Taj\'s Fine Indian Cuisine", "TajFineIndianCUisine.jpg", 2, "https://www.yelp.com/biz/taj-fine-indian-cuisine-chico?osq=indian", "Indian", "TajFineIndianCuisine.jpg", false));
imgArray.push(new Restaurants("California Pasta Production", "CaliforniaPastaProduction.jpg", 2, "https://www.yelp.com/biz/california-pasta-production-chico?osq=italian", "Italian", "CaliforniaPastaProduction", false));
imgArray.push(new Restaurants("Aztlan Mexican", "Aztlan.jpg", 1, "https://www.yelp.com/biz/aztlan-mexican-restaurant-chico?osq=mexican", "Mexican", "Aztlan.jpg", false));
imgArray.push(new Restaurants("Thai Express", "ThaiExpress.jpg", 1, "https://www.yelp.com/biz/thai-express-chico?osq=thai", "Oriental", "ThaiExpress.jpg", false));
imgArray.push(new Restaurants("Priya", "PriyaIndian.jpg", 2, "https://www.yelp.com/biz/priya-chico?osq=indian", "Indian"));
imgArray.push(new Restaurants("Franky\'s", "Frankys.jpg", 2, "https://www.yelp.com/biz/frankys-chico?osq=italian", "Italian"));
imgArray.push(new Restaurants("Pelican\'s Roost and Chowder", "PelicansRoost.jpg", 2, "https://www.yelp.com/biz/pelicans-roost-and-chowder-house-chico?osq=seafood", "Seafood"));
imgArray.push(new Restaurants("Pueblito Mexican Grill", "PueblitoMexican.jpg", 2, "https://www.yelp.com/biz/pueblito-mexican-grill-durham", "Mexican"));
imgArray.push(new Restaurants("Lucky Poke", "LuckyPoke.jpg", 2, "https://www.yelp.com/biz/lucky-poke-chico-2?osq=poke", "Japanese"));
imgArray.push(new Restaurants("Morning Thunder Cafe", "MorningThunderCafe.jpg", 2, "https://www.yelp.com/biz/morning-thunder-cafe-chico?osq=morning+thunder+cafe", "American"));
imgArray.push(new Restaurants("Aonami Sushi Bar", "Aonami.jpg", 2, "https://www.yelp.com/biz/aonami-chico", "Japanese"));
imgArray.push(new Restaurants("Celestino\'s Pizza", "CelestinosPizza.jpg", 1, "https://www.yelp.com/biz/celestinos-new-york-pizza-chico-2", "Italian"));
imgArray.push(new Restaurants("Kinder\'s", "Kinders.jpg", 2, "https://www.yelp.com/biz/kinders-meats-deli-bbq-chico", "American"));
imgArray.push(new Restaurants("I Fish Poke Bar Thai Kitchen", "IFishPokeBarThaiKitchen.jpg", 2, "https://www.yelp.com/biz/i-fish-poke-bar-thai-kitchen-chico-4", "Japanese"));
imgArray.push(new Restaurants("Happy Garden Restaurant", "HappyGarden.jpg", 1, "https://www.yelp.com/biz/happy-garden-restaurant-chico", "Chinese"));
imgArray.push(new Restaurants("Mekkala Thai Cuisine", "MekkalaThai", 2, "https://www.yelp.com/biz/mekkala-thai-cuisine-chico?osq=thai", "Oriental"));
imgArray.push(new Restaurants("El Guayacan", "ElGuayacan.jpg", 2, "https://www.yelp.com/biz/el-guayacan-mexican-restaurant-chico?osq=mexican", "Mexican"));
imgArray.push(new Restaurants("Ginger\'s'", "Gingers.jpg", 1, "https://www.yelp.com/biz/gingers-chico?osq=chinese", "Chinese"));
imgArray.push(new Restaurants("Leon Bistro", "LeonBistro.jpg", 3, "https://www.yelp.com/biz/leon-bistro-chico?osq=seafood", "Seafood"));
imgArray.push(new Restaurants("Diamond Steakhouse", "DiamondSteakhouse.jpg", 3, "https://www.yelp.com/biz/diamond-steakhouse-chico?osq=seafood", "Seafood"));
imgArray.push(new Restaurants("Sicilian Cafe", "SicilianCafe.jpg", 2, "https://www.yelp.com/biz/sicilian-cafe-chico?osq=seafood", "Seafood"));
imgArray.push(new Restaurants("Guzzetti\'s Indian Food", "Guzzettis.jpg", 1, "https://www.yelp.com/biz/guzzettis-catering-and-indian-food-chico", "Indian"));

/** Totals:
American: 5
Mexican: 5
Italian: 5
Japanese: 5
Chinese: 5
Indian: 3
Oriental: 5
Seafood: 5
Mediterranean: 5
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Creates various counters and
var i = 0;
var counter = 1;
var american = 0;
var mexican = 0;
var italian = 0;
var japanese = 0;
var chinese = 0;
var indian = 0;
var oriental = 0;
var seafood = 0;
var mediterranean = 0;
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Functions for changing images, counting how many times each type of food has been chosen, and resetting the entire application.

function nextImage(){
  if(i == imgArray.length-1){
    i=0;
    document.getElementById("mainImg").src=("images/" +imgArray[i].src);
  }
  else{
    i= i + 1;
    document.getElementById("mainImg").src=("images/" +imgArray[i].src);
   }
 }

function counters(){
  imgArray[i].chosen = true;
  if(imgArray[i].typeofr == "American"){
    american = american + 1;
    console.log("American: " + american);
    if(american >= 3){
      document.getElementById("replace").innerHTML = "<p>Your choices have given you American food! Here is a list of American restuarants in the Chico area! </p><br><p> Please click on the links below to learn more information about the restaurants!</p>";
      window.scrollBy(0, 500)
      for(var j=0; j<imgArray.length; j++){
        if(imgArray[j].typeofr == "American"){
          if(imgArray[j].chosen == true){
            document.getElementById("replace" + counter).innerHTML = "<a class=\"sitelinks\" href=\"" + imgArray[j].link + "\"> " + imgArray[j].name + "</a>" + "<p> The price of " + imgArray[j].name + " is " + imgArray[j].cost + " out of 4, 4 being the most expensive </p>"
            counter = counter + 1;
          }
        }
      }
    }
  }
  else if(imgArray[i].typeofr == "Mexican"){
    mexican = mexican + 1;
    console.log("Mexican: " + mexican);
    if(mexican >= 3){
      document.getElementById("replace").innerHTML = "<p>Your choices have given you Mexican food! Here is a list of Mexican restuarants in the Chico area! </p><br><p> Please click on the links below to learn more information about the restaurants!</p>";
      window.scrollBy(0, 1000)
      for(var j=0; j<imgArray.length; j++){
        if(imgArray[j].typeofr == "Mexican"){
          if(imgArray[j].chosen == true){
            document.getElementById("replace" + counter).innerHTML = "<a class=\"sitelinks\" href=\"" + imgArray[j].link + "\"> " + imgArray[j].name + "</a>" + "<p> The price of " + imgArray[j].name + " is " + imgArray[j].cost + " out of 4, 4 being the most expensive </p>"
            counter = counter + 1;
          }
        }
      }
    }

  }
  else if(imgArray[i].typeofr == "Italian"){
    italian = italian + 1;
    console.log("Italian: " + italian);
    if(italian >= 3){
      document.getElementById("replace").innerHTML = "<p>Your choices have given you Italian food! Here is a list of Italian restuarants in the Chico area! </p><br><p> Please click on the links below to learn more information about the restaurants!</p>";
      window.scrollBy(0, 500)
      for(var j=0; j<imgArray.length; j++){
        if(imgArray[j].typeofr == "Italian"){
          if(imgArray[j].chosen == true){
            document.getElementById("replace" + counter).innerHTML = "<a class=\"sitelinks\" href=\"" + imgArray[j].link + "\"> " + imgArray[j].name + "</a>" + "<p> The price of " + imgArray[j].name + " is " + imgArray[j].cost + " out of 4, 4 being the most expensive </p>"
            counter = counter + 1;
          }
        }
      }
    }

  }
  else if(imgArray[i].typeofr == "Japanese"){
    japanese = japanese + 1;
    console.log("Japanese: " + japanese);
    if(japanese >= 3){
      document.getElementById("replace").innerHTML = "<p>Your choices have given you Japanese food! Here is a list of Japanese restuarants in the Chico area! </p><br><p> Please click on the links below to learn more information about the restaurants!</p>";
      window.scrollBy(0, 500)
      for(var j=0; j<imgArray.length; j++){
        if(imgArray[j].typeofr == "Japanese"){
          if(imgArray[j].chosen == true){
            document.getElementById("replace" + counter).innerHTML = "<a class=\"sitelinks\" href=\"" + imgArray[j].link + "\"> " + imgArray[j].name + "</a>" + "<p> The price of " + imgArray[j].name + " is " + imgArray[j].cost + " out of 4, 4 being the most expensive </p>"
            counter = counter + 1;
          }
        }
      }
    }

  }
  else if(imgArray[i].typeofr == "Chinese"){
    chinese = chinese + 1;
    console.log("Chinese: " + chinese);
    if(chinese >= 3){
      document.getElementById("replace").innerHTML = "<p>Your choices have given you Chinese food! Here is a list of Chinese restuarants in the Chico area! </p><br><p> Please click on the links below to learn more information about the restaurants!</p>";
      window.scrollBy(0, 500)
      for(var j=0; j<imgArray.length; j++){
        if(imgArray[j].typeofr == "Chinese"){
          if(imgArray[j].chosen == true){
            document.getElementById("replace" + counter).innerHTML = "<a class=\"sitelinks\" href=\"" + imgArray[j].link + "\"> " + imgArray[j].name + "</a>" + "<p> The price of " + imgArray[j].name + " is " + imgArray[j].cost + " out of 4, 4 being the most expensive </p>"
            counter = counter + 1;
          }
        }
      }
    }

  }
  else if(imgArray[i].typeofr == "Indian"){
    indian = indian + 1;
    console.log("Indian: " + indian);
    if(indian >= 3){
      document.getElementById("replace").innerHTML = "<p>Your choices have given you Indian food! Here is a list of Indian restuarants in the Chico area! </p><br><p> Please click on the links below to learn more information about the restaurants!</p>";
      window.scrollBy(0, 500)
      for(var j=0; j<imgArray.length; j++){
        if(imgArray[j].typeofr == "Indian"){
          if(imgArray[j].chosen == true){
            document.getElementById("replace" + counter).innerHTML = "<a class=\"sitelinks\" href=\"" + imgArray[j].link + "\"> " + imgArray[j].name + "</a>" + "<p> The price of " + imgArray[j].name + " is " + imgArray[j].cost + " out of 4, 4 being the most expensive </p>"
            counter = counter + 1;
          }
        }
      }
    }

  }
  else if(imgArray[i].typeofr == "Oriental"){
    oriental = oriental + 1;
    console.log("Oriental: " + oriental);
    if(oriental >= 3){
      document.getElementById("replace").innerHTML = "<p>Your choices have given you Oriental food! Here is a list of Oriental restuarants in the Chico area!</p>";
      window.scrollBy(0, 500)
      for(var j=0; j<imgArray.length; j++){
        if(imgArray[j].typeofr == "Oriental"){
          if(imgArray[j].chosen == true){
            document.getElementById("replace" + counter).innerHTML = "<a class=\"sitelinks\" href=\"" + imgArray[j].link + "\"> " + imgArray[j].name + "</a>" + "<p> The price of " + imgArray[j].name + " is " + imgArray[j].cost + " out of 4, 4 being the most expensive </p>"
            counter = counter + 1;
          }
        }
      }
    }

  }
  else if(imgArray[i].typeofr == "Seafood"){
    seafood = seafood + 1;
    console.log("Seafood: " + seafood);
    if(seafood >= 3){
      document.getElementById("replace").innerHTML = "<p>Your choices have given you Seafood! Here is a list of Seafood restuarants in the Chico area!</p>";
      window.scrollBy(0, 500)
      for(var j=0; j<imgArray.length; j++){
        if(imgArray[j].typeofr == "Seafood"){
          if(imgArray[j].chosen == true){
            document.getElementById("replace" + counter).innerHTML = "<a class=\"sitelinks\" href=\"" + imgArray[j].link + "\"> " + imgArray[j].name + "</a>" + "<p> The price of " + imgArray[j].name + " is " + imgArray[j].cost + " out of 4, 4 being the most expensive </p>"
            counter = counter + 1;
          }
        }
      }
    }

  }
  else if(imgArray[i].typeofr == "Mediterranean"){
    mediterranean = mediterranean + 1;
    console.log("Mediterranean: " + mediterranean);
    if(mediterranean >= 3){
      document.getElementById("replace").innerHTML = "<p>Your choices have given you Mediterranean food! Here is a list of Mediterranean restuarants in the Chico area!</p>";
      window.scrollBy(0, 500)
      for(var j=0; j<imgArray.length; j++){
        if(imgArray[j].typeofr == "Mediterranean"){
          if(imgArray[j].chosen == true){
            document.getElementById("replace" + counter).innerHTML = "<a class=\"sitelinks\" href=\"" + imgArray[j].link + "\"> " + imgArray[j].name + "</a>" + "<p> The price of " + imgArray[j].name + " is " + imgArray[j].cost + " out of 4, 4 being the most expensive </p>"
            counter = counter + 1;
          }
        }
      }
    }

  }
  else{
    alert("Warning, something is not working properly.")
    console.log("Warning, something is not working properly.");
  }
}

function reset(){
    american = 0;
    mexican = 0;
    italian = 0;
    japanese = 0;
    chinese = 0;
    indian = 0;
    oriental = 0;
    seafood = 0;
    i=0;
    document.getElementById("mainImg").src=("images/" +imgArray[i].src);
}

function loadphotos(){
      document.getElementById("mainImg").src=("images/" +imgArray[i].src);
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
