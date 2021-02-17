var button1 = document.getElementById("incrimentation1");
var button2 = document.getElementById("décrimentation-15");
var button3 = document.getElementById("multiplicationx2");
var score = 0;
var autoClick = 0;



// incrémentation de la variable score
button1.addEventListener("click",function(){
    score++;
    document.getElementById("étiquette").innerHTML = "Score "+score;
    console.log(score);
});

// décrémentation de la variable score à chaque fois que le joueur achète un multiplicateur 


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
    }
}





 

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
