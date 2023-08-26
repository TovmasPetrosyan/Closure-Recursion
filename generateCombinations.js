//13
const generateCombinations = (arr, num) => {
    if (num === 0) return [[]];
    const newArray = [];
   
        for (let i = 0; i < arr.length; i++) {
            const elem = arr[i];
            const subPermutations = generateCombinations(arr.slice(i + 1), num - 1);
            for (let combination of subPermutations) {
                newArray.push([elem,...combination]);
            }

        }
        return newArray;
    
}

//const inputArray = [1, 2, 3, 4];
//console.log(generateCombinations(inputArray, 3));
//Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
