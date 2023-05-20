let result = document.getElementById("result");

let plusButton = document.getElementById("plus");

let minusButton = document.getElementById("minus");

let resetButton = document.getElementById("reset");

let count = 0;

function increaseCount() {
  // alert('hi')
  // result; plusButton; minusButton;
  count++;
  // return count;

  result.innerHTML = count;
}

function decreaseCount() {
  if (count < 1) {
    alert("You can no longer reduce the number");
  } else {
    count--;

    result.innerHTML = count;
  }
}

function resetCount() {
  if (count < 1) {
    alert("The Counter is Already Zero. Try Increasing Again!");
  } else {
    count = 0;
    result.innerHTML = count;
  }
}
