/*
button3.addEventListener("click",function(){ 
    if (score >= 15 ){
         score*=2;
         document.getElementById("étiquette").innerHTML = "Score "+score;
         console.log(score);
         console.log("le mutiplicateur x2 ");
    }
    
 }); 


 */

var button3 = document.getElementById("multiplicationx2");

var counter = 30;
var intervalId = null;
function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";	
}
function bip() {
    counter--;
    if(counter == 0) finish();
    else {	
        document.getElementById("bip").innerHTML = counter + " secondes restantes";
        
    }	                                         c                
}
function start(){
  intervalId = setInterval(bip, 1000);
}	