const body = document.querySelector("body");
const title = document.querySelector("h3");
const bgColor = document.getElementById("bgColor");
const changeBg = document.getElementById("changeBg");
const button = document.querySelector("button");
const txtColor = document.querySelector("#txtColor");

body.style.backgroundColor = "#3938EE";

changeBg.onclick = () => {
  changeBackground();
  changeText();
  changeButton();
};

hexColours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const changeBackground = () => {
  let bgCo = "#";
  for (i = 0; i <= 5; i++) {
    bgCo += hexColours[Math.floor(Math.random() * hexColours.length)];
  }

  body.style.backgroundColor = bgCo;
  button.style.color = bgCo;
  bgColor.textContent = bgCo;
};

const changeText = () => {
  let bgCo = "#";
  for (i = 0; i <= 5; i++) {
    bgCo += hexColours[Math.floor(Math.random() * hexColours.length)];
  }

  txtColor.textContent = bgCo;
  title.style.color = bgCo;
};

const changeButton = () => {
  let bgCo = "#";
  for (i = 0; i <= 5; i++) {
    bgCo += hexColours[Math.floor(Math.random() * hexColours.length)];
  }

  //   title.style.color = bgCo;
  button.style.backgroundColor = bgCo;
  console.log(bgCo);
  //  bgColor.textContent = bgCo;
};

// body.style.color = changeBackground();
// console.log(changeBackground());
