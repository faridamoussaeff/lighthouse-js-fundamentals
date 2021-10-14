/* Wrap the code you've written in a function called loopyLighthouse
(range, multiples, words) that you call with 3 parameters.

1. range should be an array of 2 numbers representing the start and end values for the loop.
2. multiples should be an array of 2 numbers representing the multiples you want to replace with words.
3  words should be an array of 2 strings representing the words that will replace the multiples. */


const loopyLighthouse = (range, multiples, words) => {

  let numOne = range[0];
  let numTwo = range[1];
  let multOne = multiples[0];
  let multTwo = multiples[1];
  let numList = []
  let wordOne = words[0];
  let wordTwo = words[1];

  for (let x = numOne; x <= numTwo; x++) {
    numList.push(x);
  }

  for (let i = 0; i < numList.length; i++) {
    if (numList[i] % multOne === 0 && numList[i] % multTwo === 0) {
      console.log(wordOne + wordTwo);
    } else if (numList[i] % multOne === 0) {
      console.log(wordOne);
    } else if (numList[i] % multTwo === 0) {
      console.log(wordTwo);
    } else {
      console.log(numList[i]);
    }

  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
