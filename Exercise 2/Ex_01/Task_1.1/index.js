/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
let mainArr = [1, [2, 3], 3, [4, [5, 6], [6]], [7, [8, [9, [10, [11, [12, [13, [14, [15, [16, [17]]]]]]]]]]]];

function flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next))
            stack.push(...next);
        else
            res.push(next);
    }
    return res.reverse();
}

window.onload = function () {
    document.getElementById("mainArray").innerHTML = JSON.stringify(mainArr);
    document.getElementById("cleanArray").innerHTML = JSON.stringify(flatten(mainArr));
};