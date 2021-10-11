function lastIndexOf(array, val) {
  // To create a reversed array.
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]); }

  for (let j = 0; j < array.length; j++) {
    if (reversedArray[j] === val) {
      return (array.length - 1) - reversedArray.indexOf(val);
    }
  }  
  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1); 
