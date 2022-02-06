const radio_buttons = document.querySelectorAll("input[type='radio']"); // on recupere tout les input de type radio
window.onload = function (){
    radio_buttons.forEach(element => { // on ajout un event listener avec tout les index correspondants à chaques radios
        element.addEventListener('click',function(){goToIndex(element.tabIndex)});
    });
}


const Carousel = document.getElementById("carousel-container");

const Stock = document.getElementById("stock");
const StockImg = Stock.getElementsByTagName('img');

const NextImg = "";
const PreviousImg = "";


function goToIndex(index){
    if (document.getElementById("actual").getElementsByTagName('img')[0].tabIndex < index ) {
        goToNext(index);
    } else if (document.getElementById("actual").getElementsByTagName('img')[0].tabIndex > index) {
        goToPrevious(index)
    } else {
        // on fait rien c'est l'actuel. :)
    }
} 



function goToNext(index){
    var ImgWeNeed = ""; // la ou on va cloner l'image correspondante
    for(var x = 0; x < StockImg.length; x++){
        if (StockImg[x].tabIndex === index){
            ImgWeNeed = StockImg[x].cloneNode(true); // on clone pour eviter de quand on va supprimer ( ligne 47 ) perdre l'image
            ImgWeNeed.classList.add("absolute-right") // add class positionnement l'image à la toute droite de l'actual en position absolue
        }
    }
        // on change les zindex pour que la nouvelle image qui remplace l'ancienne passe par dessus
        document.getElementById("actual").getElementsByTagName('img')[0].style.zIndex = 0;
        ImgWeNeed.style.zIndex = 2;
        document.getElementById("actual").appendChild(ImgWeNeed);
        // on bloque les radios pour ne pas se retrouver avec 50 appels de fonction pendant la transition
        radio_buttons.forEach(element => {
            element.disabled = true;
        });
        setTimeout(function(){ // obligé pour avoir la transition ( cause multi threading de js )
             // on veut juste mettre l'image au bon endroit d'un point de vue front 
            ImgWeNeed.style.transform = "translateX(-100%)"; // on decale de 100% vers la gauche
            setTimeout(function(){
                // on supprime l'ancienne image
               document.getElementById("actual").getElementsByTagName('img')[0].remove();
               // on réactive les radios
                radio_buttons.forEach(element => {
                    element.disabled = false;
                });
            },500)// on atends le temps de la transition pour enlever l'image de debut
        },1) // unité en milliscondes
     
}


// se référencer aux coms de goToNext
function goToPrevious(index){
    var ImgWeNeed = "";
    for(var x = 0; x < StockImg.length; x++){
        if (StockImg[x].tabIndex === index){
            ImgWeNeed = StockImg[x].cloneNode(true);
            ImgWeNeed.classList.add("absolute-left")
        }
    }
    document.getElementById("actual").getElementsByTagName('img')[0].style.zIndex = 0;
    ImgWeNeed.style.zIndex = 2;
    document.getElementById("actual").appendChild(ImgWeNeed);
    radio_buttons.forEach(element => {
        element.disabled = true;
    });
    setTimeout(function(){ // obligé pour avoir la transition
        ImgWeNeed.style.transform = "translateX(100%)";
        setTimeout(function(){
            document.getElementById("actual").getElementsByTagName('img')[0].remove();
            radio_buttons.forEach(element => {
                element.disabled = false;
            });
        },500)// on atends le temps de la transition pour enlever l'image de debut
    },1)
    
}