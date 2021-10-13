/* Challenge to define a function "How Many Hundreds" */

const howManyHundreds = num => {
  const someNum = num % 100 === 0 ? num / 100 : Math.floor(num / 100);
  return someNum;
}

console.log(howManyHundreds(73400));
console.log(howManyHundreds(58693));
console.log(howManyHundreds(1234890974));
