/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
let x = [];

x = [1, 2, 3];
console.log(x);

x[10] = 10;
x[6] = 6;
x[100] = 100;
console.log(x);

x.fillDefault = function () {
    for (let i = 0; i < x.length; i++) {
        if (!x[i])
            x[i] = 0;
    }
};
x.fillDefault();
console.log(x);