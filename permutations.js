//12
const permutations = (str) => {
    let permisions = [];
    if (str.length <= 1) {
        return [str];
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const otherletter = str.slice(0, i) + str.slice(i + 1);
        const subPermutations = permutations(otherletter);
        for (let subPermutation of subPermutations) {
            permisions.push(char + subPermutation);
        }
    }
    return permisions;
}
//console.log(permutations("hello")); 