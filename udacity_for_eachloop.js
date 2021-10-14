
/* The forEach() method gives you an alternative way to iterate over an array,
and manipulate each element in the array with an inline function expression.*/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

/* Prints:
JELLY DONUT HOLE
CHOCOLATE DONUT HOLE
GLAZED DONUT HOLE */

/* The forEach() method iterates over the array without the need of an explicitly defined index.
In the example above, donut corresponds to the element in the array itself.
This is different from a for or while loop where
an index is used to access each element in the array: */

for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}
