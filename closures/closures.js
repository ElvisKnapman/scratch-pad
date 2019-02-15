'use strict';

// example of a closure

function testClosure() {
    let a = 5;

    function inner() {
        console.log(a);
    }

    return inner;
}

const closure = testClosure();

// once the function has returned, 'closure' will be assigned the value of inner and inner will maintain its lexical scope