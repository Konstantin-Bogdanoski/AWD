/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
let Singleton = (function () {
    return {
        getInstance: function (data) {
            console.log(data + " was created with time [Number: " + Date.now() + "]");
        }
    };
})();

console.log("Testing Singleton");

console.log("Creating i1");
let i1 = Singleton.getInstance("i1");

console.log("Creating i2 at time: " + Date.now());
let i2 = Singleton.getInstance("i2");
console.log("Checking if i1 and i2 are the same variable: " + (i1 === i2).toString());

console.log("Creating i3 in different execution context at time: " + Date.now());
let i3 = Singleton.getInstance("i3");

console.log("Checking if i1 and i3 are the same variable: " + (i1 === i3).toString());
console.log("Checking if i2 and i3 are the same variable: " + (i2 === i3).toString());
console.log("Checking if i1 and i2 are the same variable: " + (i1 === i2).toString());