'use strict'

let arr = [1, 3, 5, 7, 9];

// map runs a function on each element of an array, and returns a new array with those values 
let result = arr.map(num => {
    return num + 1;
});

console.log(result);
