// Première fonction qui permet d'afficher le menu
function afficher_menu(id)
{
    //Si le menu est caché, on le rend visible
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('bouton_'+id).innerHTML='=';
    }
    //sinon, on le cache et on met un = à la place
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('bouton_'+id).innerHTML='=';
    }
    return true;
}

// Variables globales
let compteur = 0
let timer, elements, slides, slideWidth

window.onload = () => 
{
    const diapo = document.querySelector(".diapo")
    elements = document.querySelector(".elements")
    slides = Array.from(elements.children)

    // On calcul la largeur des images à défiler
    slideWidth = diapo.getBoundingClientRect().width

    let next = document.querySelector("#droite")
    next.addEventListener("click", slideNext)

    let previous = document.querySelector("#gauche")
    previous.addEventListener("click", slidePrevious)

    //Diaporama automatisé
    timer = setInterval(slideNext, 5000)
}

// On définit slideNext qui change d'image vers la droite
function slideNext()
{
    compteur++
    if (compteur == slides.length) 
    {
        compteur = 0
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}
// On définit slidePrevious qui change d'image vers la gauche
function slidePrevious()
{
    compteur--
    if (compteur < 0) 
    {
        compteur = slides.length - 1
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

//Cela permet de changer la couleur du fond dans la couleur 'color'
function changeColor(color) 
{ 
    document.body.style.background = color; 
}

// Chronomètre
var time = 0;
var running = 0;

function startPause(){
    if(running == 0){
        //On démarre le chronomètre s'il est éteint
        running = 1;
        increment();
    //On définit le style du bouton en conséquence
    document.getElementById("start").innerHTML = "Pause";
    document.getElementById("startPause").style.backgroundColor = "gray";    
    document.getElementById("startPause").style.borderColor = "gray";
    }
    else{
        running = 0;
        // Cas ou l'on peut relancer le chronomètre
    document.getElementById("start").innerHTML = "Resume";  
    document.getElementById("startPause").style.backgroundColor = "lightgray";  
    document.getElementById("startPause").style.borderColor = "lightgray";
    }
}
function reset(){
    running = 0;
    time = 0;
    document.getElementById("start").innerHTML = "Start";
    //On remet le chronomètre à 0
    document.getElementById("output").innerHTML = "0:00:00:00";
    document.getElementById("startPause").style.backgroundColor = "lightgray";  
    document.getElementById("startPause").style.borderColor = "lightgray";
}
function increment(){
    if(running == 1){
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var hours = Math.floor(time/10/60/60); 
            var tenths = time % 10;
            if(mins < 10){
                mins = "0" + mins;
            } 
            if(secs < 10){
                secs = "0" + secs;
            }
            // Le chronomètre ne présente plus de simples 0 mais des variables qui changent toutes les secondes, minutes...
            document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
            increment();
        },100)
    }
}