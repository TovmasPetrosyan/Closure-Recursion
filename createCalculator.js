//7

function createCalculator(word) {
    switch (word) {
        case "add":
            return function (x, y) {
                return x + y;
            }
        case "multiply":
            return function (x, y) {
                return x * y;
            }
    }

}

//    const add1 = createCalculator("add"); 
//    console.log(add1(3, 5)); // Output: 8 

//   const multiply = createCalculator("multiply"); 
//   console.log(multiply(2, 5)); // Output: 10