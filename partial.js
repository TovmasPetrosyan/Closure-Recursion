function partial(callback, ...args) {
    return function (...newArgs) {
        return callback(...args, ...newArgs)
    }
}

function add(a, b, c) {
    return a + b + c;
}

//const add5 = partial(add, 5); 
//console.log(add5(10, 20)); // Output: 35 (5 + 10 + 20)
