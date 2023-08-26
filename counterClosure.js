//1
function counter() {
    let count = 0;
    return function () {
        return ++count;
    }
}
// const count = counter();
// console.log(count());
// console.log(count());