var Timer = 60;
var score = 0;
var hitrn;
let scorebox = document.querySelector("#Score");

let Start = document.createElement("div");
Start.innerHTML = `Start`;
Start.setAttribute("id", "ready");
document.querySelector("#pbtm").appendChild(Start);

Start.addEventListener("click", () => {
  startTimer();
  makeBubble();
  getHitNumebr();
  runGame();
});

let startAgain = document.createElement("div");
startAgain.innerHTML = `NewGame`;
startAgain.setAttribute("id", "ready");

function getHitNumebr() {
  hitrn = Math.floor(Math.random() * 10);
  document.getElementById("hit").innerHTML = `${hitrn}`;
}

function makeBubble() {
  let clutter = "";
  for (let index = 1; index <= 119; index++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function increaseScore() {
  score += 10;
  scorebox.textContent = score;
}

function startTimer() {
  const timerVal = setInterval(() => {
    if (Timer > 0) {
      Timer--;
      document.querySelector("#timer").innerHTML = Timer;
    } else {
      clearInterval(timerVal);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h2>Game Over score ${score}</h2>`;
      document.querySelector("#pbtm").appendChild(startAgain);
    }
  }, 1000);
}

const newGame = () => {
  score = 0;
  scorebox.textContent = score;
  Timer = 60;
  startTimer();
  makeBubble();
  getHitNumebr();
  runGame();
};

function runGame(dets) {
  let checkNUm = Number(dets.target.textContent);
  if (checkNUm === hitrn) {
    increaseScore();
    makeBubble();
    getHitNumebr();
  }
}

startAgain.addEventListener("click", newGame);

document.querySelector("#pbtm").addEventListener("click", runGame);

/* update this program

you have to add start game button then game should start 
and restart button also 
add more functionality
         done
*/
