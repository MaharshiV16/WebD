var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var started = false;
var level = 0;
var randomNumber = Math.floor(Math.random() * 4);
$(document).on("keypress", function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  $("#" + userChosenColor).addClass("pressed");
  setTimeout(function () {
    $("#" + userChosenColor).removeClass("pressed");
  }, 100);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  randomNumber = Math.floor(Math.random() * 4);
  var randomColorChosen = buttonColors[randomNumber];
  gamePattern.push(randomColorChosen);
  $("#" + randomColorChosen)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomColorChosen);
}
