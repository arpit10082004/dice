var randomnumber= Math.floor(Math.random() *6) + 1;
var imeg1="dice"+randomnumber+".png";
var imgsrc1="images/"+imeg1;
var ch = document.querySelector(".img1").setAttribute("src",imgsrc1);

var randomnumber1= Math.floor(Math.random() *6) +1;
var imeg2="dice"+randomnumber1+".png";
var imgsrc2="images/"+imeg2;
var ch = document.querySelector(".img2").setAttribute("src",imgsrc2);
 
if(randomnumber>randomnumber1){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins ";
}
else if (randomnumber<randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else {
    document.querySelector("h1").innerHTML="DRAW";
}