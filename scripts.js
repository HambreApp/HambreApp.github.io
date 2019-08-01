//var Restaurants = ["Grana", "Momona", "Gogis", "MadisonBear", "Tres Hombres", "Ali Baba", "Peeking Chinese", "Celestino's Pizza", "Cheese Steakshop", "Great Northern Coffee"]
function Restaurants(name, link) {}

var imgArray = new Array();
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

function nextImage()
{

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
