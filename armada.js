var redScore = 0;
var blueScore = 0;
var margin = 0;

$(document).ready(function(){

$("#redButton").click(function(){
  var scored = prompt("How many points scored?", 0)
  redScore = redScore + parseInt(scored);
  $("#redDisplay").text(redScore);
  checkMargin();
});

$("#blueButton").click(function(){
  var scored = prompt("How many points scored?", 0)
  blueScore = blueScore + parseInt(scored);
  $("#blueDisplay").text(blueScore);
  checkMargin();
});

function checkMargin(){
  margin = redScore - blueScore;
  if (margin >= 300) {
    $("#redVictory").text(10);
    $("#blueVictory").text(1);
  }
  else if (margin >= 220 && margin < 300) {
    $("#redVictory").text(9);
    $("#blueVictory").text(2);
  }
  else if (margin >= 140 && margin < 220) {
    $("#redVictory").text(8);
    $("#blueVictory").text(3);
  }
  else if (margin >= 60 && margin < 140) {
    $("#redVictory").text(7);
    $("#blueVictory").text(4);
  }
  else if (margin >= 1 && margin < 60) {
    $("#redVictory").text(6);
    $("#blueVictory").text(5);
  }
  else if (margin == 0) {
    $("#redVictory").text(5);
    $("#blueVictory").text(5);
  }
  else if (margin <= -1 && margin > -60) {
    $("#redVictory").text(5);
    $("#blueVictory").text(6);
  }
  else if (margin <= -60 && margin > -140) {
    $("#redVictory").text(4);
    $("#blueVictory").text(7);
  }
  else if (margin <= -140 && margin > -220) {
    $("#redVictory").text(3);
    $("#blueVictory").text(8);
  }
  else if (margin <= -220 && margin > -300) {
    $("#redVictory").text(2);
    $("#blueVictory").text(9);
  }
  else if (margin <= 300) {
    $("#redVictory").text(1);
    $("#blueVictory").text(10);
  }
}

})
