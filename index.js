var randNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage ="dice" + randNumber1 + ".jpg";
var randomImageSource='images/'+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randNumber2 = Math.floor(Math.random() *6)+ 1;
var randomDiceImage2 ="dice" + randNumber2 + ".jpg";  //dicel.jpg   DICE3.JPG
var randomImageSource2 = "images/" + randomDiceImage2 ;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randNumber1> randNumber2){
  document.querySelector("h1").innerHTML ="😍 play 1 win!";
}
else if  (randNumber2> randNumber1){
  document.querySelector ("h1").innerHTML =" play 2 win!😍";
}
else {
  document.querySelector("h1").innerHTML=" Draw!";
}
