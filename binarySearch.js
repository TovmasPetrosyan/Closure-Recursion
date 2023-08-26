const binarySearch = (sortArr, num, firstInd = 0, lastInd = sortArr.length - 1) => {
    if (firstInd > lastInd) return -1;
  
    let middle = Math.floor((lastInd + firstInd) / 2);
  
    if (sortArr[middle] === num) return middle;
  
    if (sortArr[middle] < num) {
      return binarySearch(sortArr, num, middle + 1, lastInd);
    } else {
      return binarySearch(sortArr, num, firstInd, middle - 1);
    }
  };


//const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]; 
//console.log(binarySearch(sortedArray, 9)); // Output: 4
//console.log(binarySearch(sortedArray, 10)); // Output: -1