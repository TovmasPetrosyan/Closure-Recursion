const flattenArray = (arr) => {
    let outPut = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            outPut = outPut.concat(flattenArray(arr[i]));
        } else {
            outPut.push(arr[i]);
        }
    }
    return outPut;
}

//const nestedArray = [1, [2, [3, 4], 5], 6]; 
//console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]