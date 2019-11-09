/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
function Rectangle(width, height) {
    this.width = parseInt(width);
    this.height = parseInt(height);
    this.perimeter = 2 * (this.width + this.height);
}

Rectangle.prototype.getRect = function () {
    return "Rectangle width is: " + this.width + " and Rectangle height is: " + this.height;
};

Rectangle.prototype.getPer = function () {
    return this.perimeter;
};

let Rectangles = [];
let size = (Math.random() * 20) + 1;
for (let i = 0; i < size; i++)
    Rectangles.push(new Rectangle(Math.round((Math.random() * 100) + 1), Math.round((Math.random() * 100) + 1)));

function showRectangles() {
    document.getElementById("rectangles").innerHTML = "";
    Rectangles.forEach(rect => {
        document.getElementById("rectangles").innerHTML += rect.getRect() + "<br/>";
    });
}

function calculateData() {
    document.getElementById("perimeter").innerHTML = "";
    let max = 0;
    Rectangles.forEach(rect => {
        if (max < rect.getPer())
            max = rect.getPer();
    });
    document.getElementById("perimeter").innerHTML = "The biggest Rectangle has perimeter of: " + max;
}