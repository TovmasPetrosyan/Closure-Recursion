//11
const gcd = (x, y) => {
    if (y != 0) {
        return gcd(y, x % y);
    } else {
        return x;
    }
}

//console.log(gcd(48,18));