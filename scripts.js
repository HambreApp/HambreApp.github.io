  function Restaurants(name, src) {
  this.name = name;
  this.src = src;
  }

  var imgArray = []
  imgArray.push(new Restaurants("Grana", "Grana.jpg"));

  imgArray.push(new Restaurants("Momona", "Momona.jpg"));

  imgArray.push(new Restaurants("MadisonBear", "MadisonBearGarden.jpg"));

  imgArray.push(new Restaurants("Gogis", "GogisCafe.jpg"));

  imgArray.push(new Restaurants("CheeseSteakShop", "CheeseSteakShop.jpg"));

  imgArray.push(new Restaurants("CelestinosPizza", "CelestinosPizza.jpg"));

  imgArray.push(new Restaurants("AliBaba", "AliBaba.jpg"));

  imgArray.push(new Restaurants("PeekingChinese", "PeekingChinese.jpg"));

  imgArray.push(new Restaurants("TresHombres", "TresHombres.jpg"));

  imgArray.push(new Restaurants("GreatNorthernCoffee", "GreatNorthernCoffee.jpg"));

  /*------------------------------------*/
  var i =1;
  function nextImage() 
  {
    if(i == imgArray.length)
    {
      i=0;
      document.getElementById("mainImg").src=("images/" +imgArray[i].src);
    }
    else{
      document.getElementById("mainImg").src=("images/" +imgArray[i].src);
  	   i= i + 1;
     }
}
/*-----------------------------------*/
