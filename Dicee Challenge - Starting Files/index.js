var randomNumber1 = Math.floor(Math.random() *6)+1;
var randomNumber2 = Math.floor(Math.random() *6)+1;
console.log(randomNumber1);
console.log(randomNumber2);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

 if (randomNumber1 > randomNumber2) {
   console.log("Player One wins");
   document.querySelector("h1").innerHTML=("Player One wins");
 }

else if (randomNumber2 > randomNumber1) {
   console.log("Player Two wins");
   document.querySelector("h1").innerHTML=("Player Two wins");
}
else if (randomNumber1 === randomNumber2) {
   console.log("it was a draw");
    document.querySelector("h1").innerHTML=("It was a draw");
}
