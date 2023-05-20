const inputBtn = document.getElementById("input");
const liTry = document.getElementById("liTry");
const submitBtn = document.getElementById("submit");
const displayBox = document.querySelector(".display");
const hideBtn = document.querySelector("#hide");
const showBtn = document.querySelector("#show");

submitBtn.onclick = () => {
  let todo = inputBtn.value;
  // ol = document.createElement("ol");
  li = document.createElement("p");
  li.className = "try";
  // list = ol.appendChild(li);
  //   userTodo = list.innerText = todo;
  li.innerText = todo;
  displayBox.appendChild(li);
    inputBtn.value = "";
    document.querySelector('body').style.backgroundColor = 'green'

//   console.log(li);
};

hideBtn.onclick = () => {
  const showText = document.querySelector(".try");

//   alert("hi");
    showText.className = "hide";
    document.querySelector("body").style.backgroundColor = "pink";
    
//   console.log(showText);
};

showBtn.onclick = () => {
  const showText = document.querySelector(".hide");

    showText.className = "try";
    document.querySelector("body").style.backgroundColor = "green";


//   showText.className.remove("hide");
//   console.log(displayBox.classList);
};

// console.log(displayBox);
