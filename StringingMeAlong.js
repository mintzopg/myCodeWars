// Description:

// Create a function that will allow you to pass in a string, with the ability to add to this with more function calls. When it is finally passed an empty argument return the full concatinated string of all arguments pased previously.

// For example: createMessage("Hello")("World!")("how")("are")("you?")();

// This will return the following: "Hello World! how are you?"

var createMessage = function (str1) {
    var fn = (str2) => {
        if (!str2) return str1;
        str1 += " " + str2;
        return fn;
    };

    return fn;
};



var buildMessage = function (str1) {
    var fn = function (str2) {
        if (!str2) return str1;
        str1 += " " + str2;
        return fn;
    };

    return fn;
};
