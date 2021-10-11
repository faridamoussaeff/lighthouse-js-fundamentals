const howManyHundreds = num => {
  const someNum = num % 100 === 0 ? num / 100 : Math.floor(num / 100); 
  return someNum;
}

console.log(howManyHundreds(73400));