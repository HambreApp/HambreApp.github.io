//var Restaurants = ["Grana", "Momona", "Gogi's Cafe", "Madison Bear Garden", "Tres Hombres", "Ali Baba", "Peeking Chinese", "Celestino's Pizza", "Cheese Steakshop", "Great Northern Coffee"]

var imgArray = new Restauarants();

imgArray[0] = new Grana();
imgArray[0].src = 'Grana.jpg';

imgArray[1] = new Momona();
imgArray[1].src = 'Momona.jpg';

imgArray[2] = new Gogis();
imgArray[2].src = 'GogisCafe.jpg';

imgArray[3] = new MadisonBear();
imgArray[3].src = 'MadisonBearGarden.jpg';

imgArray[4] = new TresHombres();
imgArray[4].src = 'TresHombres.jpg';

imgArray[5] = new AliBaba();
imgArray[5].src = 'AliBaba.jpg';

imgArray[6] = new PeekingChinese();
imgArray[6].src = 'PeekingChinese.jpg';

imgArray[7] = new Celestinos();
imgArray[7].src = 'CelestinosPizza.jpg';

imgArray[8] = new CheeseSteakShop();
imgArray[8].src = 'CheeseSteakShop.jpg';

imgArray[9] = new GreatNorthernCoffee();
imgArray[9].src = 'GreatNorthernCoffee.jpg';

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

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
    
    change.addEventListener('click', nextPic);
}
