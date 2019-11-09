/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
let id = 2;

addNewFile = function () {
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "file");
    newInput.setAttribute("id", (id).toString());
    id++;
    console.log(id.toString());
    document.getElementById("container").appendChild(newInput);
    document.getElementById("container").appendChild(document.createElement("br"));
};

removeLastFile = function () {
    let lastFile = document.getElementById((id - 1).toString());
    id--;
    document.getElementById("container").removeChild(lastFile);
    document.getElementById("container").removeChild(document.getElementById("container").lastElementChild);
};