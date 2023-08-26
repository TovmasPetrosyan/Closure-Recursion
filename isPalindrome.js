//5
const isPalindrome = (str) => {
    if (str.length <= 0) return true;
    let firstLetter = str[0].toLowerCase();
    let lastLetter = str[str.length - 1].toLowerCase();
    if (firstLetter != lastLetter) return false;
    return isPalindrome(str.slice(1, -1));
}

//console.log(isPalindrome("racecar")); // Output: true
//console.log(isPalindrome("hello")); // Output: false