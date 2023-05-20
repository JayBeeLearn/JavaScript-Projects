let numbers = [1, 2, 3, 4, 5, 6, 7];

let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const buttons = document.querySelectorAll("button");

oddNumbers.forEach(oddnumber => {
    console.log(oddnumber + 1)
})

numbers.forEach(multiplyNumbers);

function multiplyNumbers(number) {
    // console.log(number *2)
}

buttons.forEach((button) => {
  button.onclick = () => {
    alert(button.id);
  };
});

multiNum = numbers.forEach((number, index) => {
  // console.log(`index of ${index} = ${number * 2} `)
  // console.log(number * 2)
});

numbers.forEach((number, index) => {
  //   console.log(`index of ${index} = ${number * 2} `);
  //   console.log(number * 2);
});

// console.log(multiNum);

mulNumb = numbers.map((number) => {
  return number * 2;
  // console.log(mulNum)
});

// console.log(mulNumb)

// let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

oddNumbers.forEach((number) => {
  //    console.log(number + 1);
});

oddNumbers
  .map((number) => {
    return number + 1;
  })
  .forEach((number) => {
    if (number <= 10) {
      //    console.log(number)
    }
  });

evenNumbers = oddNumbers.map((number) => {
  return number + 1;
});

//  console.log(evenNumbers)

length;