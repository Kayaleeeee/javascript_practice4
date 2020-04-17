const arr_left = document.getElementById("arrow_left");
const arr_right = document.getElementById("arrow_right");
let img = document.querySelectorAll("img");
let current = 0;

function reset() {
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
}

function startSlide() {
  img[0].style.display = "block";
  current = 0;
}

function slideRight(e) {
  reset();
  if (current === img.length - 1) {
    startSlide();
  } else current++;
  img[current].style.display = "block";
}

arr_right.addEventListener("click", slideRight);

function slideLeft() {
  reset();

  if (current === 0) {
    current = img.length - 1;
    img[current].style.display = "block";
  } else current--;
  img[current].style.display = "block";
}

arr_left.addEventListener("click", slideLeft);

startSlide();
