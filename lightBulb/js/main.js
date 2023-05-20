const bulb = document.getElementById("bulb");

const switchControl = document.querySelector(".switch");

switchControl.addEventListener("click", function () {
  if (switchControl.classList[1] != "on") {
    switchControl.classList.remove("off");
    switchControl.classList.add("on");
    bulb.classList.remove("bulb-on");
    bulb.classList.add("bulb-off");
  } else {
    switchControl.classList.remove("on");
    switchControl.classList.add("off");
    bulb.classList.remove("bulb-off");
    bulb.classList.add("bulb-on");
  }
});
