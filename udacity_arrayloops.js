/* To loop through an array, you can use a variable to represent the index
in the array, and then loop over that index to perform
whatever manipulations your heart desires.*/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts);

/* In this example, the variable i is being used to represent each index.
As i is incremented, you are stepping over each element in the array
starting from 0 until donuts.length - 1 (donuts.length is out of bounds).*/
