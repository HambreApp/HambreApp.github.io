//var Restaurants = ["Grana", "Momona", "Gogis", "MadisonBear", "Tres Hombres", "Ali Baba", "Peeking Chinese", "Celestino's Pizza", "Cheese Steakshop", "Great Northern Coffee"]
function Restaurants (name, link) {}

var imgArray[]
imgArray[0] = new Restaurants("Grana", "Grana.jpg")

imgArray[1] = new Restaurants("Momona", "Momona.jpg")

imgArray[2] = new Restaurants("MadisonBear", "MadisonBearGarden.jpg")

imgArray[3] = new Restaurants("Gogis", "GogisCafe.jpg")

imgArray[4] = new Restaurants("CheeseSteakShop", "CheeseSteakShop.jpg")

imgArray[5] = new Restaurants("CelestinosPizza", "CelestinosPizza.jpg")

imgArray[6] = new Restaurants("AliBaba", "AliBaba.jpg")

imgArray[7] = new Restaurants("PeekingChinese", "PeekingChinese.jpg")

imgArray[8] = new Restaurants("TresHombres", "TresHombres.jpg")

imgArray[9] = new Restaurants("GreatNorthernCoffee", "GreatNorthernCoffee.jpg")

/*------------------------------------*/

function nextImage(element)
{
    var imgArray = document.getElementById(element);

    for(var i = 0;i<imgArray.length;i++)
    {
        if(imgArray[i].src == img.src)
        {
            if(i == imgArray.length)
            {
                var j = 0;
                document.getElementById(element).src = imgArray[j].src;
                break;
            }
            else
            var j = i + 1;
            document.getElementById(element).src = imgArray[j].src;
            break;
        }
    }
    
    change.addEventListener('onclick', nextImage);
}
