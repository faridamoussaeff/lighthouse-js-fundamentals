let name = ''
let currentYear = 2020
let yearOfBirth = 2010

const ageCalculator = (name, yearOfBirth, currentYear) => {

  let age = currentYear - yearOfBirth

  return `${name} is ${age} years old.`;
}

console.log(ageCalculator('Jennifer', 1990, 2020)); 