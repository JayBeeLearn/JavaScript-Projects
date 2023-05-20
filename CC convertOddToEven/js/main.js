let p = document.createElement("p");

const oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// const oddNumb = prompt();

// console.log(oddNumb)

// let oddNumbe = oddNumb.split(",");
// console.log(oddNumbe);
// console.log(typeof oddNumbe)

// const oddNumber = Number(oddNumbe)

// console.log(oddNumber)

const evenNumber = [];

for (i = 0; i <= oddNumber.length - 1; i++) {
  evenNumber.push(Number(oddNumber[i] + 1));
}
console.log({ evenNumber });

p.textContent = evenNumber;
console.log(p);

const div = document.querySelector(".div");

div.appendChild(p);

// CHALLENGE TWO

const uName = document.getElementById("name");
const number = document.querySelector("#number");

const result = document.querySelector("#result");

const button = document.getElementById("button");

// console.log(uName.value + number.value);


number.onchange = () => {
    mul = number.value * 1000
    kmToM = mul / 360;
    
    // console.log(kmToM);

  //   result.innerHTML = "hi";
  result.innerHTML = `${uName.value} is driving at the speed of ${kmToM}`;
};


function findSpeed(uName, number) {
    mul = number * 1000;
    // console.log(mul);
    kmToM = mul / 360;
    // console.log(kmToM);
    // console.log(uName)
    // return kmToM
    presult = `${uName} is driving at the speed of ${kmToM} m`
    // console.log(presult);
    return presult;
}

console.log(findSpeed('jay', 10))

let test = 1000 - kmToM

console.log(test)