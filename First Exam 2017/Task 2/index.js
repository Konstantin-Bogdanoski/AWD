/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
class extObj extends String {
    data;

    toString() {
        return "This is an object that extends String";
    }

    constructor(data) {
        super();
        this.data = data;
    }

    get data() {
        return this.data;
    }

    set data(value) {
        this.data = value;
    }
}

class MyClass {
    name;
    date;
    data;
    nestedObj;
    extendsObj;

    constructor(name = null, date = null, data = null, nestedObj = null, extendsObj = null) {
        this.name = name;
        this.date = date;
        this.data = data;
        this.nestedObj = nestedObj;
        this.extendsObj = extendsObj;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get date() {
        return this.date;
    }

    set date(value) {
        this.date = value;
    }

    get data() {
        return this.data;
    }

    set data(value) {
        this.data = value;
    }

    get nestedObj() {
        return this.nestedObj;
    }

    set nestedObj(value) {
        this.nestedObj = value;
    }

    get extendsObj() {
        return this.extendsObj;
    }

    set extendsObj(value) {
        this.extendsObj = value;
    }
}

let subObc = {
    name: "Nested Object",
    data: "What it do baby?"
};

deep_clone = function (original) {
    let result = {};
    for (let property in original)
        if (original.hasOwnProperty(property))
            result[property] = original[property];
    return result;
};

//Main Object
let originalObj = new MyClass("My Object", new Date(), [1, 6, 1, 0, 4, 8, "161048", 'K', 'B', "Konstantin Bogdanoski"], subObc, new extObj("this object extends String"));

//Copied Object
let copiedObj = deep_clone(originalObj);

console.log(originalObj);
console.log(copiedObj);
console.log("Changing ALL values in copiedObj");
copiedObj["name"] = "changed the name";
copiedObj["date"] = Date.now();
copiedObj["data"] = "changed the data";
copiedObj["nestedObj"] = {name: "New nested Obj"};
copiedObj["extendsObj"] = new extObj("New Extends Object");
console.log(originalObj);
console.log(copiedObj);