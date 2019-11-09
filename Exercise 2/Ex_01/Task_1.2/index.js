/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
window.onload = function () {
    let arr1 = [1, [2, 3], 3, [4, [5, 6], [6]], [7, [8, [9, [10, [11, [12, [13, [14, [15, [16, [17]]]]]]]]]]]];
    let arr2 = [1, [2, 3], 3, [4, [15, 56], [7]], [78, [1, [92, [110, [211, [312, [413, [514, [151, [16, [17]]]]]]]]]]]];
    difference(arr1, arr2);
};

function flatten(input) {
    const stack = [...input];
    debugger
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

function difference(arr1, arr2) {
    let cleanArr1 = flatten(arr1);
    let cleanArr2 = flatten(arr2);
    let diff = Array();
    cleanArr1.forEach(num => {
        if (!diff.includes(num))
            diff.push(num);
    });
    cleanArr2.forEach(num => {
        if (!diff.includes(num))
            diff.push(num);
    });

    console.log("ARR1: ", JSON.stringify(arr1));
    console.log("ARR2: ", JSON.stringify(arr2));
    console.log("CleanARR1: ", JSON.stringify(cleanArr1));
    console.log("CleanARR2: ", JSON.stringify(cleanArr2));
    console.log("DIFFERENCE: ", JSON.stringify(diff));
}