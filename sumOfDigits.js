//10
const sumOfDigits = (number) => {
    `       `
    if (number < 10) return number;
    let lastDigit = number % 10;
    let restDigits = Math.floor(number / 10);
    return lastDigit + sumOfDigits(restDigits);
}

//console.log(sumOfDigits(12345)); // Output: 15
