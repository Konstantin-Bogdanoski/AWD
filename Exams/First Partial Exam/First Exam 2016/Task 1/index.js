/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

let dragon = function (name, size, element, baby) {
    return name + " is a " + size + " dragon that breaths " + element + " and " + baby;
};

let append = function (func, num, args) {
    return function (x) {
        args.push(x);
        if (num === func.length)
            return func(...args);
        return append(func, num + 1, args);
    }
};

let curry = function (func) {
    if (func.length <= 1)
        return func();
    const args = [];
    return append(func, 1, args);
};

let curriedDragon = curry(dragon);
console.log(curriedDragon("What")("It")("Do")("Baby"));