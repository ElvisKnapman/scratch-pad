'use strict';
// higher order function.. takes callback and two numbers as parameters
function calculator(callback, num1, num2) {
    return callback(num1, num2);
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

// higher order function call
calculator(add, 6, 3); // 9
calculator(subtract, 6, 3); // 3
calculator(multiply, 6, 3); // 18
calculator(divide, 6, 3); // 2
