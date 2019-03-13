'use strict'

let ages = [5, 10, 12, 16, 20, 21, 24, 25, 28, 30, 33, 35, 38];

// filter takes an array and returns a new array with the values that pass a condition
let result = ages.filter(age => age >= 18);

console.log(result);
