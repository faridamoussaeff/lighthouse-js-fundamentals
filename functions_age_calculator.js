/* Challenge - create a function to determine someone's age
Define a function called ageCalculator. This function should take 3 parameters
1. name - a string representing someone's name;
2. yearOfBirth - a number representing their year of birth;
3. currentYear - a number representing the current year */

let name = '';
let currentYear = 2021;
let yearOfBirth = 2010;

const ageCalculator = (name, yearOfBirth, currentYear) => {

  let age = currentYear - yearOfBirth

  return `${name} is ${age} years old.`;
}
console.log(ageCalculator('Miranda', 1983, 2000));
console.log(ageCalculator('Jennifer', 1990, 2021));
