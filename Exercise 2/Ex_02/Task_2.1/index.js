/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

let fibCurr = 1;
let fibPrev = 1;

function fib() {
    fibonaci(fibPrev, fibCurr);
}

function fibonaci(prev, curr) {
    let fibNext = prev + curr;
    fibPrev = curr;
    fibCurr = fibNext;
    document.getElementById("fib").innerHTML += (", " + fibCurr);
}