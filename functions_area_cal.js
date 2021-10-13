/* Challenge: define 3 functions to calculate the areas of 3 different shapes:
1. rectangles - length * width;
2. triangles - base * height / 2;
3. circles - π × radius2.
 */

function calculateRectangleArea(length, width) {
  if (length > 0 && width > 0) {
    return (length * width)
  }

  else {
    return undefined
  }
}

function calculateTriangleArea(base, height) {
  if (base > 0 && height > 0)  {
    return (( base * height ) / 2)
  }

  else {
    return undefined
  }

}

function calculateCircleArea(radius) {
  if (radius > 0 )
    return (Math.PI * radius * radius)
  else {

    return undefined
  }

}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
