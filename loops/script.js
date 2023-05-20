const dateOfBirth = [1976, 1996, 1945, 1999, 2005, 1987, 1951, 2000];

// let dateOfBirthValue = prompt('Enter date of birth');

// dateOfBirth.push(dateOfBirthValue);

// alert(dateOfBirth);
let ages = [];

let currentYear = 2023;

for (i = 0; i <= dateOfBirth.length - 1; i++) {
  let age;
  age = currentYear - dateOfBirth[i];
  console.log(age);

  ages.push(age);
}

console.log(ages);
// alert(ages);
