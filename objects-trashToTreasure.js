/* Our function will receive two arguments:

1. The first argument, trash, is a string that will tell our function what
type of item is being submitted.
2. The second argument, bins, is an object containing three properties
(waste, recycling, and compost), which hold some numerical value.
Our function must increase the correct value in the bins object, and
then return the newly updated object. */

const smartGarbage = (trash, bins) => {

  if (trash === 'waste') {
    bins['waste']++;
  } else if (trash === 'recycling') {
    bins['recycling']++;

  } else if (trash === 'compost') {
    bins['compost']++;
  }

  return bins;

}
