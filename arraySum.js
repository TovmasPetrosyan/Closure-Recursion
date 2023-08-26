//4
const arraySum = (arr, index = 0) => {

    if (arr.length === index) {
        return 0;
    }
    return arr[index] + arraySum(arr, index + 1);
}
//console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15