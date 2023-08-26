//6 
function memoize(func) {
    let obj = {};
    return function (key) {
        if (key in obj) {
            return `${obj[key]} (cached)`;
        }
        obj[key] = func(key);
        return `${obj[key]} (calculated)`;
    }
}

  function fibonacci(n) { 
    if(n < 2) return n;    
    return fibonacci(n - 1) + fibonacci(n - 2);
  } 

//const memoizedFibonacci = memoize(fibonacci); 
//console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
//console.log(memoizedFibonacci(10)); // Output: 55 (cached) 
