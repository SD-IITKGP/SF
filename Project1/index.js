if (window.performance) {
   console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
   var randomNumber1 = Math.floor(Math.random()*6+1);
   var imageAddress="images/dice"+randomNumber1+".png"
   document.querySelector(".imgDiv1 img").setAttribute("src",imageAddress);
   var randomNumber2 = Math.floor(Math.random()*6+1);
   var imageAddress="images/dice"+randomNumber2+".png"
   document.querySelector(".imgDiv2 img").setAttribute("src",imageAddress);
   if(randomNumber1>randomNumber2){
     document.querySelector(".refresh").style.display="none";
     document.querySelector(".draw").style.display="none";
     document.querySelector(".player2").style.display="none";
     document.querySelector(".player1").style.display="block";
   }
   else if (randomNumber2===randomNumber1) {
     document.querySelector(".refresh").style.display="none";
     document.querySelector(".draw").style.display="block";
     document.querySelector(".player2").style.display="none";
     document.querySelector(".player1").style.display="none";
   }
   else{
     document.querySelector(".refresh").style.display="none";
     document.querySelector(".draw").style.display="none";
     document.querySelector(".player2").style.display="block";
     document.querySelector(".player1").style.display="none";

   }
}
else{
}
