var toPlace,
    isThereACard = false;

function placeCard(img) {
    if(img.className == "closed") {
        toPlace = img;
        isThereACard = false;
    }
    if(img.className == "cards" && isThereACard == false) {
        isThereACard = true;
        toPlace.src = img.src;
        img.style.visibility = "hidden";

        // returns the card in the deck
        toPlace.addEventListener("click", function () {
            toPlace.src = "imgs/closed.png";
            img.style.visibility = "visible";
            isThereACard = false;
        });
    }
}