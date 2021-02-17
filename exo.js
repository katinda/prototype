var button1 = document.getElementById("incrimentation1");
var button2 = document.getElementById("décrimentation-15");
var button3 = document.getElementById("multiplicationx2");
var score = 0;
var autoClick = 0;



// incrémentation de la variable score
button1.addEventListener("click", function () {
    score++;
    document.getElementById("étiquette").innerHTML = "Score " + score;
    console.log(score);
});

//sons lors du clic
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
function doubleClick() {
    var click_2 = document.getElementById("audio2");
    click_2.play();
}

// décrémentation de la variable score à chaque fois que le joueur achète un multiplicateur 
 hugo


//

 
 /*Comptage de points */      

function update2() {
    document.getElementById("incrimentation1").value = score;
    document.title = score + "Score";
    document.getElementById("multiplicationx2").innerHTML = "Congratulation! you own" + autoClick + "auto click button(s).";
    document.getElementById("étiquette").innerHTML = ((autoClick +1) *150) + "Score";

    document.getElementById('nombreMultiplicateur').innerHTML = "Multiplier Upgrade ! Start clicking" 
        document.getElementById('multiplicationx2').innerHTML = "x" + (multiplier+1);
        document.getElementById('coutMultiplicateur').innerHTML = ((multiplier+1) * 150) + " Cookies";
        
}



        
/* Le joueur achète un auto-clicker, il perd 150 point et en gagne un par seconde */

    
var autoClick = document.getElementById("décrimentation-15")
        
let autoClicker = setInterval (function(){
    autoClick.click();
}, 1000)

function buyAutoClicker(){
    document.getElementById("décrimentation-15").addEventListener("click", function (){
        autoClicker.concol.log = autoClicker;
    })
    if (score >= 150) {
        score = score - ((autoClick+1) *15);
        autoClick = autoClick +1;
        update2()
        return true;
        
    }
    else if (score <=((score-1) *15)){
        return false;

button2.addEventListener("click", function () {
    if (score >= 15 && score < 100) {
        score -= 15;
        document.getElementById("étiquette").innerHTML = "Score " + score;
        console.log(score);
    }
    // si le score vaut 100 ou + de 100 score a l'achat du multiplacteur vaudra  50 score et ceux jusqu'à 200 secore
    else if (score >= 100 && score < 200) {
        score -= 50;
        document.getElementById("étiquette").innerHTML = "Score " + score;
        console.log(score);
    }
    // si le score vaut 200 ou + de 200 score a l'achat du multiplacteur vaudra  50 score et ceux jusqu'à 250 secore
    else if (score >= 200 && score < 250) {
        score -= 100;
        document.getElementById("étiquette").innerHTML = "Score " + score;
        console.log(score);
 main
    }
}





 hugo
 

/* Le joueur achète le bonus, il double sont click pour 30s et perd 300 points */
var multiplicateur = 1;
function buyBonus() {
    document.getElementById("multiplicationx2").addEventListener("click", () => {

/* Ajout du timer au moment du click */
const time = document.querySelector('h2')
let timeSecond = 30;
time.innerHTML= timeSecond;

const countdown = setInterval (() => {
timeSecond --;
time.innerHTML = timeSecond
    
if (timeSecond <= 0 || timeSecond <1) {
        clearInterval(countdown);
    }
}, 1000)
        
/* Effet de l'acaht du bonus*/
if (timeSecond >= 0 || timeSecond > 1) {
        
        
}
        
    

// multiplie le scrore de deux points 
button3.addEventListener("click", function () {
    if (score >= 15) {
        score *= 2;
        document.getElementById("étiquette").innerHTML = "Score " + score;
        console.log(score);
        console.log("le mutiplicateur x2 ");
    }

});

 main



   // code pour incrémenté automatiquement 
/*	var score=0;
    function augmenter() {
        score++;
        document.getElementById("étiquette").innerHTML = score;
    }
    setInterval("augmenter()", 1000);
*/



// je n'arrive pas a  incrémenter le multiplicateur 
// le bouton 2 et 3 doivent etre ensemble 
// normalement le bouton2 devrait fonctionner automatiquement avec le button3
// étape 9 non fait : pas compris consigne 
