//14
const subsetSum = (arr,sum) =>{
    let n = arr.length
    if (sum === 0) {
        return true;
      } else if (n === 0) {
        return false;
      } else {
        return subsetSum(arr.slice(1), n - 1, sum) ||
        subsetSum(arr.slice(1), n - 1, sum - arr[0]);
      }
}



//const inputArray = [2, 4, 6, 8]; 
//console.log(inputArray.slice(1));
//console.log(subsetSum(inputArray, 10)); // Output: true

//console.log(typeof subsetSum);
