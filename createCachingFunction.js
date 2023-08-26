// 3
function createCachingFunction() {
    let obj = {};

    return function (key) {
        if (obj.hasOwnProperty(key)) {
            return `${obj[key]} (cached)`;
        }
        obj[key] = key * 2;
        return `${obj[key]} (calculated)`
    }
}

// const cachedCalculation = createCachingFunction(); 
// console.log(cachedCalculation(5)); // Output: 10 (calculated)
// console.log(cachedCalculation(5)); // Output: 10 (cached)
