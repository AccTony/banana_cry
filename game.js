const audio = new Audio();
audio.src = "/crying.mp3";
let score = 0;

function popcontrol() {
  score++;
  document.getElementById("banana1").src = "/bananacry.png";

  audio.play();
  audio.volume = 0.1;

  setTimeout(() => {
    document.getElementById("banana1").src = "/banana.png";
  }, 100);

  console.log("click");
  document.getElementById("score").innerHTML = score;
}

const banana = document.getElementById("banana");
banana.addEventListener("click", popcontrol);
document.addEventListener("keyup", popcontrol);
