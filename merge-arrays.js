const merge = (arrayOne, arrayTwo) => {
  const combinedArray = arrayOne.concat(arrayTwo);
  console.log(combinedArray);

  return combinedArray.sort();
}

merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);
merge([ 4 ], [ 2, 5, 8 ]);
merge([ 1, 2, 6 ], []);	
