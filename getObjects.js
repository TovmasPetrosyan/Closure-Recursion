//2
function privateVariable(x) {
    let _a = x;
    return ob = {
        get: function () {
            return _a;
        },
        set: function (b) {
            _a = b;
            return _a;
        }
    }

}


//  const secretValue = privateVariable(42); 
//  console.log(secretValue.get()); // Output: 42 
//  secretValue.set(100); 
//  console.log(secretValue.get()); // Output: 100
