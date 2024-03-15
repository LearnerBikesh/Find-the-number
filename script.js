const scoreEl = document.querySelector("#score");
const hitEl = document.querySelector(".hit");

let hit;
let score = 0;

function init() {
  let timeVal = 30;
  let time;
  makebubbles();
  timer(timeVal, time);

  // Event bubble
  score = 0;
  scoreEl.textContent = score;
  document.querySelector(".pbottom").addEventListener("click", update);
  updatehit();
}

// starter function
init();

function updatehit() {
  hit = Math.floor(Math.random() * 10);
  hitEl.textContent = hit;
}

function makebubbles() {
  let bubbles = "";
  for (var i = 0; i < 200; i++) {
    let ran = Math.floor(Math.random() * 10);
    bubbles += `<div class= "bubble flex"> ${ran} </div>`;
  }
  document.querySelector(".pbottom").innerHTML = bubbles;
}

function timer(timeVal, time) {
  time = setInterval(function () {
    if (timeVal > 0) {
      timeVal--;
      document.querySelector("#timer").innerHTML = timeVal;
    } else {
      clearInterval(time);
      document.querySelector(
        ".pbottom"
      ).innerHTML = `<h1 class = "center" >Game Over<h1>`;
      document.querySelector(".hit").innerHTML = "";
      document.querySelector(".pbottom").removeEventListener("click", update);
    }
  }, 1000);
}

function update(detail) {
  // detail here is pointer event
  let selected = Number(detail?.target?.textContent);
  if (hit == selected) {
    score += 10;
  } else {
    score -= 10;
  }

  scoreEl.textContent = score;
  makebubbles();
  updatehit();
}

// new Game button logic
document.querySelector(".newGame").addEventListener("click", () => {
  init();
});
