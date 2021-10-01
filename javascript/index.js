const container = document.querySelector(".discover");

container.onclick = function (event) {
  const id = event.target.dataset.id;
  localStorage.setItem("post", JSON.stringify(id));
};

let left = document.querySelector(".fa-caret-left");
let right = document.querySelector(".fa-caret-right");
let viewport = document.querySelector(".block-container");
const planetViewport = document.querySelector(".planet-viewport");
let viewportWidth = planetViewport.offsetWidth;
let transitionTime = "0.5s";
let width = 110;
let clicks = 0;
let maxClicks = 0;

switch (viewportWidth) {
  case 220:
    maxClicks = 6;
    break;
  case 330:
    maxClicks = 5;
    break;
  case 440:
    maxClicks = 4;
    break;
  case 550:
    maxClicks = 3;
    break;
  case 660:
    maxClicks = 2;
    break;
  case 770:
    maxClicks = 1;
    break;
  case 880:
    maxClicks = 0;
    break;
  default:
    maxClicks = 7;
    break;
}

right.addEventListener("click", function () {
  clicks++;
  width = 110 * clicks;
  if (clicks <= 8 && clicks <= maxClicks) {
    viewport.style.transform = `translate(-${width}px)`;
    viewport.style.transitionDuration = transitionTime;
  }
  else {
    viewport.style.transform = "translate(0px)";
  }

});

left.addEventListener("click", function () {
  clicks--;
  width = 110 * clicks;
  if (clicks <= 8 && clicks <= maxClicks) {
    viewport.style.transform = `translate(-${width}px)`;
    viewport.style.transitionDuration = transitionTime;
  }
  else {
    viewport.style.transform = "translate(0px)";
  }
});