const calAnswer = document.querySelector("#calAnswer");
const buttons = document.querySelectorAll("button");

letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

for (i = 0; i <= letters.length - 1; i++) {
  letter = letters[i];
  // alert(letter);
}



// LIMITING THE ANSWER
ansLng = calAnswer.value.length;

function limitanswer() {
  if (ansLng < 5) {
    console.log("hi");
  } else {
    console("no");
  }
}

limitanswer();

// "A" || "B" || "C" || "D" || "E" || "F" || "G" || "H"

document.onkeyup = (k) => {
  // alert(k.keyCode);
  keyP = k.keyCode;

  keyPressed = String.fromCharCode(k.keyCode);

  if (keyP == 111) {
    calAnswer.value += "/";
  } else if (keyP == 106) {
    calAnswer.value += "*";
  } else if (keyP == 46) {
    calAnswer.value = "";
  } else if (keyP == 109) {
    calAnswer.value += "-";
  } else if (keyP == 107) {
    calAnswer.value += "+";
  } else if (calAnswer.value != "" && keyP == 13) {
    ans = eval(calAnswer.value);
    if (ans == "Infinity") {
      alert("You cannot divide a number by zero(0)");
    } else {
      calAnswer.value = parseFloat(eval(calAnswer.value)).toFixed(2);
      limitanswer();
    }
  } else if (calAnswer.value != "" && keyP == 8) {
    calAnswer.value = calAnswer.value.toString().slice(0, -1);
  } else if (
    keyPressed == "a" ||
    keyPressed == "b" ||
    keyPressed == "c" ||
    keyPressed == "d" ||
    keyPressed == "e" ||
    keyPressed == "f" ||
    keyPressed == "g" ||
    keyPressed == "g" ||
    keyPressed == "h" ||
    keyPressed == "i" ||
    keyPressed == "j" ||
    keyPressed == "k" ||
    keyPressed == "l" ||
    keyPressed == "m" ||
    keyPressed == "n" ||
    keyPressed == "o" ||
    keyPressed == "p" ||
    keyPressed == "q" ||
    keyPressed == "r" ||
    keyPressed == "s" ||
    keyPressed == "t" ||
    keyPressed == "u" ||
    keyPressed == "v" ||
    keyPressed == "w" ||
    keyPressed == "x" ||
    keyPressed == "y" ||
    keyPressed == "z" ||
    keyPressed == "A" ||
    keyPressed == "B" ||
    keyPressed == "C" ||
    keyPressed == "D" ||
    keyPressed == "E" ||
    keyPressed == "F" ||
    keyPressed == "G" ||
    keyPressed == "H" ||
    keyPressed == "I" ||
    keyPressed == "J" ||
    keyPressed == "K" ||
    keyPressed == "L" ||
    keyPressed == "M" ||
    keyPressed == "N" ||
    keyPressed == "O" ||
    keyPressed == "P" ||
    keyPressed == "Q" ||
    keyPressed == "R" ||
    keyPressed == "S" ||
    keyPressed == "T" ||
    keyPressed == "U" ||
    keyPressed == "V" ||
    keyPressed == "W" ||
    keyPressed == "X" ||
    keyPressed == "Y" ||
    keyPressed == "Z"
  ) {
    calAnswer.value = calAnswer.value;
  } else {
    // alert(keyPressed);

    // alert(keyPressed)
    calAnswer.value += keyPressed;
  }
};

buttons.forEach((item) => {
  test = calAnswer.value.toString();

  item.onclick = () => {
    // divide = eval(1 / 0);
    if (item.id == "backspace") {
      calAnswer.value = calAnswer.value.toString().slice(0, -1);
    } else if (item.id == "clear") {
      calAnswer.value = "";
    } else if (calAnswer.value != "" && item.id == "equal") {
      answer = parseFloat(eval(calAnswer.value)).toFixed(2);
      if (answer == "Infinity") {
        alert("You cannot divide a number by zero(0)");
      } else {
        calAnswer.value = answer;
      }
      // console.log(answer);
    } else if (calAnswer.value == "" && item.id == "equal") {
      calAnswer.value = "";
    } else {
      calAnswer.value += item.id;
    }
  };
});

// function num() {
//   eval(1 / 0);
// }

// num();

// console.log(num);

// buttons.forEach((item) => {
//   item.onclick = () => {
//     if (item.id == "clear") {
//       // innertext wasnt showing here
//       calAnswer.value = "";
//     } else if ((item.id = "backspace")) {
//       let string = calAnswer.value.toString();
//       // could either be -1 or =1
//       calAnswer.value = string.substr(0, string.length - 1);
//     } else if (calAnswer.value != "" && item.id == "equal") {
//       calAnswer.value = eval(calAnswer.value);
//     } else if (calAnswer.value == "" && item.id == "equal") {
//       calAnswer.value = "Empty!";
//       setTimeout(() => (calAnswer.value = ""), 2000);
//     } else {
//       calAnswer.value = item.id;
//     }
//   };
// });
