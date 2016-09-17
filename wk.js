var influencePool = 60
var redInfluence = 0
var redCities = 0
var yellowInfluence = 0
var yellowCities = 0
var greenInfluence = 0
var greenCities = 0
var blueInfluence = 0
var blueCities = 0
var purpleInfluence = 0
var purpleCities = 0
var blackInfluence = 0
var blackCities = 0

$(document).ready(function(){
// Setting influence pool at start of game
influencePool = prompt("How much influence to start game?", 60);
$("#influenceLeft").text(influencePool);

// Code for Score Turn button to score 1 influence per city
$("#turnButton").click(function(){
  redInfluence = redInfluence + redCities;
  $("#redInfluence").text(redInfluence);
  yellowInfluence = yellowInfluence + yellowCities;
  $("#yellowInfluence").text(yellowInfluence);
  greenInfluence = greenInfluence + greenCities;
  $("#greenInfluence").text(greenInfluence);
  blueInfluence = blueInfluence + blueCities;
  $("#blueInfluence").text(blueInfluence);
  purpleInfluence = purpleInfluence + purpleCities;
  $("#purpleInfluence").text(purpleInfluence);
  blackInfluence = blackInfluence + blackCities;
  $("#blackInfluence").text(blackInfluence);
  updateTotals();
})

// Code for updating the projected end-of-game scores
function updateTotals() {
  var update  = influencePool - (redInfluence + yellowInfluence + greenInfluence + blueInfluence + purpleInfluence + blackInfluence);
  $("#influenceLeft").text(update);
  for (var i = 0; i<= 90; i++){
    var redProjected = redInfluence + (redCities * i);
    var yellowProjected = yellowInfluence + (yellowCities * i);
    var greenProjected = greenInfluence + (greenCities * i);
    var blueProjected = blueInfluence + (blueCities * i);
    var purpleProjected = purpleInfluence + (purpleCities * i);
    var blackProjected = blackInfluence + (blackCities * i);
    var totalProjected = redProjected + yellowProjected + greenProjected + blueProjected + purpleProjected + blackProjected;
    if (totalProjected >= influencePool) {
        $("#turnsLeft").text(i);
        $("#redProjected").text(redProjected);
        $("#yellowProjected").text(yellowProjected);
        $("#greenProjected").text(greenProjected);
        $("#blueProjected").text(blueProjected);
        $("#purpleProjected").text(purpleProjected);
        $("#blackProjected").text(blackProjected);
        break;
    }
    $("#turnsLeft").text("??");
    $("#redProjected").text(redInfluence);
    $("#yellowProjected").text(yellowInfluence);
    $("#greenProjected").text(greenInfluence);
    $("#blueProjected").text(blueInfluence);
    $("#purpleProjected").text(purpleInfluence);
    $("#blackProjected").text(blackInfluence);
  }
}

// Code for updating each player's city and influence totals on clicking
$("#redInfluence").click(function(){
  var mod = prompt("How much to change value by?", 0)
  redInfluence = redInfluence + parseInt(mod);
  $("#redInfluence").text(redInfluence);
  updateTotals();
})
$("#redCities").click(function(){
  var mod = prompt("How much to change value by?", 0)
  redCities = redCities + parseInt(mod);
  $("#redCities").text(redCities);
  updateTotals();
})
$("#yellowInfluence").click(function(){
  var mod = prompt("How much to change value by?", 0)
  yellowInfluence = yellowInfluence + parseInt(mod);
  $("#yellowInfluence").text(yellowInfluence);
  updateTotals();
})
$("#yellowCities").click(function(){
  var mod = prompt("How much to change value by?", 0)
  yellowCities = yellowCities + parseInt(mod);
  $("#yellowCities").text(yellowCities);
  updateTotals();
})
$("#greenInfluence").click(function(){
  var mod = prompt("How much to change value by?", 0)
  greenInfluence = greenInfluence + parseInt(mod);
  $("#greenInfluence").text(greenInfluence);
  updateTotals();
})
$("#greenCities").click(function(){
  var mod = prompt("How much to change value by?", 0)
  greenCities = greenCities + parseInt(mod);
  $("#greenCities").text(greenCities);
  updateTotals();
})
$("#blueInfluence").click(function(){
  var mod = prompt("How much to change value by?", 0)
  blueInfluence = blueInfluence + parseInt(mod);
  $("#blueInfluence").text(blueInfluence);
  updateTotals();
})
$("#blueCities").click(function(){
  var mod = prompt("How much to change value by?", 0)
  blueCities = blueCities + parseInt(mod);
  $("#blueCities").text(blueCities);
  updateTotals();
})
$("#purpleInfluence").click(function(){
  var mod = prompt("How much to change value by?", 0)
  purpleInfluence = purpleInfluence + parseInt(mod);
  $("#purpleInfluence").text(purpleInfluence);
  updateTotals();
})
$("#purpleCities").click(function(){
  var mod = prompt("How much to change value by?", 0)
  purpleCities = purpleCities + parseInt(mod);
  $("#purpleCities").text(purpleCities);
  updateTotals();
})
$("#blackInfluence").click(function(){
  var mod = prompt("How much to change value by?", 0)
  blackInfluence = blackInfluence + parseInt(mod);
  $("#blackInfluence").text(blackInfluence);
  updateTotals();
})
$("#blackCities").click(function(){
  var mod = prompt("How much to change value by?", 0)
  blackCities = blackCities + parseInt(mod);
  $("#blackCities").text(blackCities);
  updateTotals();
})
})
