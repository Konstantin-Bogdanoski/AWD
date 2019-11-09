/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

function showString() {
    let x = 1;
    document.getElementById("data").textContent = "What it do baby? + integer: " + x;
    document.getElementById("hiddenButton").style.display = "none";
}

function showFive() {
    document.getElementById("data").innerHTML = (5).toString();
    document.getElementById("hiddenButton").style.display = "inline";
}

function addFive() {
    let x = parseInt(document.getElementById("data").textContent);
    x += 5;
    document.getElementById("data").textContent = x.toString();
}

function helloWorld() {
    let hello = "Hello ";
    document.getElementById("data").innerText = (hello + "World");
}