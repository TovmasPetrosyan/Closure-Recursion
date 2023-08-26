//8

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...otherArgs) {
                return curried(...args, ...otherArgs);
            }
        }

    }
}

function add(x, y, z) {
    return x + y + z;
}


// const curriedAdd = curry(add); 
// console.log(curriedAdd(1)(2)(5)); // Output: 8
// console.log(curriedAdd(1, 2)(3)); // Output: 6
// console.log(curriedAdd(1, 2, 3)); // Output: 6