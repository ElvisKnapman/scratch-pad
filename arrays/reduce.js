'use strict';

let amounts = [1.20, 5.00, 7.00, 4.30, 15.10, 23.00, 8.75];

// reduce takes an array, runs a function on each element of the array to reduce it to a single output value
let total = amounts.reduce((total, item) => total + item);

console.log(total);
//-> 64.35
