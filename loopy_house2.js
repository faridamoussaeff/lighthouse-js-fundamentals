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