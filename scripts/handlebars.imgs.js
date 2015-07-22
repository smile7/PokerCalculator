window.onload = function () {
    var cards = [{
        name: "Ac",
        image: "imgs/1.png"
    } , {
        name: "Kc",
        image: "imgs/5.png"
    } , {
        name: "Qc",
        image: "imgs/9.png"
    } , {
        name: "Jc",
        image: "imgs/13.png"
    } , {
        name: "10c",
        image: "imgs/17.png"
    } , {
        name: "9c",
        image: "imgs/21.png"
    } , {
        name: "8c",
        image: "imgs/25.png"
    } , {
        name: "7c",
        image: "imgs/29.png"
    } , {
        name: "6c",
        image: "imgs/33.png"
    } , {
        name: "5c",
        image: "imgs/37.png"
    } , {
        name: "4c",
        image: "imgs/41.png"
    } , {
        name: "3c",
        image: "imgs/45.png"
    } , {
        name: "2c",
        image: "imgs/49.png"
    } , {

        name: "Ad",
        image: "imgs/4.png"
    } , {
        name: "Kd",
        image: "imgs/8.png"
    } , {
        name: "Qd",
        image: "imgs/12.png"
    } , {
        name: "Jd",
        image: "imgs/16.png"
    } , {
        name: "10d",
        image: "imgs/20.png"
    } , {
        name: "9d",
        image: "imgs/24.png"
    } , {
        name: "8d",
        image: "imgs/28.png"
    } , {
        name: "7d",
        image: "imgs/32.png"
    } , {
        name: "6d",
        image: "imgs/36.png"
    } , {
        name: "5d",
        image: "imgs/40.png"
    } , {
        name: "4d",
        image: "imgs/44.png"
    } , {
        name: "3d",
        image: "imgs/48.png"
    } , {
        name: "2d",
        image: "imgs/52.png"
    }, {

        name: "As",
        image: "imgs/2.png"
    } , {
        name: "Ks",
        image: "imgs/6.png"
    } , {
        name: "Qs",
        image: "imgs/10.png"
    } , {
        name: "Js",
        image: "imgs/14.png"
    } , {
        name: "10s",
        image: "imgs/18.png"
    } , {
        name: "9s",
        image: "imgs/22.png"
    } , {
        name: "8s",
        image: "imgs/26.png"
    } , {
        name: "7s",
        image: "imgs/30.png"
    } , {
        name: "6s",
        image: "imgs/34.png"
    } , {
        name: "5s",
        image: "imgs/38.png"
    } , {
        name: "4s",
        image: "imgs/42.png"
    } , {
        name: "3s",
        image: "imgs/46.png"
    } , {
        name: "2s",
        image: "imgs/50.png"
    } , {

        name: "Ah",
        image: "imgs/3.png"
    } , {
        name: "Kh",
        image: "imgs/7.png"
    } , {
        name: "Qh",
        image: "imgs/11.png"
    } , {
        name: "Jh",
        image: "imgs/15.png"
    } , {
        name: "10h",
        image: "imgs/19.png"
    } , {
        name: "9h",
        image: "imgs/23.png"
    } , {
        name: "8h",
        image: "imgs/27.png"
    } , {
        name: "7h",
        image: "imgs/31.png"
    } , {
        name: "6h",
        image: "imgs/35.png"
    } , {
        name: "5h",
        image: "imgs/39.png"
    } , {
        name: "4h",
        image: "imgs/43.png"
    } , {
        name: "3h",
        image: "imgs/47.png"
    } , {
        name: "2h",
        image: "imgs/51.png"
    }];

    var cardsListContainer = document.getElementById('cards');

    var cardsListTemplate = Handlebars.compile((document.getElementById('cards-template')).innerHTML);

    // empty the container
    while (cardsListContainer.firstChild) {
        cardsListContainer.removeChild(cardsListContainer.firstChild);
    }

    cardsListContainer.innerHTML = cardsListTemplate({
        cards: cards
    });
};