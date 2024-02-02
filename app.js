// new Audio object
let audio1 = new Audio("sounds/boom.wav");
let audio2 = new Audio("sounds/clap.wav");
let audio3 = new Audio("sounds/hihat.wav");
let audio4 = new Audio("sounds/kick.wav");
let audio5 = new Audio("sounds/openhat.wav");
let audio6 = new Audio("sounds/ride.wav");
let audio7 = new Audio("sounds/snare.wav");
let audio8 = new Audio("sounds/tink.wav");
let audio9 = new Audio("sounds/tom.wav");

// event listener document (keypress)
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    audio1.play();
  } else if (event.key === "b") {
    audio2.play();
  } else if (event.key === "c") {
    audio3.play();
  } else if (event.key === "d") {
    audio4.play();
  } else if (event.key === "e") {
    audio5.play();
  } else if (event.key === "f") {
    audio6.play();
  } else if (event.key === "g") {
    audio7.play();
  } else if (event.key === "h") {
    audio8.play();
  } else if (event.key === "i") {
    audio9.play();
  } else {
    return false;
  }
});
// event listener individual elements (mouse click)
const boom = document.getElementById("boom");
boom.addEventListener("click", () => {
  audio1.play();
});

const clap = document.getElementById("clap");
clap.addEventListener("click", () => {
  audio2.play();
});

const hihat = document.getElementById("hihat");
hihat.addEventListener("click", () => {
  audio3.play();
});

const kick = document.getElementById("kick");
kick.addEventListener("click", () => {
  audio4.play();
});

const openhat = document.getElementById("openhat");
openhat.addEventListener("click", () => {
  audio5.play();
});

const ride = document.getElementById("ride");
ride.addEventListener("click", () => {
  audio6.play();
});

const snare = document.getElementById("snare");
snare.addEventListener("click", () => {
  audio7.play();
});

const tink = document.getElementById("tink");
tink.addEventListener("click", () => {
  audio8.play();
});

const tom = document.getElementById("tom");
tom.addEventListener("click", () => {
  audio9.play();
});
