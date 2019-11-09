/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

let date = Date.now();
let dateCreation;
let dateLastCalled;
let dateNextCalled;
let flag;
window.onload = function () {
    flag = true;
};

function call_func() {
    if (flag) {
        dateCreation = Date.now();
        dateLastCalled = Date.now();
        flag = false;
        console.log("FIRST TIME: " + (dateCreation - date).toString() + "ms ago");
    } else if (dateNextCalled == null) {
        dateNextCalled = Date.now();
        console.log((dateNextCalled - dateLastCalled).toString() + "ms ago");
        dateLastCalled = dateNextCalled;
        dateNextCalled = null;
    }
}