const heading = document.querySelector("h1");
// const headBtn = document.querySelector('button');
// const headBtn = document.getElementById("heading");
const headBtn = document.querySelector("#heading");

const input = document.querySelector(".input");

const nextBtn = document.getElementById("next");

const btn = document.querySelectorAll(".btn");

const select = document.querySelector("select");

nextBtn.onclick = () => {
  let controlLogic = false;

  if (controlLogic == false) {
    let yourName;
    yourName = prompt("Enter your name");

    let p = document.createElement("p");
    let t = document.createTextNode(
      `Welcome to DOM Manipulations ${yourName} `
    );

    let pt = p.appendChild(t);

    input.appendChild(pt);
  } else {
    alert("hi");
  }

  // p.setAttribute("class", "try");

  //   input.setAttribute("style", "backgroundColor: red");
};

headBtn.onclick = () => {
  //   alert("hi");
  heading.innerHTML = "My New Heading";
  heading.style.color = "red";
  heading.style.backgroundColor = "black";
  heading.style.textAlign = "center";
  heading.style.fontFamily = "montserrat";
  heading.style.padding = "1rem";
};

let copyOfBtns = [];

for (i = 0; i <= btn.length - 1; i++) {
  copyOfBtns.push(btn[i].classList[1]);
}

console.log(copyOfBtns);

select.onchange = () => {
  let control = select.value;
  // userColour = prompt('Enter a colour of your choice')

  for (i = 0; i <= btn.length - 1; i++) {
    if (control == "red") {
      btn[i].className = "red";
    } else if (control == "blue") {
      btn[i].className = "blue";
    } else if (control == "green") {
      btn[i].className = "green";
    } else if (control == reset) {
      btn[i].classList[1] = copyOfBtns[i];
    }
  }
};

