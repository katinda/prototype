var button1 = document.getElementById("incrimentation1");
var button2 = document.getElementById("décrimentation-15");
var button3 = document.getElementById("multiplicationx2");
var score = 0;


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
    }
});

// multiplie le scrore de deux points 
button3.addEventListener("click", function () {
    if (score >= 15) {
        score *= 2;
        document.getElementById("étiquette").innerHTML = "Score " + score;
        console.log(score);
        console.log("le mutiplicateur x2 ");
    }

});




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
