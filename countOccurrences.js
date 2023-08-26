const countOccurrences = (arr, num) => {
    let count = 0;
    if (arr.length === 0) return 0;
    if (arr[0] === num) {
        count = 1;
    }
    return count + countOccurrences(arr.slice(1), num);
}


//const numbers = [2, 3, 4,  5, 2, 6, 2]; 
//console.log(countOccurrences(numbers, 2)); // Output: 4