const flattenObject = (obj) => {
    let outPut = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                const nestedObj = flattenObject(obj[key]);
                for (let nestedKey in nestedObj) {
                    if (nestedObj.hasOwnProperty(nestedKey)) {
                        outPut[key + '.' + nestedKey] = nestedObj[nestedKey];
                    }
                }
            } else {
                outPut[key] = obj[key];
            }
        }
    }

    return outPut;
}

const nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4,
        },
    },
    g: 5,
};

// const flattenedObject = flattenObject(nestedObject);
// console.log(flattenedObject); /* { 
//   "a": 1, 
//   "b.c": 2, 
//   "b.d.e": 3, 
//   "b.d.f": 4, 
//   "g": 5 
// } */


