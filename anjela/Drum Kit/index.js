var i = 0;
while (i < document.querySelectorAll(".drum").length) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
  i++;
}

// document.addEventListener("keydown", keypressed);

// function keypressed() {
//   audioplayer(event.key);
// }

document.addEventListener("keydown", function (evt) {
  audioplayer(evt.key);
  animate(evt.key);
});

function handleClick() {
  audioplayer(this.textContent);
  animate(this.textContent);
}
function audioplayer(value) {
  switch (value) {
    case "w":
      var audioPlay = new Audio("sounds/crash.mp3");
      audioPlay.play();
      break;
    case "a":
      var audioPlay = new Audio("sounds/kick-bass.mp3");
      audioPlay.play();
      break;
    case "s":
      var audioPlay = new Audio("sounds/snare.mp3");
      audioPlay.play();
      break;
    case "d":
      var audioPlay = new Audio("sounds/tom-1.mp3");
      audioPlay.play();
      break;
    case "j":
      var audioPlay = new Audio("sounds/tom-2.mp3");
      audioPlay.play();
      break;
    case "k":
      var audioPlay = new Audio("sounds/tom-3.mp3");
      audioPlay.play();
      break;
    case "l":
      var audioPlay = new Audio("sounds/tom-4.mp3");
      audioPlay.play();
      break;
    default:
      console.log(this.textContent);
      break;
  }
}

function animate(presentkey) {
  document.querySelector("." + presentkey).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + presentkey).classList.remove("pressed");
  }, 200);
}
