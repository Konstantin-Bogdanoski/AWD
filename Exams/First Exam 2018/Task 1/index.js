/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */

f = function () {
    let instance;
    return {
        getInstance: function () {
            console.log("Getting instance of function");
            if (!instance) {
                return new Object("Function created");
            }
            return instance;
        },

        doSomething: function () {
            console.log("Doing something");
        }
    }
};

call_up_to = function (func, num) {
    for (let i = 0; i < num; i++)
        func.getInstance();
    return func;
};

func = call_up_to(f(), 5);
func.doSomething();


