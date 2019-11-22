/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

let array = [];
array = [1, [2, 3], 3, [4, [5, 6], [6]], [7, [8, [9, [10, [11, [12, [13, [14, [15, [16, [17]]]]]]]]]]]];

array.flattenDeep = function () {
    return array.flat(Infinity);
};
let flattenArray = array.flattenDeep();
console.log(flattenArray);