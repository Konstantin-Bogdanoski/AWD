/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
let singleton = (function () {
    let instance;
    let dateOfCreation;

    function setDate() {
        console.log("Singleton created at " + Date.now());
        dateOfCreation = Date.now();
        return new Object("New instance");
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = setDate();
            }
            return instance;
        }
    }
})();

sin1 = singleton.getInstance();
sin2 = singleton.getInstance();
sin3 = singleton.getInstance();
sin4 = singleton.getInstance();
console.log(sin1 === sin2 && sin1 === sin3 && sin1 === sin4 && sin2 === sin3 && sin2 === sin4 && sin4 === sin3);