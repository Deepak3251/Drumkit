var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  if (i == 0) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        let audio = new Audio("sounds/crash.mp3");
        audio.play();
      });
  } else if (i == 1) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        let audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      });
  } else if (i == 2) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        let audio = new Audio("sounds/snare.mp3");
        audio.play();
      });
  } else if (i == 3) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      });
  } else if (i == 4) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        let audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      });
  } else if (i == 5) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        let audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      });
  } else if (i == 6) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        let audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      });
  }
}
