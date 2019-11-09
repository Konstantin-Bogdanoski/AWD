/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
let cars = ["BMW", "Mercedes", "Audi", "KIA", "Toyota"];
let num = [];
let size = (Math.random() * 20) + 1;
for (let i = 0; i < size; i++)
    num.push(Math.round((Math.random() * 100) + 1));

function showData() {
    document.getElementById("cars").innerHTML = "";
    cars.forEach(printArray);
    document.getElementById("num").innerText = num.toString();
}

function printArray(item, index) {
    document.getElementById("cars").innerHTML += (index + 1) + ". " + item + " ";
}

function calculateData() {
    document.getElementById("numLength").innerHTML = "Length of numbers is " + num.length;
    document.getElementById("carsLength").innerHTML = "Length of cars is " + cars.length;
    let sum = 0;
    num.forEach((value) => {
        sum += parseInt(value);
    });
    let avg = (sum / num.length);
    document.getElementById("carsLength").innerHTML = "SUM of nums is: " + sum + " and the AVG is: " + avg;
}