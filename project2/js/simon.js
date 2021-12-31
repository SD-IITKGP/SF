// level
var i;
// answer
var answer=[];
var userAnswer=[];
// flag
var flag=0;
function playsound(call) {
  if ($(call).hasClass("green") === true) {
    var sound = new Audio("sounds/green.mp3");
    sound.play();
    $(call).fadeOut().fadeIn();
  } else if ($(call).hasClass("red") === true) {
    var sound = new Audio("sounds/red.mp3");
    sound.play();
    $(call).fadeOut().fadeIn();
  } else if ($(call).hasClass("yellow") === true) {
    var sound = new Audio("sounds/yellow.mp3")
    sound.play();
    $(call).fadeOut().fadeIn();
  } else {
    var sound = new Audio("sounds/blue.mp3")
    sound.play();
    $(call).fadeOut().fadeIn();
  }
}
// click
$(".div").on("click", function() {
  playsound(this);
  if ($(this).hasClass("green") === true) {
    userAnswer.push(1);
  } else if ($(this).hasClass("red") === true) {
    userAnswer.push(2);
  } else if ($(this).hasClass("yellow") === true) {
    userAnswer.push(3);
  } else {
    userAnswer.push(4);
  }
  if(userAnswer.length===answer.length){
    checkAnswer();
  }
});
// adding levels
function run() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  answer.push(randomNumber);
  switch (randomNumber) {
    case 1:
      playsound($(".green"));

      break;
    case 2:
      playsound($(".red"));
      break;
    case 3:
      playsound($(".yellow"));
      break;
    default:
      playsound($(".blue"));
    }
}

// checking Ans and adding levels
function checkAnswer(){
  for(var j=0;j<answer.length;j++){
  if(userAnswer[j]===answer[j]){
    continue;
  }
  else{
    $("h1").text("Wrong Answer. Please press 'Enter' to restart the game.");
    flag=0;
    answer=[];
    userAnswer=[];
    $("body").addClass("bgColor");
    break;
  }
}
  if(flag===1){
    i+=1;
    $("h1").text("Level"+i);
    userAnswer=[];
    setTimeout(function(){run();},400);
  }
}
// game code
$(document).on("keypress", function(event) {
  if(flag===0){
  if (event.keyCode == 13) {
    i=1;
    $("body").removeClass("bgColor");
    $("h1").text("Level"+i);
    run();
    flag=1;
  }
}
});
