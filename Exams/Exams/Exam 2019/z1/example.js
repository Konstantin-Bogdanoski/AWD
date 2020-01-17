// TODO: Write the transform_args function
var transform_args = function (func, modifiers_array) {

}


// DO NOT CHANGE AFTER THIS LINE!!!

// Example Test cases

// TEST CASE 1
function double(n) {
    return n * 2
}

function square(n) {
    return n * n
}

let f = function (x, y) {
    return [x, y];
}

var trans_f = transform_args(f, [square, double]);
trans_f(9, 3);  // Returns [81, 6]
trans_f(10, 5); // Returns [100, 10]


// TEST CASE 2
let print_args = function (x, y, z) {
    console.log(x, y, z)
}

function str_trim(str) {
    return str.trim()
}

var trans_print_arg = transform_args(print_args, [Math.sqrt, parseInt, str_trim])

trans_print_arg(9, "101.65", "   Trim ME!!!   ")

// Logs in console:
// 3
// 101
// "Trim ME!!!"
